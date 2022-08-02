import React, { useEffect, useState } from "react";
import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import SetPasswordComponent from "../../components/organisms/SetPassword/setPassword";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import constants from "../../utils/constants";
import { Api } from "../api/api";
import ConfirmationForm from "../../components/organisms/ConfirmationForm/confirmationForm";

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
    onCTAButtonClicked: function ({ router }) {
      router.push(`/patient/login`);
    },
    formStyle: { marginTop: "0px" },
  };

  //Call API for userame validation
  const onCallConfirmPasswordAPI = function ({ password, confirmPassword }) {
    const postbody = {
      patient: { email: username },
      confirmPassword: [
        { Password: password, ConfirmPassword: confirmPassword },
      ],
    };
    const api = new Api();
    api.client
      .post(
        "https://patientpassword.mocklab.io/reset/confirmpassword ",
        postbody
      )
      .then(function (response) {
        if (response && response.status === 200) {
          setShowPostMessage(true);
          setShowUpdatePassword(false);
        }
      })
      .catch(function () {
        //Handle error secenario
      });
  };

  return (
    <div className={styles.forgotPasswordPage}>
      <section className={styles.forgotPasswordComponentContainer}>
        {showUpdatePassword ? (
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
