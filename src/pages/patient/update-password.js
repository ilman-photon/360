import React, { Suspense, useState } from "react";
import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import constants from "../../utils/constants";
import { Api } from "../api/api";
import ConfirmationForm from "../../components/organisms/ConfirmationForm/confirmationForm";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

//Prevent html being match between server and client
const SetPasswordComponent = dynamic(
  () => import("../../components/organisms/SetPassword/setPassword"),
  {
    suspense: true,
  }
);

const setUsernameFromQuery = function (route) {
  return route && route.query && route.query.username
    ? route.query.username
    : constants.EMPTY_STRING;
};

export default function UpdatePasswordPage() {
  const { t } = useTranslation("translation", {
    keyPrefix: "UpdatePasswordPage",
  });
  const [showPostMessage, setShowPostMessage] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(true);
  const route = useRouter();
  const username = setUsernameFromQuery(route);

  const confirmationFormProps = {
    title: t("successUpdatePassword"),
    postMessage: t("postMessage"),
    showPostMessage: true,
    isSuccessPostMessage: true,
    buttonLabel: t("backButtonLink"),
    butttonMode: constants.SECONDARY,
    onCTAButtonClicked: function () {
      route.push(`/patient/login`);
    },
    formStyle: { marginTop: "0px" },
  };

  //Call API for userame validation
  const onCallConfirmPasswordAPI = function ({ password, confirmPassword }) {
    const postbody = {
      patient: { userName: username },
      confirmPassword: { Password: password, ConfirmPassword: confirmPassword },
    };
    const api = new Api();
    api
      .updatePassword(postbody)
      .then(function () {
        setShowPostMessage(true);
        setShowUpdatePassword(false);
      })
      .catch(function () {
        console.error("Somthing went wrong");
      });
  };

  return (
    <Box sx={{ alignSelf: "flex-end" }}>
      {showUpdatePassword ? (
        <Suspense fallback={`Loading...`}>
          <SetPasswordComponent
            username={username}
            title={t("title")}
            showPostMessage={showPostMessage}
            setShowPostMessage={setShowPostMessage}
            onBackToLoginClicked={function (router) {
              router.push("/patient/login");
            }}
            onSetPasswordClicked={onCallConfirmPasswordAPI}
            passwordPlaceHolder={t("passwordPlaceHolder")}
            confirmPasswordPlaceHolder={t("confirmPasswordPlaceHolder")}
            ctaButtonLabel={t("ctaButtonLabel")}
            showPasswordValidator={true}
            isUpdatePassword={true}
          />
        </Suspense>
      ) : (
        <></>
      )}
      {showPostMessage ? (
        <ConfirmationForm {...confirmationFormProps} />
      ) : (
        <></>
      )}
    </Box>
  );
}

UpdatePasswordPage.getLayout = function getLayout(page) {
  const backgroundImage = "/login-bg.png";
  return (
    <AuthLayout showMobileImage={true} imageSrc={backgroundImage}>
      {page}
    </AuthLayout>
  );
};
