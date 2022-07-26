import React, { useState } from "react";
import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import ForgotPasswordComponent from "../../components/organisms/ForgotPassword/forgotPassword";
import SetOptionComponent from "../../components/organisms/SelectOption/selectOption";
import PasswordSecurityQuestionComponent from "../../components/organisms/PasswordSecurityQuestion/PasswordSecurityQuestion";
import ConfirmFormComponent from "../../components/organisms/ConfirmationForm/confirmationForm";
import { Api } from "../api/api";

const MOCKED_SECURITY_QUESTION = [
  {
    "Question": "DetailQuestion1",
    "Answer": "one",
  },
  {
    "Question": "DetailQuestion2",
    "Answer": "two",
  },
  {
    "Question": "DetailQuestion3",
    "Answer": "three",
  },
];

const oneTimeLinkProps = {
  title: "One-time link sent",
  subtitle:
    "Choose a mode of communication where we should send you the magic link.",
  description:
    " If you did not receive the link, try to answer security questions",
  postMessage: "",
  successPostMessage: true,
  buttonLabel: "Answer security questions",
};

const backToLoginProps = {
  onBackToLoginClicked: function (router) {
    router.push("/login");
  },
};
export default function ForgotPasswordPage() {
  const [showPostMessage, setShowPostMessage] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSetOption, setShowSetOption] = useState(false);
  const [showPasswordSecurityQuestion, setShowPasswordSecurityQuestion] =
    useState(true);
  const [showOneTimeLink, setShowOneTimeLink] = useState(false);

  //Call API for userame validation
  const onCalledValidateUsernameAPI = function (postbody, router, showForm) {
    const api = new Api();
    // api.client
    //   .post("https://patientlogin.mocklab.io/user/login", postbody)
    //   .then(function (response) {
    //     console.log(response);
    //     if (response && response.status === 200) {
    //       onContinueButtonClicked(showForm)
    //     }
    //   })
    //   .catch(function () {
    //     setShowPostMessage(true)
    //   });
    // setShowPostMessage(true)
    onContinueButtonClicked(showForm)
  }

  const onContinueButtonClicked = function (form, router) {
    setShowForgotPassword(false);
    setShowSetOption(false);
    setShowPasswordSecurityQuestion(false);
    setShowOneTimeLink(false);

    if (form === "setOption") {
      setShowSetOption(true);
    } else if (form === "securityQuestion") {
      setShowPasswordSecurityQuestion(true);
    } else if (form === "oneTimeLink") {
      setShowOneTimeLink(true);
    } else if (form === "updatePassword"){
      router.push("/patient/update-password");
    }
  };

  return (
    <div className={[styles.forgotPasswordPage, "hide-scrollbar"].join(" ")}>
      <section className={styles.forgotPasswordComponentContainer}>
        {showForgotPassword ? (
          <ForgotPasswordComponent
            {...backToLoginProps}
            onContinueButtonClicked={onContinueButtonClicked}
            showPostMessage={showPostMessage}
            setShowPostMessage={setShowPostMessage}
            onCalledValidateUsernameAPI={onCalledValidateUsernameAPI}
          />
        ) : (
          <></>
        )}
        {showSetOption ? (
          <SetOptionComponent
            {...backToLoginProps}
            onContinueButtonClicked={onContinueButtonClicked}
          />
        ) : (
          <></>
        )}
        {showPasswordSecurityQuestion ? (
          <PasswordSecurityQuestionComponent
            {...backToLoginProps}
            showPostMessage={showPostMessage}
            setShowPostMessage={setShowPostMessage}
            securityQuestionData={MOCKED_SECURITY_QUESTION}
            onContinueButtonClicked={onContinueButtonClicked}
          />
        ) : (
          <></>
        )}
        {showOneTimeLink ? (
          <ConfirmFormComponent {...oneTimeLinkProps} />
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}

ForgotPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
