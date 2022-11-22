import React, { useState } from "react";
import AuthLayout from "../../../components/templates/authLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import constants from "../../../utils/constants";
import { Api } from "../../api/api";
import ConfirmationForm from "../../../components/organisms/ConfirmationForm/confirmationForm";
import { Box } from "@mui/material";
import SetPasswordComponent from "../../../components/organisms/SetPassword/setPassword";
import globalStyles from "../../../styles/Global.module.scss";

const setUsernameFromQuery = function (route) {
  const queryString = route.asPath?.split("?")[1];
  const splitQueryString = queryString?.split("=");
  return splitQueryString && splitQueryString.length > 0
    ? splitQueryString[1]
    : "";
};

export default function UpdatePasswordPage() {
  const { t } = useTranslation("translation", {
    keyPrefix: "UpdatePasswordPage",
  });
  const [showPostMessage, setShowPostMessage] = useState(false);
  const [postMessage, setPostMessage] = useState("");
  const [showUpdatePassword, setShowUpdatePassword] = useState(true);
  const route = useRouter();
  const username = setUsernameFromQuery(route);

  const confirmationFormProps = {
    pageTitle: "Password Updated page",
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
      confirmPassword: { password: password, ConfirmPassword: confirmPassword },
    };
    const api = new Api();
    api
      .updatePassword(postbody)
      .then(function () {
        setShowPostMessage(true);
        setShowUpdatePassword(false);
      })
      .catch(function (err) {
        if (err?.ResponseCode == 1001) {
          setShowPostMessage(true);
          setPostMessage("Something went wrong");
        }
        console.error("Something went wrong");
      });
  };

  return (
    <Box className={globalStyles.containerPage}>
      {showUpdatePassword ? (
        <SetPasswordComponent
          username={username}
          title={t("title")}
          showPostMessage={showPostMessage}
          postMessage={postMessage}
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
    <AuthLayout
      showMobileImage={false}
      imageSrc={backgroundImage}
      title={"Update Password page"}
      isNotShowHeader={true}
    >
      {page}
    </AuthLayout>
  );
};
