import * as React from "react";
import Container from "./container";
import { StyledInput } from "../../atoms/Input/input";
import { useTranslation } from "next-i18next";

const constants = require("../../../utils/constants");

export default function MultiFactorAuthentication({
  onSubmitClicked,
  onResendCodeClicked,
  onBackToLoginClicked,
  rememberMe,
  setRememberMe,
  testIds,
}) {
  const [postMessage, setPostMessage] = React.useState("");
  const [isEndView, setEndView] = React.useState(false);
  const [mfaCode, setMfaCode] = React.useState("");
  const image = "/mail-mfa.png";

  const { t } = useTranslation("translation", { keyPrefix: "mfaPage" });

  const content = () => {
    return (
      <StyledInput
        type="number"
        id="mfaCode"
        label={t("mfaLabel")}
        fullWidth
        inputProps={{ minLength: 6, maxLength: 6 }}
        value={mfaCode}
        data-testid={testIds.inputCode}
        variant={constants.FILLED}
        onChange={(event) => {
          if (event.target.value.length > event.target.maxLength) {
            event.target.value = event.target.value.slice(
              0,
              event.target.maxLength
            );
          }
          setMfaCode(event.target.value);
        }}
      />
    );
  };

  const checkMessage = (message) => {
    if (message.status === "failed") {
      if (message.isEndView) {
        setEndView(true);
      }
      setMfaCode("");
      setPostMessage(message);
    } else {
      setPostMessage("");
    }
  };

  return (
    <>
      {!isEndView ? (
        <Container
          title={t("mfaTitle")}
          description={t("mfaDescription")}
          image={image}
          content={content()}
          primaryButtonTitle={t("submitBtn")}
          secondaryButtonTitle={t("resendCodeBtn")}
          linkTitle={t("backToLoginBtn")}
          onClickPrimaryButton={() => {
            onSubmitClicked(mfaCode, checkMessage);
          }}
          onClickSecondaryButton={() => {
            onResendCodeClicked(checkMessage);
          }}
          onClickLink={() => {
            onBackToLoginClicked();
          }}
          postMessage={postMessage}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          testIds={{
            primary: testIds.btnSubmit,
            secondary: testIds.btnResend,
            checkbox: testIds.rememberMe,
            link: testIds.btnBack,
          }}
        />
      ) : (
        <Container
          title={t("mfaTitle")}
          image={image}
          primaryButtonTitle={t("backToLoginBtn")}
          onClickPrimaryButton={() => {
            onBackToLoginClicked();
          }}
          postMessage={postMessage}
          isEndView
          testIds={{
            primary: testIds.btnBack,
          }}
        />
      )}
    </>
  );
}
