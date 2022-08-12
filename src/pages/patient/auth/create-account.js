import AuthLayout from "../../../components/templates/authLayout";
import Register from "../../../components/organisms/Register/register";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../../store";
import { Api } from "../../api/api";
import RESPONSE_MESSAGES from "../../../utils/responseCodes";
import { Box } from "@mui/material";
import globalStyles from "../../../styles/Global.module.scss";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
export default function CreateAccountPage() {
  const dispatch = useDispatch();
  // const router = useRouter()
  const cookies = new Cookies();
  const api = new Api();

  const formMessage = useSelector((state) => state.index.formMessage);

  const OnRegisterClicked = async function (postbody) {
    try {
      dispatch(resetFormMessage());
      await api.getResponse("/ecp/patient/userregistration", postbody, "post");
      cookies.set("authorized", true, { path: "/patient" });

      const hostname = window.location.origin;
      window.location.href = `${hostname}/patient`;
    } catch (err) {
      console.err({ err });
      if (err.response) {
        const errorMessage =
          RESPONSE_MESSAGES[
            err.response.data ? err.response.data.ResponseCode : 3500
          ];

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
