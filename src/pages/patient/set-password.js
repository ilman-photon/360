import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../store";
import Link from "next/link";
import { Api } from "../api/api";
import { useRouter } from "next/router";
import RESPONSE_MESSAGES from "../../utils/responseCodes";

//Prevent html being match between server and client
const SetPasswordComponent = dynamic(
  () => import("../../components/organisms/SetPassword/setPassword"),
  {
    ssr: false,
  }
);
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
      console.console.error();({ err });

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
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={username}
          formMessage={formMessage}
          OnSetPasswordClicked={OnSetPasswordClicked}
        />
      </section>
    </div>
  );
}

SetPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
