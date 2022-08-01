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
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

let confirmationFormProps = {
  title: constants.EMPTY_STRING,
  subtitle: constants.EMPTY_STRING,
  description: constants.EMPTY_STRING,
  postMessage: constants.EMPTY_STRING,
  successPostMessage: true,
  buttonLabel: constants.EMPTY_STRING,
  buttonIcon: null,
  additional: null,
};

const modeOfCommuicationUI = function (control) {
  const options = [
    { label: "Email", value: constants.EMAIL },
    { label: "Phone", value: constants.PHONE },
  ];
  return (
    <Controller
      name={constants.MODE_COMMUNICATION_KEY}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <RowRadioButtonsGroup
            label="Mode of Communication"
            options={options}
            value={value}
            onChange={onChange}
          />
        );
      }}
    />
  );
};

const mappingSecurityData = function (securityQuestionsData) {
  const securityQuestionList = [];
  for (const questions of securityQuestionsData) {
    const securityQuestion = {
      Question: constants.EMPTY_STRING,
      Answer: constants.EMPTY_STRING,
    };
    for (const key in questions) {
      if (key.includes("Question")) {
        securityQuestion["Question"] = questions[key];
      } else {
        securityQuestion["Answer"] = questions[key];
      }
    }
    securityQuestionList.push(securityQuestion);
  }
  return securityQuestionList;
};

const backToLoginProps = {
  onBackToLoginClicked: function (router) {
    router.push("/patient/login");
  },
};
export default function ForgotPasswordPage() {
  const { t } = useTranslation("translation", {
    keyPrefix: "ForgotPasswordPage",
  });

  const [patientData, setPatientData] = useState({
    username: constants.EMPTY_STRING,
    email: constants.EMPTY_STRING,
    phoneNumber: constants.EMPTY_STRING,
    securityQuestionsSet: false,
    securityQuestions: [],
    preferredComunication: "Both",
  });
  const [showPostMessage, setShowPostMessage] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(true);
  const [showSelectOption, setShowSelectOption] = useState(false);
  const [showPasswordSecurityQuestion, setShowPasswordSecurityQuestion] =
    useState(false);
  const [showOneTimeLink, setShowOneTimeLink] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  //Call API for userame validation
  const onCalledValidateUsernameAPI = function ({ username }, showForm) {
    const postbody = {
      patient: [{ "Email/Phone Number": username }],
    };
    const api = new Api();
    api.client
      .post("https://patientforgotpassword.mocklab.io/CTA/Continue", postbody)
      .then(function (response) {
        if (response && response.status === 200) {
          if (
            response.data &&
            response.data.patient &&
            response.data.patient[0]
          ) {
            const responsePatientData = response.data.patient[0];
            setPatientData({
              ...patientData,
              username: username,
              securityQuestionsSet:
                responsePatientData.securityQuestionsSet.toLocaleLowerCase() ===
                constants.YES,
              preferredComunication: responsePatientData.modeOfCommunication,
            });
          }
          onContinueButtonClicked(showForm);
        }
      })
      .catch(function () {
        setShowPostMessage(true);
      });
  };

  //Call API for security question & password reset
  const onCalledSecurityQuestionAPI = function () {
    const postbody = {
      patient: [
        {
          "Email/Phone Number": patientData.username,
          answerSecurityQuestions: "Yes",
        },
      ],
    };

    const api = new Api();
    api.client
      .post(
        "https://patientforgotpasswordasqs.mocklab.io/answersecurityquestions",
        postbody
      )
      .then(function (response) {
        if (response && response.status === 200) {
          //Handle response call for patient that have security question
          if (response.data && response.data.securityQuestions) {
            const securityQuestionList = mappingSecurityData(
              response.data.securityQuestions
            );
            setPatientData({
              ...patientData,
              securityQuestions: securityQuestionList,
            });
          }
          setShowPasswordSecurityQuestion(true);
        }
      })
      .catch(function () {
        //Handle error secenario
      });
  };

  //Call API for reset password
  const onCalledResetPasswordAPI = function (modeOfCommuication) {
    const postbody = {
      patient: [{ "Email/Phone Number": patientData.username }],
    };
    const api = new Api();
    api.client
      .post("https://patientpasswordresetlink.mocklab.io/resetlink", postbody)
      .then(function (response) {
        if (response && response.status === 200) {
          const userCommunicationCode =
            modeOfCommuication.toLowerCase() === "email"
              ? response.email
              : response.phoneNumber;
          // Handle success to call API
          confirmationFormProps = {
            title: t("titlePasswordReset"),
            subtitle: `Check ${userCommunicationCode} for an email to reset your password.`,
            description: t("descriptionPasswordResetSuccess"),
            postMessage: `Link sent to your ${modeOfCommuication.toLowerCase()}`,
            successPostMessage: true,
            buttonLabel: t("primaryButtonTextPasswordResetSuccess"),
            additional: null,
            onCTAButtonClicked: function () {
              onContinueButtonClicked(constants.ONE_TIME_LINK);
            },
          };
          setShowPostMessage(true);
        }
      })
      .catch(function () {
        //Handle error secenario
      });
  };

  //Call API for one time link
  const onCalledOneTimeLinkAPI = function () {
    const postbody = {
      patient: [
        { "Email/Phone Number": patientData.username, oneTimeLink: "Yes" },
      ],
    };

    const api = new Api();
    api.client
      .post("https://patientforgotpasswordotl.mocklab.io/onetimelink", postbody)
      .then(function (response) {
        if (response && response.status === 200) {
          confirmationFormProps = {
            title: t("successSentLinkTitleOneTime"),
            subtitle: t("subtitleOneTimeSuccess"),
            description: `If you did not receive the link, try to ${(patientData.securityQuestionsSet
              ? t("answerSecurityQuestionsLabel")
              : t("receiveLinkToResetPasswordLabel")
            ).toLocaleLowerCase()}`,
            postMessage: t("postMessageOneTime"),
            postMessageTitle: t("successLabel"),
            successPostMessage: true,
            buttonLabel: patientData.securityQuestionsSet
              ? t("answerSecurityQuestionsLabel")
              : t("receiveLinkToResetPasswordLabel"),
            additional: null,
            onCTAButtonClicked: function () {
              onContinueButtonClicked(
                patientData.securityQuestionsSet
                  ? constants.SECURITY_QUESTION
                  : constants.PASSWORD_RESET
              );
            },
          };
          setShowPostMessage(true);
        }
      })
      .catch(function () {
        //Handle error secenario
      });
  };

  //Handle show/hide form in forgot password
  const onContinueButtonClicked = function (form, router) {
    setShowPostMessage(false);
    setShowForgotPassword(false);
    setShowSelectOption(false);
    setShowPasswordSecurityQuestion(false);
    setShowOneTimeLink(false);
    setShowPasswordReset(false);

    if (form === constants.SELECT_OPTION) {
      setShowSelectOption(true);
    } else if (form === constants.SECURITY_QUESTION) {
      onCalledSecurityQuestionAPI();
    } else if (form === constants.PASSWORD_RESET) {
      //TO DO: handle showing the reset password form
      if (
        patientData.preferredComunication.toLocaleLowerCase() === constants.BOTH
      ) {
        //TO DO: Set props for one time link
        confirmationFormProps.title = t("titlePasswordReset");
        confirmationFormProps.subtitle = t("subtitlePasswordReset");
        confirmationFormProps.additional = modeOfCommuicationUI;
        confirmationFormProps.buttonLabel = t("primaryButtonOneTime");
        confirmationFormProps.buttonIcon = <InsertLinkIcon />;
        confirmationFormProps.onCTAButtonClicked = function ({ data }) {
          const modeComunication =
            data[constants.MODE_COMMUNICATION_KEY] === constants.EMAIL
              ? "Email"
              : "Phone number";
          onCalledResetPasswordAPI(modeComunication);
        };
      } else {
        //Call service for password reset
        onCalledResetPasswordAPI(patientData.preferredComunication);
      }
      setShowPasswordReset(true);
    } else if (form === constants.ONE_TIME_LINK) {
      if (
        patientData.preferredComunication.toLocaleLowerCase() === constants.BOTH
      ) {
        //TO DO: Set props for one time link
        confirmationFormProps.title = t("titleOneTime");
        confirmationFormProps.subtitle = t("subtitleOneTime");
        confirmationFormProps.additional = modeOfCommuicationUI;
        confirmationFormProps.buttonLabel = t("primaryButtonOneTime");
        confirmationFormProps.buttonIcon = <InsertLinkIcon />;
        confirmationFormProps.onCTAButtonClicked = function () {
          onCalledOneTimeLinkAPI();
        };
      } else {
        //Call service for one time link
        onCalledOneTimeLinkAPI();
      }
      setShowOneTimeLink(true);
    } else if (form === "updatePassword") {
      router.push(`/patient/update-password?username=${patientData.username}`);
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
        {showSelectOption ? (
          <SelectOptionForm
            {...backToLoginProps}
            onContinueButtonClicked={onContinueButtonClicked}
            hasSecurityQuestion={
              patientData && patientData.securityQuestionsSet
            }
          />
        ) : (
          <></>
        )}
        {showPasswordSecurityQuestion ? (
          <PasswordSecurityQuestion
            {...backToLoginProps}
            showPostMessage={showPostMessage}
            setShowPostMessage={setShowPostMessage}
            securityQuestionData={patientData.securityQuestions}
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
            setShowPostMessage={setShowPostMessage}
          />
        ) : (
          <></>
        )}
        {showPasswordReset ? (
          <ConfirmationForm
            {...confirmationFormProps}
            {...backToLoginProps}
            showPostMessage={showPostMessage}
            setShowPostMessage={setShowPostMessage}
          />
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
