import React, { useState, useEffect } from "react";
import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import Cookies from "universal-cookie";
import constants from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { Link, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

//Prevent html being match between server and client
const ConfirmationForm = dynamic(
  () => import("../../components/organisms/ConfirmationForm/confirmationForm"),
  {
    ssr: false,
  }
);

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}

export default function ValidatePage({ query }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "ValidatePage",
  });
  const [showExpiredForm, setShowExpiredForm] = useState(false);
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
  const queryParam = query;
  const router = useRouter();

  const expiredOneTimeLinkDescription = function () {
    return (
      <Typography style={{ marginBottom: "22px" }}>
        Link has expired. Go to{" "}
        <Link href="/patient/forgot-password" style={{ cursor: "pointer" }}>
          `Forgot password’
        </Link>{" "}
        and request for a new link
      </Typography>
    );
  };

  const onShowErrorPostMessage = (postbody) => {
    let confirmationFormProps = {};
    if (postbody && postbody.oneTimeLinkToken) {
      confirmationFormProps = {
        ...confirmationFormData,
        title: t("expiredTitleOneTime"),
        postMessage: t("expiredPostmessageOneTime"),
        buttonLabel: t("backButtonLink"),
        additional: expiredOneTimeLinkDescription,
      };
      setConfirmationFormData(confirmationFormProps);
    } else if (postbody && postbody.resetPasswordToken) {
      confirmationFormProps = {
        ...confirmationFormData,
        title: t("expiredTitleResetPassword"),
        postMessage: t("expiredPostmessageResetPassword"),
        buttonLabel: t("backButtonLink"),
        additional: expiredOneTimeLinkDescription,
      };
      setConfirmationFormData(confirmationFormProps);
    }
    setShowExpiredForm(true);
  };

  //Call API for security question & password reset
  const onCalledSecurityQuestionAPI = function () {
    const postbody = queryParam;
    const cookies = new Cookies();

    //TODO: Add call request to check the expired link

    //Positive scenario
    if (postbody && postbody.oneTimeLinkToken) {
      //TODO: Navigate to Home
      cookies.set("authorized", true, { path: "/patient" });
      router.push(`/patient`);
    } else if (postbody && postbody.resetPasswordToken) {
      //TODO: Navigate to Update
      const name = "Smith1@photon.com";
      router.push(`update-password?username=${name}`);
    }

    //Negative scenario
    onShowErrorPostMessage(postbody);
  };

  useEffect(() => {
    onCalledSecurityQuestionAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={[styles.forgotPasswordPage, "hide-scrollbar"].join(" ")}>
      <section className={styles.forgotPasswordComponentContainer}>
        {showExpiredForm ? (
          <ConfirmationForm {...confirmationFormData} showPostMessage={true} />
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}

ValidatePage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
