import AuthLayout from "../../../components/templates/authLayout";
import Register from "../../../components/organisms/Register/register";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../../store";
import { Api } from "../../api/api";
import RESPONSE_MESSAGES from "../../../utils/responseCodes";
import { Box } from "@mui/material";
import globalStyles from "../../../styles/Global.module.scss";
export default function CreateAccountPage() {
  const dispatch = useDispatch();

  const formMessage = useSelector((state) => state.index.formMessage);

  const OnRegisterClicked = async function (postbody, _router) {
    try {
      dispatch(resetFormMessage());
      const api = new Api();

      const response = await api.client.post("/userregistration", postbody);
      const successMessage = RESPONSE_MESSAGES[response.data.ResponseCode];

      dispatch(
        setFormMessage({
          success: true,
          title: successMessage.title,
          content: successMessage.content,
        })
      );
    } catch (err) {
      if (err.response) {
        const errorMessage = RESPONSE_MESSAGES[err.response.data.ResponseCode];

        dispatch(
          setFormMessage({
            success: false,
            title: errorMessage.title,
            content: <>{errorMessage.content}</>,
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
    <AuthLayout showMobileImage={false} imageSrc={backgroundImage}>
      {page}
    </AuthLayout>
  );
};
