import React, { useState } from "react";
import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import ForgotPassword from "../../components/organisms/ForgotPassword/forgotPassword";
import SelectOptionForm from "../../components/organisms/SelectOptionForm/selectOptionForm";
import PasswordSecurityQuestion from "../../components/organisms/PasswordSecurityQuestion/PasswordSecurityQuestion";
import ConfirmationForm from "../../components/organisms/ConfirmationForm/confirmationForm";
import { Api } from "../api/api";
import constants from "../../utils/constants";
import RowRadioButtonsGroup from "../../components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, Typography } from "@mui/material";

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

let confirmationFormProps = {
  title: constants.EMPTY_STRING,
  subtitle: constants.EMPTY_STRING,
  description: constants.EMPTY_STRING,
  postMessage: constants.EMPTY_STRING,
  successPostMessage: true,
  buttonLabel: constants.EMPTY_STRING,
  buttonIcon: null,
  additional: null
};

const modeOfCommuication = function (control){
  const options = [
    { label: "Email", value: constants.EMAIL },
    { label: "Phone", value: constants.PHONE }
  ];
  return <Controller
    name={constants.MODE_COMMUNICATION_KEY}
    control={control}
    render={({ field: { onChange, value }}) => {
      return(
        <RowRadioButtonsGroup
            label="Mode of Communication"
            options={options}
            value={value}
            onChange={onChange}
        />
      )
    }}
  />
}

const backToLoginProps = {
  onBackToLoginClicked: function (router) {
    router.push("/patient/login");
  },
};
export default function ForgotPasswordPage() {
  const { t } = useTranslation("translation", { keyPrefix: "ForgotPasswordPage" });

  const [patientData, setPatientData] = useState({
    email: constants.EMPTY_STRING,
    phoneNumber: constants.EMPTY_STRING,
    securityQuestions: [],//MOCKED_SECURITY_QUESTION,
    preferredComunication: "Both"
  });
  const [showPostMessage, setShowPostMessage] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(true);
  const [showSetOption, setShowSetOption] = useState(false);
  const [showPasswordSecurityQuestion, setShowPasswordSecurityQuestion] =
    useState(false);
  const [showOneTimeLink, setShowOneTimeLink] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  //Call API for userame validation
  const onCalledValidateUsernameAPI = function (postbody, router, showForm) {
    // setShowPostMessage(true)
    onContinueButtonClicked(showForm)
  }

  //Call API for one time link
  const onCalledOneTimeLinkAPI = function (postbody) {
    //TO DO: call API for one time link

    // Handle success to call API 
    const hasSecurityQuestion = patientData.securityQuestions.length > 0
    confirmationFormProps = {
      title: t("successSentLinkTitleOneTime"),
      subtitle: t("subtitleOneTimeSuccess"),
      description:
        `If you did not receive the link, try to ${(patientData.securityQuestions.length > 0 ? t('answerSecurityQuestionsLabel') : t('receiveLinkToResetPasswordLabel')).toLocaleLowerCase()}`,
      postMessage: t("postMessageOneTime"),
      postMessageTitle: t("successLabel"),
      successPostMessage: true,
      buttonLabel: hasSecurityQuestion ? t('answerSecurityQuestionsLabel') : t('receiveLinkToResetPasswordLabel'),
      additional: null,
      onCTAButtonClicked: function(){ onContinueButtonClicked(hasSecurityQuestion ? constants.SECURITY_QUESTION : constants.PASSWORD_RESET) }
    };
    setShowPostMessage(true)
  }

  //Call API for password reset
  const onCalledPasswordResetAPI = function (postbody, modeComunication) {
    //TO DO: call API for one time link

    //TO DO: Remove this when integrate with services
    const response = {
      "ResponseCode": 1000, 
      "ResponseType":"success",
      "email": "donj@yahoo.com"
    }
    const userCommunicationCode = modeComunication.toLowerCase() === "email" ? response.email : response.phoneNumber
    // Handle success to call API 
    confirmationFormProps = {
      title: t("titlePasswordReset"),
      subtitle:
        `Check ${userCommunicationCode} for an email to reset your password.`,
      description: t("descriptionPasswordResetSuccess"),
      postMessage: `Link sent to your ${modeComunication.toLowerCase()}`,
      successPostMessage: true,
      buttonLabel: t('primaryButtonTextPasswordResetSuccess'),
      additional: null,
      onCTAButtonClicked: function(){ onContinueButtonClicked(constants.ONE_TIME_LINK) }
    };
    setShowPostMessage(true)
  }

  //Handle show/hide form in forgot password
  const onContinueButtonClicked = function (form, router) {
    setShowPostMessage(false)
    setShowForgotPassword(false)
    setShowSetOption(false)
    setShowPasswordSecurityQuestion(false)
    setShowOneTimeLink(false)
    setShowPasswordReset(false)

    if (form === "setOption") {
      setShowSetOption(true);
    } else if (form === constants.SECURITY_QUESTION ) {
      setShowPasswordSecurityQuestion(true);
    }else if (form === constants.PASSWORD_RESET) {
      //TO DO: handle showing the reset password form
      if(patientData.preferredComunication.toLocaleLowerCase() === constants.BOTH){
        //TO DO: Set props for one time link
        confirmationFormProps.title = t("titlePasswordReset")
        confirmationFormProps.subtitle = t("subtitlePasswordReset")
        confirmationFormProps.additional = modeOfCommuication
        confirmationFormProps.buttonLabel = t("primaryButtonOneTime")
        confirmationFormProps.buttonIcon = <InsertLinkIcon />
        confirmationFormProps.onCTAButtonClicked = function({data}){
          const modeComunication = data[constants.MODE_COMMUNICATION_KEY] === constants.EMAIL ?
            "Email" : "Phone number"
          onCalledPasswordResetAPI({}, modeComunication)
        }
      } else {
        //Call service for password reset
        onCalledPasswordResetAPI({}, patientData.preferredComunication)
      }
      setShowPasswordReset(true);
    } else if (form === constants.ONE_TIME_LINK) {
      if(patientData.preferredComunication.toLocaleLowerCase() === constants.BOTH){
        //TO DO: Set props for one time link
        confirmationFormProps.title = t("titleOneTime")
        confirmationFormProps.subtitle = t("subtitleOneTime"),
        confirmationFormProps.additional = modeOfCommuication
        confirmationFormProps.buttonLabel = t("primaryButtonOneTime")
        confirmationFormProps.buttonIcon = <InsertLinkIcon />
        confirmationFormProps.onCTAButtonClicked = function({data}){onCalledOneTimeLinkAPI()}
      } else {
        //Call service for one time link
        onCalledOneTimeLinkAPI({})
      }
      setShowOneTimeLink(true);
    } else if (form === "updatePassword"){
      router.push("/patient/update-password");
    }
  };

  return (
    <div className={[styles.forgotPasswordPage, "hide-scrollbar"].join(" ")}>
      <section className={styles.forgotPasswordComponentContainer}>
        {showForgotPassword ? (
          <ForgotPassword
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
          <SelectOptionForm
            {...backToLoginProps}
            onContinueButtonClicked={onContinueButtonClicked}
            hasSecurityQuestion={patientData && patientData.securityQuestions.length}
          />
        ) : (
          <></>
        )}
        {showPasswordSecurityQuestion ? (
          <PasswordSecurityQuestion
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
          <ConfirmationForm 
            {...confirmationFormProps} 
            {...backToLoginProps}
            showPostMessage={showPostMessage}
            setShowPostMessage={setShowPostMessage}/>
        ) : (
          <></>
        )}
        {showPasswordReset ? (
          <ConfirmationForm 
            {...confirmationFormProps} 
            {...backToLoginProps}
            showPostMessage={showPostMessage}
            setShowPostMessage={setShowPostMessage}/>
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
