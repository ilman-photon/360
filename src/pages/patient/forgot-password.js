import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import AuthLayout from "../components/templates/authLayout";
import ForgotPasswordComponent from "../components/organisms/ForgotPassword/forgotPassword";
import SetOptionComponent from "../components/organisms/SelectOption/selectOption";
import PasswordSecurityQuestionComponent from "../components/organisms/PasswordSecurityQuestion/PasswordSecurityQuestion";
import ConfirmFormComponent from "../components/organisms/ConfirmationForm/confirmationForm";
import { useTranslation } from "react-i18next";

const MOCKED_SECURITY_QUESTION = [ 
  {"SecurityQuestion-1": "DetailQuestion1", "SecurityAnswer-1": "DetailAnswer1"}, 
  {"SecurityQuestion-2": "DetailQuestion2", "SecurityAnswer-2": "DetailAnswer2"}, 
  {"SecurityQuestion-3": "DetailQuestion3", "SecurityAnswer-3": "DetailAnswer3"} 
] 

const oneTimeLinkProps = {
  title: "One-time link sent",
  subtitle: "Choose a mode of communication where we should send you the magic link.",
  description: " If you did not receive the link, try to answer security questions",
  postMessage:"",
  successPostMessage: true,
  buttonLabel: "Answer security questions"
}

const forgotPasswordProps = {
  OnBackToLoginClicked: function (router) {
    router.push("/login");
  }
};
export default function ForgotPasswordPage() {
  const [showForgotPassword, setShowForgotPassword] = useState(true);
  const [showSetOption, setShowSetOption] = useState(false);
  const [showPasswordSecurityQuestion, setShowPasswordSecurityQuestion] = useState(false);
  const [showOneTimeLink, setShowOneTimeLink] = useState(false);

  const onContinueButtonClicked = function(form){
    setShowForgotPassword(false)
    setShowSetOption(false)
    setShowPasswordSecurityQuestion(false)
    setShowOneTimeLink(false)

    if(form === "setOption"){
      setShowSetOption(true)
    } else if(form === "securityQuestion"){
      setShowPasswordSecurityQuestion(true)
    } else if(form === "oneTimeLink") {
      setShowOneTimeLink(true)
    }
  }

  return (
    <div className={[styles.forgotPasswordPage, 'hide-scrollbar'].join(' ')}>
      <section className={styles.forgotPasswordComponentContainer}>
        {showForgotPassword ? <ForgotPasswordComponent {...forgotPasswordProps} OnContinueButtonClicked={onContinueButtonClicked}/> : <></>}
        {showSetOption ? <SetOptionComponent {...forgotPasswordProps} OnContinueButtonClicked={onContinueButtonClicked}/> : <></>}
        {showPasswordSecurityQuestion ? <PasswordSecurityQuestionComponent {...forgotPasswordProps} securityQuestionData={MOCKED_SECURITY_QUESTION}/> : <></>}
        {showOneTimeLink ? <ConfirmFormComponent {...oneTimeLinkProps}/>: <></>}
      </section>
    </div>
  );
}

ForgotPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
