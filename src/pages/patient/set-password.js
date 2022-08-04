import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../store";
import Link from "next/link";
import { Api } from "../api/api";
import { useRouter } from "next/router";
import RESPONSE_MESSAGES from "../../utils/responseCodes";
import { Suspense } from "react";

//Prevent html being match between server and client
const SetPasswordComponent = dynamic(
  () => import("../../components/organisms/SetPassword/setPassword"),
  {
    suspense: true,
  }
);
export default function SetPasswordPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const username = router.query.username || "";

  const formMessage = useSelector((state) => state.index.formMessage);

  const OnSetPasswordClicked = async function (postbody, _router) {
    console.log("set-password", { postbody });
    try {
      dispatch(resetFormMessage());
      const api = new Api();

      const response = await api.client.post(
        "/registrationsetpassword",
        postbody
      );
      console.log({ response });

      const successMessage = RESPONSE_MESSAGES[response.data.ResponseCode];

      dispatch(
        setFormMessage({
          success: true,
          title: successMessage.title,
          content: successMessage.content,
        })
      );
    } catch (err) {
      console.log({ err });

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
    <div className={styles.forgotPasswordPage}>
      <section className={styles.forgotPasswordComponentContainer}>
        <Suspense fallback={`Loading...`}>
          <SetPasswordComponent
            title={"Set Password"}
            subtitle={"Enter a password to setup your account."}
            username={username}
            formMessage={formMessage}
            OnSetPasswordClicked={OnSetPasswordClicked}
          />
        </Suspense>
      </section>
    </div>
  );
}

SetPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
