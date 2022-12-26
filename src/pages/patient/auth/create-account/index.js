import AuthLayout from "../../../../components/templates/authLayout";
import Register from "../../../../components/organisms/Register/register";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../../../store";
import { Api } from "../../../api/api";
import RESPONSE_MESSAGES from "../../../../utils/responseCodes";
import { Box } from "@mui/material";
import globalStyles from "../../../../styles/Global.module.scss";
import { mmddyyDateFormat } from "../../../../utils/dateFormatter";
import { loginProps } from "../../login";
import { useRouter } from "next/router";
import { useState } from "react";
import Cookies from "universal-cookie";
export default function CreateAccountPage() {
  const dispatch = useDispatch();
  const api = new Api();
  const router = useRouter();
  const cookies = new Cookies();

  const formMessage = useSelector((state) => state.index.formMessage);

  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const OnRegisterClicked = async function (postbody) {
    dispatch(resetFormMessage());
    setIsRegisterLoading(true);
    try {
      if (!postbody.email) {
        delete postbody.email;
      } else if (!postbody.mobileNumber) {
        delete postbody.mobileNumber;
      }
      await api.getResponse(
        "/ecp/patient/userregistration",
        { ...postbody, dob: mmddyyDateFormat(postbody.dob) },
        "post"
      );

      // after register handler
      let username = postbody.email || postbody.mobileNumber.replace(/\D/g, "");
      loginProps.OnLoginClicked(
        {
          username,
          password: postbody.password,
        },
        router,
        () => {
          cookies.set("prevPage", "create-account", { path: "/patient" });
        },
        dispatch
      );
    } catch (err) {
      console.error({ err });
      setIsRegisterLoading(false);
      if (err.ResponseCode) {
        const errorMessage = RESPONSE_MESSAGES[err.ResponseCode || 3002];

        dispatch(
          setFormMessage({
            success: false,
            title: errorMessage?.title,
            content: errorMessage?.content,
            isBackToLogin: errorMessage?.isBackToLogin,
          })
        );
      }
    }
  };

  return (
    <Box className={globalStyles.containerStyledPage}>
      <Register
        formMessage={formMessage}
        isRegisterLoading={isRegisterLoading}
        OnRegisterClicked={OnRegisterClicked}
      />
    </Box>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  const backgroundImage = "/register-bg.png";
  return (
    <AuthLayout
      showMobileImage={false}
      imageSrc={backgroundImage}
      title={"User Registration"}
      customImageBg={true}
      isNotShowHeader={true}
    >
      {page}
    </AuthLayout>
  );
};
