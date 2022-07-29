import { useState } from "react";
import AuthLayout from "../../../components/templates/authLayout";
import Register from "../../../components/organisms/Register/register";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../../store";
import Link from "next/link";

// const createAccountProps = {
//   OnRegisterClicked: async function (postbody, router) {
//     console.log('test')
//     // const api = new Api();
//     try {
//       // api.client.post("https://patientlogin.mocklab.io/user/login", postbody)
//       // dummy
//       const response = {
//         ResponseCode: 3000,
//         ResponseType: "success",
//         status: 200
//       }
//       if (response && response.status === 200) {
//         // const cookies = new Cookies();
//         // cookies.set("authorized", "true", { path: "/" });
//         // router.push("/");
//         console.log({response});
//       }
//     } catch(err) {
//       console.log({err})
//     }

//     if (postbody.email !== 'exist@email.com') {
//       const dispatch = useDispatch()
//       dispatch(
//         setFormError({
//           title: 'Existing User',
//           content: (
//             <>
//               You are already a registered user. Please login to the application using your username and password. <Link href="/login"><a style={{textDecoration: 'underline'}}>Login</a></Link>
//             </>
//           )
//         })
//       )
//     }
//   },
// };
export default function CreateAccountPage() {
  const dispatch = useDispatch();

  const formError = useSelector((state) => state.index.formMessage);

  const OnRegisterClicked = async function (postbody, router) {
    console.log("test");
    // const api = new Api();
    try {
      // api.client.post("https://patientlogin.mocklab.io/user/login", postbody)
      // dummy
      const response = {
        ResponseCode: 3000,
        ResponseType: "success",
        status: 200,
      };
      if (response && response.status === 200) {
        // const cookies = new Cookies();
        // cookies.set("authorized", "true", { path: "/" });
        // router.push("/");
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
    <section>
      <Register formError={formError} OnRegisterClicked={OnRegisterClicked} />
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
