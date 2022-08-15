import * as React from "react";
import Container from "./container";
import { StyledInput } from "../../atoms/Input/input";

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
  const content = () => {
    return (
      <StyledInput
        id="mfaCode"
        label="Enter Code"
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
      console.log(message);
      if (message.isEndView) {
        setEndView(true);
      }
      setMfaCode("");
      setPostMessage(message);
    }
  };

  return (
    <>
      {!isEndView ? (
        <Container
          title={"Multi-Factor Authentication"}
          description={"A verification code has been sent. Enter code below"}
          image={image}
          content={content()}
          primaryButtonTitle={"Submit"}
          secondaryButtonTitle={"Resend Code"}
          linkTitle={"Back to Login"}
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
          title={"Multi-Factor Authentication"}
          image={image}
          primaryButtonTitle={"Back to Login"}
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
