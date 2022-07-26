import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import dynamic from "next/dynamic";

//Prevent html being match between server and client
const SetPasswordComponent = dynamic(
  () => import("../../components/organisms/SetPassword/setPassword"),
  {
    ssr: false,
  }
);
export default function SetPasswordPage() {
  return (
    <div className={styles.forgotPasswordPage}>
      <section className={styles.forgotPasswordComponentContainer}>
        <SetPasswordComponent />
      </section>
    </div>
  );
}

SetPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
