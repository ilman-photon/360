import React, { Suspense, useState } from "react";
import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import constants from "../../utils/constants";
import { Api } from "../api/api";
import ConfirmationForm from "../../components/organisms/ConfirmationForm/confirmationForm";
import dynamic from "next/dynamic";

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
        alert("Somthing went wrong");
      });
  };

  return (
    <div className={styles.forgotPasswordPage}>
      <section className={styles.forgotPasswordComponentContainer}>
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
      </section>
    </div>
  );
}

UpdatePasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
