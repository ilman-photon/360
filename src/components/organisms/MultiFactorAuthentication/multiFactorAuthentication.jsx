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
}) {
  const [postMessage, setPostMessage] = React.useState("");
  const [isEndView, setEndView] = React.useState(false);
  const [mfaCode, setMfaCode] = React.useState("");
  const image = "/mail-mfa.png";

  const { t } = useTranslation("translation", { keyPrefix: "mfaPage" });

  const content = () => {
    return (
      <StyledInput
        id="mfaCode"
        label={t("mfaLabel")}
        fullWidth
        type="number"
        value={mfaCode}
        variant={constants.FILLED}
        onChange={(event) => {
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
        />
      )}
    </>
  );
}
