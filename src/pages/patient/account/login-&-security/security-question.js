import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import UpdateSecurityQuestion from "../../../../components/organisms/UpdateSecurityQuestion/updateSecurityQuestion";
import MfaLayout from "../../../../components/templates/mfaLayout";
import {
  resetFormMessage,
  setFormMessage,
  setGenericErrorMessage,
} from "../../../../store";
import store from "../../../../store/store";
import { onViewSecurityQuestions } from "../../../../store/accountRecovery";
import { Api } from "../../../api/api";
import Cookies from "universal-cookie";
import { Box, Stack, Typography } from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { colors } from "../../../../styles/theme";

const AccountSecurityQuestionPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const el = document.getElementById("backLoginSecurity");
  const [securityQuestionsList, setSecurityQuestion] = useState([]);

  const userSecurityQuestions = useSelector((state) => {
    return state.accountRecovery.securityQuestionsRaw;
  });

  const fetchUserSecurityQuestion = () => {
    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    if (userStorageData) {
      dispatch(
        onViewSecurityQuestions({ patientId: userStorageData.patientId })
      );
    }
  };

  const fetchSecurityQuestionList = async () => {
    const api = new Api();
    try {
      const response = await api.getSecurityQuestion();
      if (response.SetUpSecurityQuestions) {
        setSecurityQuestion(response.SetUpSecurityQuestions);
      } else {
        dispatch(setGenericErrorMessage("Please try again after sometime."));
      }
    } catch (error) {
      console.error({ error });
      dispatch(setGenericErrorMessage("Please try again after sometime."));
    }
  };

  useEffect(() => {
    fetchSecurityQuestionList();
    fetchUserSecurityQuestion();
    if (el) {
      el.focus();
    }
    dispatch(resetFormMessage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateSecurityQuestion = async (data, same) => {
    if (same) {
      await router.push("/patient/account/login-&-security");
      dispatch(
        setFormMessage({
          success: true,
          content: "No updated made",
        })
      );
    } else {
      const api = new Api();
      const postBody = {
        SecurityQuestions: [data],
        username: cookies.get("username"),
      };
      try {
        await api.updateSecurityQuestion(postBody);
        await router.push("/patient/account/login-&-security");
        dispatch(
          setFormMessage({
            success: true,
            content: "Security questions successfully updated",
          })
        );
      } catch (error) {
        console.error({ error });
        dispatch(setGenericErrorMessage(error.responseType));
      }
    }
    setTimeout(() => {
      dispatch(resetFormMessage());
    }, 5000);
  };

  return (
    <Stack spacing={3} sx={{ background: "#f4f4f4", px: { xs: 0, sm: 3 } }}>
      <Box sx={{ maxWidth: "1536px", m: "auto", width: "100%" }}>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          py={3}
          px={2}
          onClick={() => router.push("/patient/account/login-&-security")}
          sx={{ cursor: "pointer" }}
        >
          <KeyboardArrowLeft sx={{ color: colors.teal20 }} />
          <Typography
            id="backLoginSecurity"
            variant="bodyRegularSemiBold"
            color={colors.teal20}
            tabIndex={0}
            role="link"
          >
            Back to Login & Security
          </Typography>
        </Stack>
        <Box sx={{ background: "white" }}>
          <UpdateSecurityQuestion
            questionList={securityQuestionsList}
            userQuestion={userSecurityQuestions}
            onCancelUpdateSecurityQuestion={() =>
              router.push("/patient/account/login-&-security")
            }
            onUpdateSecurityQuestion={handleUpdateSecurityQuestion}
          />
        </Box>
      </Box>
    </Stack>
  );
};

AccountSecurityQuestionPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <MfaLayout
        currentActivePage={"security-question"}
        customTitle="Security Questions page"
      >
        {page}
      </MfaLayout>
    </Provider>
  );
};

export default AccountSecurityQuestionPage;
