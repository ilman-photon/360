import React, { useEffect, useState } from "react";
import AuthLayout from "../../../components/templates/authLayout";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../../store";
import { Api } from "../../api/api";
import { Box } from "@mui/material";
import SetPasswordComponent from "../../../components/organisms/SetPassword/setPassword";
import globalStyles from "../../../styles/Global.module.scss";
import Cookies from "universal-cookie";
import constants from "../../../utils/constants";
import ConfirmationForm from "../../../components/organisms/ConfirmationForm/confirmationForm";
import MESSAGES from "../../../utils/responseCodes";
import { useRouter } from "next/router";
import { loginProps } from "../login";
import { useTranslation } from "next-i18next";

export async function getServerSideProps({ query }) {
  return {
    props: {
      username: query ? query.username : "",
      token: query.token ? query.token : "",
    },
  };
}

export default function SetPasswordPage({ username, token }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const formMessage = useSelector((state) => state.index.formMessage);
  const [showPostMessage, setShowPostMessage] = useState(false);
  const [isAppointment, setAppointment] = useState(true);
  const [isloaded, setLoaded] = useState(false);

  const { t } = useTranslation("translation", {
    keyPrefix: "ValidatePage",
  });
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
    onCTAButtonClicked: function ({ router }) {
      router.push(`/patient/login`);
    },
  });

  const confirmationFormProps = {
    pageTitle: "Password Set page",
    title: "Password Set",
    postMessage: "Password has been set",
    showPostMessage: true,
    isSuccessPostMessage: true,
    buttonLabel: "Back to Login",
    butttonMode: constants.SECONDARY,
    onCTAButtonClicked: function () {
      router.push(`/patient/login`);
    },
    formStyle: { marginTop: "0px" },
  };

  const onShowErrorPostMessage = () => {
    const confirmationErrorFormProps = {
      ...confirmationFormData,
      pageTitle: "Password reset page",
      title: t("expiredTitleResetPassword"),
      postMessage: t("expiredPostmessageResetPassword"),
      buttonLabel: t("backButtonLink"),
    };
    setConfirmationFormData(confirmationErrorFormProps);
  };

  const onCalledOneTimeLinkValidationAPI = function () {
    const cookies = new Cookies();
    const domain = window.location.origin;
    const postbody = {
      link: `${domain}/patient/sync/set-password`,
      token: token,
      username: username,
    };
    const api = new Api();
    api
      .tokenValidation(postbody, "syncToken")
      .then(function (response) {
        cookies.set("username", postbody.username, { path: "/patient" });
        cookies.set("accessToken", response.access_token, { path: "/patient" });
        cookies.set("refreshToken", response.refresh_token, {
          path: "/patient",
        });
        getUserData(postbody);
      })
      .catch(function () {
        onShowErrorPostMessage();
      });
  };

  const onValidateSync = function () {
    onCalledOneTimeLinkValidationAPI();
  };

  useEffect(() => {
    if (!isloaded && router.asPath.includes("/patient/sync")) {
      onValidateSync();
      setLoaded(true);
    }
    return () => {
      //this is intentional
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (router.asPath.includes("/patient/sync")) {
      setAppointment(true);
    } else setAppointment(false);
  }, [router]);

  const OnSetPasswordClicked = async function (data) {
    dispatch(resetFormMessage());
    const api = new Api();
    const postbody = {
      username: username,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    if (isAppointment) {
      postbody["patientType"] = "G";
    }
    api
      .getRegistrationSetPassword(postbody)

      .then(function () {
        setShowPostMessage(true);
        setTimeout(() => {
          // after register handler
          loginProps.OnLoginClicked(
            {
              username,
              password: postbody.password,
            },
            router,
            () => {
              //this is intentional
            },
            dispatch
          );
        }, 2000);
      })
      .catch(function (err) {
        if (err.ResponseCode) {
          const errorMessage = MESSAGES[err.ResponseCode || 3500];

          dispatch(
            setFormMessage({
              success: false,
              title: errorMessage.title,
              content: errorMessage.content,
              isBackToLogin: errorMessage.isBackToLogin,
            })
          );
        }
      });
  };
  return (
    <Box className={globalStyles.containerPage}>
      {!showPostMessage ? (
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={username}
          formMessage={formMessage}
          onSetPasswordClicked={OnSetPasswordClicked}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
        />
      ) : (
        <ConfirmationForm {...confirmationFormProps} />
      )}
    </Box>
  );
}

SetPasswordPage.getLayout = function getLayout(page) {
  const backgroundImage = "/register-bg.png";
  return (
    <AuthLayout
      showMobileImage={false}
      imageSrc={backgroundImage}
      title={"Set Password"}
      customImageBg={true}
      isNotShowHeader={true}
    >
      {page}
    </AuthLayout>
  );
};
