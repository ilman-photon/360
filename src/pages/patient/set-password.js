import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../store";
import Link from "next/link";
import { Api } from "../api/api";
import { useRouter } from "next/router";

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

  const OnSetPasswordClicked = async function (postbody, router) {
    console.log("set-password", { postbody });
    try {
      dispatch(resetFormMessage());
      const api = new Api();

      const response = await api.client
      .post("/registrationsetpassword", postbody)
      console.log({response})

      dispatch(
        setFormMessage({
          success: true,
          title: "Success",
          content: <>You have successfully set your password</>,
        })
      );

      // dummy
      // let response = {};
      // if (postbody.password === "exp1redP@ss") {
      //   dispatch(
      //     setFormMessage({
      //       success: false,
      //       title: "Expired",
      //       content: <>Your link is expired.</>,
      //     })
      //   );

      //   response = {
      //     ResponseCode: 3003,
      //     ResponseType: "failed",
      //     status: 400,
      //   };
      // } else {
      //   dispatch(
      //     setFormMessage({
      //       success: true,
      //       title: "Success",
      //       content: <>You have successfully set your password</>,
      //     })
      //   );

      //   response = {
      //     ResponseCode: 3002,
      //     ResponseType: "success",
      //     status: 200,
      //   };
      // }

      // if (response && response.status === 200) {
      //   console.log({ response });
      // } else {
      //   console.log({ error: response });
      // }
    } catch (err) {
      console.log({ err });

      dispatch(
        setFormMessage({
          success: false,
          title: "Error",
          content: (
            <>
              {err.message}
              <Link href="/patient/login">
                <a style={{ textDecoration: "underline" }}>Login</a>
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
