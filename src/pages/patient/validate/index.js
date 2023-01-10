import React, { useState, useEffect } from "react";
import AuthLayout from "../../../components/templates/authLayout";
import Cookies from "universal-cookie";
import constants from "../../../utils/constants";
import { useTranslation } from "next-i18next";
import { Box, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Api } from "../../api/api";
import { colors } from "../../../styles/theme";
import ConfirmationForm from "../../../components/organisms/ConfirmationForm/confirmationForm";
import globalStyles from "../../../styles/Global.module.scss";
import { setUsernameFromQuery } from "../update-password";

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}

export default function ValidatePage({ query }) {
  const { t, ready } = useTranslation("translation", {
    keyPrefix: "ValidatePage",
  });
  const router = useRouter();
  const [isloaded, setLoaded] = useState(false);
  const [showExpiredForm, setShowExpiredForm] = useState(false);
  const [confirmationFormData, setConfirmationFormData] = useState({
    title: constants.EMPTY_STRING,
    subtitle: constants.EMPTY_STRING,
    description: constants.EMPTY_STRING,
    postMessage: constants.EMPTY_STRING,
    isSuccessPostMessage: false,
    showPostMessage: true,
    buttonLabel: constants.EMPTY_STRING,
    buttonIcon: null,
    butttonMode: constants.SECONDARY,
    onCTAButtonClicked: function () {
      router.push(`/patient/login`);
    },
  });
  const queryParam = query || {};
  queryParam.username = setUsernameFromQuery(router);

  const expiredOneTimeLinkDescription = function () {
    return (
      <Typography
        style={{ marginBottom: "22px" }}
        aria-label={`This link is now expired. Please go to “Forgot Password” to retrieve a new link.`}
      >
        {t("expiredLink1")}
        {" '"}
        <Link
          href="/patient/forgot-password"
          style={{ cursor: "pointer", color: colors.teal }}
        >
          {t("forgotPassword")}
        </Link>
        {"' "}
        {t("expiredLink2")}
      </Typography>
    );
  };

  const onShowErrorPostMessage = (postbody) => {
    let confirmationFormProps = {};
    if (postbody && postbody.oneTimeToken) {
      confirmationFormProps = {
        ...confirmationFormData,
        pageTitle: "One-time link expired page",
        title: t("expiredTitleOneTime"),
        postMessage: t("expiredPostmessageOneTime"),
        buttonLabel: t("backButtonLink"),
        additional: expiredOneTimeLinkDescription,
      };
      setConfirmationFormData(confirmationFormProps);
    } else if (postbody && postbody.resetPasswordToken) {
      confirmationFormProps = {
        ...confirmationFormData,
        pageTitle: "Password reset page",
        title: t("expiredTitleResetPassword"),
        postMessage: t("expiredPostmessageResetPassword"),
        buttonLabel: t("backButtonLink"),
        additional: expiredOneTimeLinkDescription,
      };
      setConfirmationFormData(confirmationFormProps);
    }
    setShowExpiredForm(true);
  };

  function getPatientId(postBody, callback) {
    const api = new Api();
    api
      .getPatientId(postBody)
      .then((response) => {
        callback(response.ecpPatientId || "");
      })
      .catch(() => {
        callback(false);
      });
  }

  function getUserData(postbody) {
    const cookies = new Cookies();
    const post = {
      username: postbody.username,
    };
    const api = new Api();
    api
      .getUserData(post)
      .then((response) => {
        const callBack = (patientId) => {
          const userData = {
            communicationMethod: response.communicationMethod,
            patientId,
          };
          localStorage.setItem("userData", JSON.stringify(userData));
          cookies.set("authorized", true, { path: "/patient" });
          const hostname = window.location.origin;
          window.location.href = `${hostname}/patient`;
        };
        getPatientId(post, callBack);
      })
      .catch(() => {
        //error user data
      });
  }

  const onCalledOneTimeLinkValidationAPI = function () {
    const cookies = new Cookies();
    const postbody = {
      oneTimeToken: Number(queryParam.oneTimeToken),
      username: queryParam.username,
    };
    const api = new Api();
    api
      .tokenValidation(postbody, "oneTimeLink")
      .then(function (response) {
        cookies.set("username", postbody.username, { path: "/patient" });
        cookies.set("accessToken", response.access_token, { path: "/patient" });
        cookies.set("refreshToken", response.refresh_token, {
          path: "/patient",
        });
        getUserData(postbody);
      })
      .catch(function () {
        onShowErrorPostMessage(postbody);
      });
  };

  const onCalledResetPasswordValidationAPI = function () {
    const postbody = {
      resetPasswordToken: Number(queryParam.resetPasswordToken),
      username: queryParam.username,
    };
    const api = new Api();
    api
      .tokenValidation(postbody, "reset")
      .then(function () {
        //Navigate to Update
        router.push(`update-password?username=${queryParam.username}`);
      })
      .catch(function () {
        onShowErrorPostMessage(postbody);
      });
  };

  const onValidateQuesryParam = function () {
    if (queryParam && queryParam.oneTimeToken) {
      onCalledOneTimeLinkValidationAPI();
    } else if (queryParam && queryParam.resetPasswordToken) {
      onCalledResetPasswordValidationAPI();
    }
  };

  useEffect(() => {
    if (!isloaded) {
      onValidateQuesryParam();
      setLoaded(true);
    }
    return () => {
      //this is intentional
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {ready && (
        <Box className={globalStyles.containerPage}>
          {showExpiredForm ? (
            <ConfirmationForm
              {...confirmationFormData}
              showPostMessage={true}
            />
          ) : (
            <></>
          )}
        </Box>
      )}
    </>
  );
}

ValidatePage.getLayout = function getLayout(page) {
  return <AuthLayout isNotShowHeader={true}>{page}</AuthLayout>;
};
