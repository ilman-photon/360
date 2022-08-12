import React, { useState, useEffect } from "react";
import AuthLayout from "../../components/templates/authLayout";
import Cookies from "universal-cookie";
import constants from "../../utils/constants";
import { useTranslation } from "next-i18next";
import { Box, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Api } from "../api/api";
import { colors } from "../../styles/theme";
import ConfirmationForm from "../../components/organisms/ConfirmationForm/confirmationForm";
import globalStyles from "../../styles/Global.module.scss";

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
        Link has expired. Go to{" '"}
        <Link
          href="/patient/forgot-password"
          style={{ cursor: "pointer", color: colors.teal }}
        >
          Forgot password
        </Link>
        {"' "}
        and request for a new link
      </Typography>
    );
  };

  const onShowErrorPostMessage = (postbody) => {
    let confirmationFormProps = {};
    if (postbody && postbody.oneTimeToken) {
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

  const onCalledOneTimeLinkValidationAPI = function () {
    const cookies = new Cookies();
    const postbody = queryParam;
    const api = new Api();
    api
      .tokenValidation(postbody)
      .then(function () {
        cookies.set("authorized", true, { path: "/patient" });
        const hostname = window.location.origin;
        window.location.href = `${hostname}/patient`;
      })
      .catch(function () {
        onShowErrorPostMessage(postbody);
      });
  };

  const onCalledResetPasswordValidationAPI = function () {
    const postbody = queryParam;
    const api = new Api();
    api
      .tokenValidation(postbody, true)
      .then(function (response) {
        //Navigate to Update
        const name = response.email || "Smith1@photon.com";
        router.push(`update-password?username=${name}`);
      })
      .catch(function () {
        onShowErrorPostMessage(postbody);
      });
  };

  const onValidateQuesryParam = function () {
    if (queryParam && queryParam.oneTimeToken) {
      onCalledOneTimeLinkValidationAPI();
    } else if (queryParam && queryParam.resetPasswordToken) {
      onCalledResetPasswordValidationAPI();
    }
  };

  useEffect(() => {
    onValidateQuesryParam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={globalStyles.contanierPage}>
      {showExpiredForm ? (
        <ConfirmationForm {...confirmationFormData} showPostMessage={true} />
      ) : (
        <></>
      )}
    </Box>
  );
}

ValidatePage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
