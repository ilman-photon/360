import { useState } from "react";
import AuthLayout from "../../../components/templates/authLayout";
import Register from "../../../components/organisms/Register/register";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../../store";
import Link from "next/link";
export default function CreateAccountPage() {
  const dispatch = useDispatch();

  const formMessage = useSelector((state) => state.index.formMessage);

  const OnRegisterClicked = async function (postbody, router) {
    console.log("test");
    try {
      dispatch(resetFormMessage());

      let response = {}
      // dummy
      if (postbody.email === "exist@email.com") {
        dispatch(
          setFormMessage({
            success: false,
            title: "Existing User",
            content: (
              <>
                You are already a registered user. Please login to the application
                using your username and password.
                <Link href="/patient/login">
                  <a style={{ textDecoration: "underline" }}>Login</a>
                </Link>
              </>
            ),
          })
        );
        
        response = {
          ResponseCode: 3001,
          ResponseType: "failed",
          status: 400,
        };
      } else {
        dispatch(
          setFormMessage({
            success: true,
            title: "Success",
            content: (
              <>
                Thank you for your registration.
              </>
            ),
          })
        );

        response = {
          ResponseCode: 3000,
          ResponseType: "success",
          status: 200,
        };
      }

      if (response && response.status === 200) {
        console.log({ response });
      } else {
        console.log({ error: response })
      }
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <section>
      <Register formMessage={formMessage} OnRegisterClicked={OnRegisterClicked} />
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
