import AuthLayout from "../../../components/templates/authLayout";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../../store";
import Link from "next/link";
import { Api } from "../../api/api";
import { Box } from "@mui/material";
import SetPasswordComponent from "../../../components/organisms/SetPassword/setPassword";
import globalStyles from "../../../styles/Global.module.scss";
import Cookies from "universal-cookie";
import { useState } from "react";
import constants from "../../../utils/constants";
import ConfirmationForm from "../../../components/organisms/ConfirmationForm/confirmationForm";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import { Regex } from "../../../utils/regex";
import MESSAGES from "../../../utils/responseCodes";
import { useRouter } from "next/router";

export async function getServerSideProps({ query }) {
  return {
    props: {
      username: query ? query.username : "",
    },
  };
}

export default function SetPasswordPage({ username }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const isEmail = Regex.isEmailCorrect.test(username);
  const mailFormat =
    username &&
    username.replace(
      Regex.maskingEmail,
      (_, a, b, c) => a + b.replace(/./g, "*") + c
    );

  const maskedUsername = isEmail
    ? mailFormat
    : formatPhoneNumber(username, true, true);

  const formMessage = useSelector((state) => state.index.formMessage);
  const [showPostMessage, setShowPostMessage] = useState(false);

  const confirmationFormProps = {
    pageTitle: "Password Set page",
    title: "Password Set",
    postMessage: "Password has been set",
    showPostMessage: true,
    isSuccessPostMessage: true,
    buttonLabel: "Back to Login",
    butttonMode: constants.SECONDARY,
    onCTAButtonClicked: function () {
      router.push(`/patient/login`);
    },
    formStyle: { marginTop: "0px" },
  };

  const OnSetPasswordClicked = async function (postbody, _router) {
    try {
      dispatch(resetFormMessage());
      const cookies = new Cookies();
      const api = new Api();

      await api.getResponse(
        "/ecp/patient/registrationsetpassword",
        { ...postbody, patientType: "G" },
        "post"
      );
      setShowPostMessage(true);

      setTimeout(() => {
        cookies.set("authorized", true, { path: "/patient" });
        const hostname = window.location.origin;
        window.location.href = `${hostname}/patient`;
      }, 3000);
    } catch (err) {
      console.error({ err });
      const errorMessage = MESSAGES[err.ResponseCode];

      dispatch(
        setFormMessage({
          success: false,
          title: errorMessage.title,
          content: (
            <>
              <span>{errorMessage.content}. </span>
              <Link href="/patient/">
                <a style={{ textDecoration: "underline" }}>Back to home</a>
              </Link>
            </>
          ),
        })
      );
    }
  };
  return (
    <Box className={globalStyles.containerPage}>
      {!showPostMessage ? (
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={maskedUsername}
          formMessage={formMessage}
          onSetPasswordClicked={OnSetPasswordClicked}
          showBackToLogin={false}
        />
      ) : (
        <ConfirmationForm {...confirmationFormProps} />
      )}
    </Box>
  );
}

SetPasswordPage.getLayout = function getLayout(page) {
  const backgroundImage = "/register-bg.png";
  return (
    <AuthLayout
      showMobileImage={false}
      imageSrc={backgroundImage}
      title={"Set Password"}
      customImageBg={true}
    >
      {page}
    </AuthLayout>
  );
};
