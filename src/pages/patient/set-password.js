import AuthLayout from "../../components/templates/authLayout";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../store";
import Link from "next/link";
import { Api } from "../api/api";
import { useRouter } from "next/router";
import RESPONSE_MESSAGES from "../../utils/responseCodes";
import { Box } from "@mui/material";
import SetPasswordComponent from "../../components/organisms/SetPassword/setPassword";
import globalStyles from "../../styles/Global.module.scss";

export default function SetPasswordPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const username = router.query.username || "";

  const formMessage = useSelector((state) => state.index.formMessage);

  const OnSetPasswordClicked = async function (postbody, _router) {
    try {
      dispatch(resetFormMessage());
      const api = new Api();

      const response = await api.client.post(
        "/registrationsetpassword",
        postbody
      );

      const successMessage = RESPONSE_MESSAGES[response.data.ResponseCode];

      dispatch(
        setFormMessage({
          success: true,
          title: successMessage.title,
          content: successMessage.content,
        })
      );
    } catch (err) {
      console.error({ err });

      dispatch(
        setFormMessage({
          success: false,
          title: "Error",
          content: (
            <>
              <span>{err.message} </span>
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
    <Box className={globalStyles.contanierPage}>
      <SetPasswordComponent
        title={"Set Password"}
        subtitle={"Enter a password to setup your account."}
        username={username}
        formMessage={formMessage}
        onSetPasswordClicked={OnSetPasswordClicked}
      />
    </Box>
  );
}

SetPasswordPage.getLayout = function getLayout(page) {
  const backgroundImage = "/login-bg.png";
  return (
    <AuthLayout showMobileImage={true} imageSrc={backgroundImage}>
      {page}
    </AuthLayout>
  );
};
