import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../store";
import Link from "next/link";

//Prevent html being match between server and client
const SetPasswordComponent = dynamic(
  () => import("../../components/organisms/SetPassword/setPassword"),
  {
    ssr: false,
  }
);
export default function SetPasswordPage() {
  const dispatch = useDispatch();

  const formError = useSelector((state) => state.index.formMessage);

  const OnSetPasswordClicked = async function (postbody, router) {
    console.log("test");
    try {
      const response = {
        ResponseCode: 3000,
        ResponseType: "success",
        status: 200,
      };
      if (response && response.status === 200) {
        console.log({ response });
      }
    } catch (err) {
      console.log({ err });
    }

    console.log({ em: postbody.email });

    if (postbody.email === "exist@email.com") {
      dispatch(
        setFormMessage({
          title: "Existing User",
          content: (
            <>
              You are already a registered user. Please login to the application
              using your username and password.{" "}
              <Link href="/patient/login">
                <a style={{ textDecoration: "underline" }}>Login</a>
              </Link>
            </>
          ),
        })
      );
    } else {
      dispatch(resetFormMessage());
    }
  };
  return (
    <div className={styles.forgotPasswordPage}>
      <section className={styles.forgotPasswordComponentContainer}>
        <SetPasswordComponent
          formError={formError}
          OnSetPasswordClicked={OnSetPasswordClicked}
        />
      </section>
    </div>
  );
}

SetPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
