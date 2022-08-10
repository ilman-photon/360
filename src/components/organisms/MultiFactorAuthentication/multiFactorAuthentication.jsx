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
  const image = "/mail-mfa.png";
  const content = () => {
    return (
      <StyledInput
        id="mfaCode"
        label="Enter Code"
        fullWidth
        type="number"
        variant={constants.FILLED}
      />
    );
  };

  const checkSubmitMessage = (message) => {
    setPostMessage(message);
  };

  const checkResendCodeMessage = (message) => {
    console.log(message);
    setPostMessage(message);
    setEndView(true);
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
            onSubmitClicked(checkSubmitMessage);
          }}
          onClickSecondaryButton={() => {
            onResendCodeClicked(checkResendCodeMessage);
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
