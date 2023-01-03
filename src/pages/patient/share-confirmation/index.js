import React, { useEffect, useState } from "react";
import { Api } from "../../api/api";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import EnterAccessCode from "../../../components/molecules/ShareMyPage/EnterAccessCode";
import ValidationContent from "../../../components/molecules/ShareMyPage/ValidationContent";
import BaseHeader from "../../../components/organisms/BaseHeader/baseHeader";
import { useSelector } from "react-redux";
import Head from "next/head";
import { setUsernameFromQuery } from "../update-password";

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}

export default function ShareConfirmationPage({ query }) {
  const [isloaded, setLoaded] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [validationMessage, setValidationMessage] = useState({
    title: "",
    message: "",
  });
  const [isSuccessResendCode, setIsSuccessResendCode] = useState(false);
  const [isActiveAccessCode, setIsActiveAccessCode] = useState(true);
  const [isError, setIsError] = useState(false);
  const [typeContent, setTypeContent] = useState("");
  const router = useRouter();
  const shareData = useSelector((state) => state.share.shareModalData);
  const [routerData, setRouterData] = useState({});
  const queryParam = query || {};
  /**
   * Delete this code after api service implementation
   */
  let staticInfo = {
    errorResendCode: {
      title: null,
      description: null,
      severity: "error",
    },
    incorrectCode: {
      title: "Incorrect Code",
      description: "Please try again",
      severity: "error",
    },
    successResendCode: {
      title: null,
      description:
        "Your requested a new access code, please try accessing with the new code.",
      severity: "info",
    },
    shareAnotherAccessCode: {
      title: null,
      description:
        "You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval",
      severity: "info",
    },
  };
  const [alertInfo, setAlertInfo] = useState(null);

  useEffect(() => {
    setTypeContent(shareData.type);
  }, [shareData]);

  const getValidationPage = (data) => {
    if (data?.responseType == 5002) {
      setIsActiveAccessCode(false);
    } else if (data?.responseCode == 5001) {
      getValidationMessage(false);
      setIsError(false);
    } else {
      setIsActiveAccessCode(true);
    }
  };

  const onCallValidation = (postBody) => {
    const api = new Api();
    api
      .validationSharePage(postBody)
      .then((responses) => {
        getValidationPage(responses);
      })
      .catch((responses) => {
        if (responses?.responseCode != 5000) {
          getValidationPage(responses);
        }
      });
  };

  useEffect(() => {
    if (isloaded) {
      setLoaded(false);
      queryParam.username = setUsernameFromQuery(router);
      queryParam.patientUsername = setUsernameFromQuery(router);
      const queryPatientEmail = queryParam.patientUsername;
      const queryEmail = queryParam.username;
      const queryToken = Number(queryParam.token);
      const queryDocumentId = queryParam.documentId;
      const queryDocumentType = queryParam.documentType;

      const postBody = {
        patientUserName: queryPatientEmail,
        email: queryEmail,
        token: queryToken,
        documentId: queryDocumentId,
        documentType: queryDocumentType,
      };

      setRouterData(postBody);
      onCallValidation(postBody);
    }
    return () => {
      //this is intentional
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isloaded]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const getValidationMessage = (isIncorrect) => {
    if (isIncorrect) {
      setValidationMessage({
        title: "Incorrect code entered multiple times",
        message:
          "You have attempted the wrong code multiple times, the link is no longer valid. Please request a new one.",
      });
    } else {
      setValidationMessage({
        title: "The validity of the link has expired.",
        message: "The link has expired please request a new one.",
      });
    }
    setShowValidation(true);
  };

  const goToSharePageDetail = () => {
    const isPrescription =
      typeContent == "glasses" ||
      typeContent == "contact" ||
      typeContent == "medication";
    const content = isPrescription
      ? "prescriptions"
      : typeContent
      ? "carePlans"
      : "healthRecord";
    router.push(
      `/patient/shared-page/${content}?username=${routerData.email}&category=${typeContent}&documentId=${routerData.documentId}`
    );
  };

  const setContentView = (response) => {
    if (response?.responseCode == 5003) {
      setIsError(false);
      getValidationMessage(true);
    } else {
      setIsError(true);
      setAlertInfo(staticInfo.incorrectCode);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onCallSubmit = (postBody) => {
    const api = new Api();
    api
      .verifyAccessCode(postBody)
      .then((responses) => {
        goToSharePageDetail();
      })
      .catch((responses) => {
        if (responses?.ResponseCode != 5000) {
          setContentView(responses);
        }
      });
  };

  const onSubmitCode = (value) => {
    const postBody = {
      patientUserName: routerData.patientUserName,
      email: routerData?.email,
      accessCode: value,
      token: routerData?.token,
      documentId: routerData?.documentId,
      documentType: routerData?.documentType,
    };
    onCallSubmit(postBody);
  };

  const onResendCode = () => {
    const postBody = {
      patientUserName: routerData.patientUserName,
      email: routerData?.email,
      documentId: routerData?.documentId,
      documentType: routerData?.documentType,
      codeType: "resendCode",
    };

    //TO DO handle resend code to call api service
    const api = new Api();
    api
      .resendCode(postBody)
      .then((responses) => {
        staticInfo.successResendCode.description = responses?.responseType;
        setIsSuccessResendCode(true);
        setAlertInfo(staticInfo.successResendCode);
      })
      .catch((responses) => {
        if (responses?.responseCode == 5009) {
          staticInfo.errorResendCode.description = responses?.responseType;
          setAlertInfo(staticInfo.errorResendCode);
        }
      });
  };

  return (
    <>
      <Head>
        <title>Access Code Page</title>
      </Head>
      <Box sx={{ background: "#f4f4f4", height: "100vh" }}>
        <BaseHeader />
        {showValidation ? (
          <ValidationContent validationMessage={validationMessage} />
        ) : (
          <EnterAccessCode
            onSubmitCode={onSubmitCode}
            handleResendCode={onResendCode}
            isErrorMsg={isError}
            isSuccessResendCode={isSuccessResendCode}
            isActiveAccessCode={isActiveAccessCode}
            alertInfo={alertInfo}
          />
        )}
      </Box>
    </>
  );
}
