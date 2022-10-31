import React, { useEffect, useState } from "react";
import AuthLayout from "../../../components/templates/authLayout";
import SelectOptionForm from "../../../components/organisms/SelectOptionForm/selectOptionForm";
import PasswordSecurityQuestion from "../../../components/organisms/PasswordSecurityQuestion/passwordSecurityQuestion";
import ConfirmationForm from "../../../components/organisms/ConfirmationForm/confirmationForm";
import { Api } from "../../api/api";
import constants, { TEST_ID } from "../../../utils/constants";
import RowRadioButtonsGroup from "../../../components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Controller } from "react-hook-form";
import { useTranslation } from "next-i18next";
import ForgotPassword from "../../../components/organisms/ForgotPassword/forgotPassword";
import { Box, useMediaQuery } from "@mui/material";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { Regex } from "../../../utils/regex";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
let confirmationFormProps = {
  title: constants.EMPTY_STRING,
  subtitle: constants.EMPTY_STRING,
  description: constants.EMPTY_STRING,
  postMessage: constants.EMPTY_STRING,
  successPostMessage: true,
  buttonLabel: constants.EMPTY_STRING,
  buttonIcon: null,
  additional: null,
  pageTitle: constants.EMPTY_STRING,
};

const modeOfCommuicationUI = function (control) {
  const options = [
    {
      label: "Email",
      value: constants.EMAIL,
      testId: constants.TEST_ID.REGISTER_TEST_ID.emailradio,
    },
    {
      label: "Phone",
      value: constants.PHONE,
      testId: constants.TEST_ID.REGISTER_TEST_ID.phoneradio,
    },
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
  for (const question in securityQuestionsData) {
    const securityQuestion = {
      Question: question,
      Answer: securityQuestionsData[question],
    };
    securityQuestionList.push(securityQuestion);
  }
  const shuffled = securityQuestionList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const backToLoginProps = {
  onBackToLoginClicked: function (router) {
    router.push("/patient/login");
  },
};
export default function ForgotPasswordPage() {
  const NEXT_PUBLIC_SYNC_LINK = process.env.NEXT_PUBLIC_SYNC_LINK;
  const NEXT_PUBLIC_ONE_TIME_LINK = process.env.NEXT_PUBLIC_ONE_TIME_LINK;
  const { t } = useTranslation("translation", {
    keyPrefix: "ForgotPasswordPage",
  });

  const router = useRouter();

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
  const [isAppointment, setAppointment] = useState(true);
  const bodyScrollLock = require("body-scroll-lock");
  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const targetElement = document.body;
    if (isMobile) {
      targetElement.style.width = "100%";
      disableBodyScroll(targetElement);
      return () => {
        enableBodyScroll(targetElement);
        targetElement.style.width = "";
      };
    }
  }, [disableBodyScroll, enableBodyScroll, isMobile]);

  useEffect(() => {
    if (router.asPath === "/patient/sync") {
      setAppointment(true);
    } else setAppointment(false);
  }, [router]);

  useEffect(() => {
    //Bug fix EPP-4639
    router.replace({
      pathname: router.pathname,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCalledValidateAppointment = function ({ username }) {
    const postbody = {
      username: username,
    };
    const api = new Api();

    {
      isAppointment
        ? api
            .validateUserType(postbody)
            .then(() => {
              onCalledSendLinkSync(username);
            })
            .catch(() => {
              setShowPostMessage(true);
            })
        : api
            .validateUserName(postbody)
            .then(() => {
              setPatientData({
                ...patientData,
                username: username,
                securityQuestionsSet:
                  response.SecurityQuestions &&
                  response.SecurityQuestions.length > 0,
                securityQuestions: mappingSecurityData(
                  response.SecurityQuestions[0]
                ),
                preferredComunication: response.PreferredComunication,
              });
              onContinueButtonClicked(showForm);
            })
            .catch(() => {
              setShowPostMessage(true);
            });
    }
  };

  //Call API for check security question
  const onCalledValidateSubmitSecurityQuestion = function (
    securityQuestion,
    callback,
    routerIns
  ) {
    const postbody = {
      SecurityQuestions: [{ ...securityQuestion }],
      username: patientData.username,
    };
    const api = new Api();
    api
      .validateSecurityQuestion(postbody)
      .then(function (response) {
        onContinueButtonClicked("updatePassword", routerIns);
      })
      .catch(function (error) {
        callback(error);
      });
  };

  //Call API for userame validation
  const onCalledValidateUsernameAPI = function ({ username }, showForm) {
    const postbody = {
      patient: { userName: username },
    };
    const api = new Api();
    api
      .validateUserName(postbody)
      .then(function (response) {
        setPatientData({
          ...patientData,
          username: username,
          securityQuestionsSet:
            response.SecurityQuestions && response.SecurityQuestions.length > 0,
          securityQuestions: mappingSecurityData(response.SecurityQuestions[0]),
          preferredComunication: response.PreferredComunication,
        });
        onContinueButtonClicked(showForm);
      })
      .catch(function () {
        setShowPostMessage(true);
      });
  };

  //Call API for reset password
  const onCalledResetPasswordAPI = function (modeOfCommuication) {
    const domain = window.location.origin;
    const postbody = {
      link: `${domain}${NEXT_PUBLIC_ONE_TIME_LINK}`,
      patient: { userName: patientData.username },
      preferredComunication: modeOfCommuication.toLowerCase(),
      resetPassword: true,
    };
    const api = new Api();
    api
      .resetPassword(postbody)
      .then(function (response) {
        const maskedEmail = response?.email?.replace(
          Regex.maskingEmail,
          (_, a, b, c) => a + b.replace(/./g, "*") + c
        );
        const maskedPhoneNumber = formatPhoneNumber(
          response?.phone,
          true,
          true
        );
        const userCommunicationCode =
          modeOfCommuication.toLowerCase() === "email"
            ? `${maskedEmail} for an email`
            : `${maskedPhoneNumber} for a link`;
        // Handle success to call API
        confirmationFormProps = {
          pageTitle: "Password reset page",
          title: t("titlePasswordReset"),
          subtitle: `Check ${userCommunicationCode} to reset your password`,
          description: t("descriptionPasswordResetSuccess"),
          postMessage: `Link sent to your ${modeOfCommuication.toLowerCase()}`,
          successPostMessage: true,
          buttonLabel: t("backButtonLink"),
          additional: function () {
            return <></>;
          },
          butttonMode: constants.SECONDARY,
          onCTAButtonClicked: function () {
            router.push("/patient/login");
          },
        };
        setShowPostMessage(true);
      })
      .catch(function () {
        console.error("Something went wrong");
      });
  };

  //Call API for one time link
  const onCalledOneTimeLinkAPI = function (modeOfCommuication) {
    const domain = window.location.origin;
    const postbody = {
      link: `${domain}${NEXT_PUBLIC_ONE_TIME_LINK}`,
      preferredComunication: modeOfCommuication.toLowerCase(),
      patient: { userName: patientData.username },
      oneTimeLinkEnable: true,
    };

    const api = new Api();
    api
      .oneTimeLink(postbody)
      .then(function () {
        confirmationFormProps = {
          pageTitle: "One-time link sent page",
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
          butttonMode: constants.PRIMARY,
          primaryButtonTestId: TEST_ID.FORGOT_TEST_ID.continueBtn,
          onCTAButtonClicked: function () {
            onContinueButtonClicked(
              patientData.securityQuestionsSet
                ? constants.SECURITY_QUESTION
                : constants.PASSWORD_RESET
            );
          },
        };
        setShowPostMessage(true);
      })
      .catch(function () {
        console.error("Something went wrong");
      });
  };

  const onCalledSendLinkSync = (username) => {
    setShowPostMessage(false);
    const domain = window.location.origin;
    const postbody = {
      link: `${domain}${NEXT_PUBLIC_SYNC_LINK}`,
      username: username,
    };

    const api = new Api();
    api
      .sendLinkSync(postbody)
      .then(function () {
        confirmationFormProps = {
          pageTitle: "Schedule Your Appointment",
          title: "Schedule Your Appointment",
          subtitle,
          postMessage,
          postMessageTitle: "",
          successPostMessage: true,
          // buttonLabel: "Login with one-time link",
          additional: null,
          butttonMode: constants.PRIMARY,
          // onCTAButtonClicked: () => onCalledOneTimeLinkSync(username),
        };
        setShowForgotPassword(false);
        setShowSelectOption(false);
        setShowPasswordSecurityQuestion(false);
        setShowPasswordReset(false);
        setShowPostMessage(true);
        setShowOneTimeLink(true);
      })
      .catch(function () {
        console.error("Something went wrong");
      });
  };

  const onCalledOneTimeLinkSync = (username) => {
    setShowPostMessage(false);
    const postbody = {
      patient: { userName: username },
      oneTimeLinkEnable: true,
    };

    const isEmail = username.match(Regex.isEmailCorrect);
    const subtitle = isEmail
      ? `Check ${username}  for an email to set up your password.`
      : `Check ${username} for a link to set up your password.`;
    const postMessage = isEmail
      ? `Link sent to your email`
      : `Link sent to your phone number`;

    const api = new Api();
    api
      .oneTimeLink(postbody)
      .then(function () {
        confirmationFormProps = {
          pageTitle: "Sync Your Appointment",
          title: "Sync Your Appointment",
          subtitle,
          postMessage,
          postMessageTitle: "",
          successPostMessage: true,
          buttonLabel: "Login with one-time link",
          additional: null,
          butttonMode: constants.PRIMARY,
          onCTAButtonClicked: () => onCalledOneTimeLinkSync(username),
        };
        setShowForgotPassword(false);
        setShowSelectOption(false);
        setShowPasswordSecurityQuestion(false);
        setShowPasswordReset(false);
        setShowPostMessage(true);
        setShowOneTimeLink(true);
      })
      .catch(function () {
        console.error("Something went wrong");
      });
  };

  /**
   * Bug fixing EPP-4639
   * @param {*} query as String
   */
  const replaceUrl = (query) => {
    router.replace({
      pathname: router.pathname,
      query: { step: query.toLocaleLowerCase() },
    });
  };

  //Handle show/hide form in forgot password
  const onContinueButtonClicked = function (form, routerIns) {
    setShowPostMessage(false);
    setShowForgotPassword(false);
    setShowSelectOption(false);
    setShowPasswordSecurityQuestion(false);
    setShowOneTimeLink(false);
    setShowPasswordReset(false);

    if (form === constants.SELECT_OPTION) {
      setShowSelectOption(true);
      replaceUrl(constants.SELECT_OPTION);
    } else if (form === constants.SECURITY_QUESTION) {
      setShowPasswordSecurityQuestion(true);
      replaceUrl(constants.SECURITY_QUESTION);
    } else if (form === constants.PASSWORD_RESET) {
      //TO DO: handle showing the reset password form
      if (
        patientData.preferredComunication.toLocaleLowerCase() === constants.BOTH
      ) {
        //TO DO: Set props for one time link
        confirmationFormProps.pageTitle = "Password reset page";
        confirmationFormProps.title = t("titlePasswordReset");
        confirmationFormProps.subtitle = t("subtitlePasswordReset");
        confirmationFormProps.additional = modeOfCommuicationUI;
        confirmationFormProps.buttonLabel = t("primaryButtonResetPassword");
        confirmationFormProps.primaryButtonTestId =
          constants.TEST_ID.FORGOT_TEST_ID.oneTimeLink;
        confirmationFormProps.buttonIcon = (
          <InsertLinkIcon sx={{ marginRight: "10px" }} />
        );
        confirmationFormProps.butttonMode = constants.PRIMARY;
        confirmationFormProps.onCTAButtonClicked = function ({ data }) {
          const modeComunication =
            data[constants.MODE_COMMUNICATION_KEY] === constants.EMAIL
              ? "email"
              : "phone";
          onCalledResetPasswordAPI(modeComunication);
        };
      } else {
        //Call service for password reset
        onCalledResetPasswordAPI(patientData.preferredComunication);
      }
      setShowPasswordReset(true);
      replaceUrl(constants.PASSWORD_RESET);
    } else if (form === constants.ONE_TIME_LINK) {
      if (
        patientData.preferredComunication.toLocaleLowerCase() === constants.BOTH
      ) {
        //TO DO: Set props for one time link
        confirmationFormProps.pageTitle = "One-time link page";
        confirmationFormProps.title = t("titleOneTime");
        confirmationFormProps.subtitle = t("subtitleOneTime");
        confirmationFormProps.additional = modeOfCommuicationUI;
        confirmationFormProps.buttonLabel = t("primaryButtonOneTime");
        confirmationFormProps.primaryButtonTestId =
          constants.TEST_ID.FORGOT_TEST_ID.oneTimeLink;
        confirmationFormProps.buttonIcon = (
          <InsertLinkIcon sx={{ marginRight: "10px" }} />
        );
        confirmationFormProps.butttonMode = constants.PRIMARY;
        confirmationFormProps.onCTAButtonClicked = function ({ data }) {
          const modeComunication =
            data[constants.MODE_COMMUNICATION_KEY] === constants.EMAIL
              ? "email"
              : "phone";
          onCalledOneTimeLinkAPI(modeComunication);
        };
      } else {
        //Call service for one time link
        onCalledOneTimeLinkAPI(patientData.preferredComunication);
      }
      setShowOneTimeLink(true);
      replaceUrl(constants.ONE_TIME_LINK);
    } else if (form === "updatePassword") {
      routerIns.push(
        `/patient/update-password?username=${patientData.username}`
      );
    }
  };

  return (
    <Box className={globalStyles.containerStyledPage}>
      {showForgotPassword ? (
        <ForgotPassword
          {...backToLoginProps}
          onContinueButtonClicked={onContinueButtonClicked}
          showPostMessage={showPostMessage}
          setShowPostMessage={setShowPostMessage}
          onCalledValidateUsernameAPI={onCalledValidateUsernameAPI}
          onCalledValidateAppointment={onCalledValidateAppointment}
          title={"Forgot Password Page"}
          isAppointment={isAppointment}
        />
      ) : (
        <></>
      )}
      {showSelectOption ? (
        <SelectOptionForm
          {...backToLoginProps}
          onContinueButtonClicked={onContinueButtonClicked}
          hasSecurityQuestion={patientData && patientData.securityQuestionsSet}
          title={"Select an Option Page"}
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
          onContinueButtonClicked={onCalledValidateSubmitSecurityQuestion}
          title={"Password recovery security questions page"}
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
    </Box>
  );
}

ForgotPasswordPage.getLayout = function getLayout(page) {
  const backgroundImage = "/login-bg.png";
  return (
    <AuthLayout showMobileImage={false} imageSrc={backgroundImage}>
      {page}
    </AuthLayout>
  );
};
