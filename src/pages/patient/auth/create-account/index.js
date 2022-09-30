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
export default function CreateAccountPage() {
  const dispatch = useDispatch();
  const api = new Api();

  const formMessage = useSelector((state) => state.index.formMessage);

  const OnRegisterClicked = async function (postbody) {
    dispatch(resetFormMessage());
    try {
      await api.getResponse(
        "/ecp/patient/userregistration",
        { ...postbody, dob: mmddyyDateFormat(postbody.dob) },
        "post"
      );

      // after register handler
      loginProps.OnLoginClicked(
        {
          username: postbody.email,
          password: postbody.password,
        },
        null,
        () => {}
      );
    } catch (err) {
      console.error({ err });
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
    <Box className={globalStyles.contanierPage}>
      <Register
        formMessage={formMessage}
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
    >
      {page}
    </AuthLayout>
  );
};
