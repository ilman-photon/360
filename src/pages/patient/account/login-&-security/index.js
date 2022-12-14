import { Close, EditOutlined } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Provider, useDispatch, useSelector } from "react-redux";
import SecurityLockIcon from "../../../../assets/icons/SecurityLock";
import { StyledButton } from "../../../../components/atoms/Button/button";
import StyledInput from "../../../../components/atoms/Input/input";
import AccountCard from "../../../../components/molecules/AccountCard/accountCard";
import FormMessage from "../../../../components/molecules/FormMessage/formMessage";
import LoginSecurityView from "../../../../components/organisms/LoginSecurityView/loginSecurityView";
import AccountLayout from "../../../../components/templates/accountLayout";
import { resetFormMessage } from "../../../../store";
import { onViewSecurityQuestions } from "../../../../store/accountRecovery";
import store from "../../../../store/store";
import { colors } from "../../../../styles/theme";
import { Api } from "../../../api/api";
import Cookies from "universal-cookie";

export default function LoginSecurityPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [modalConfirmPasswordOpened, setModalConfirmPasswordOpened] =
    useState(false);
  const [dialogConfirmPasswordMsg, setDialogConfirmPasswordMsg] = useState({
    success: false,
    content: null,
  });

  const formMessage = useSelector((state) => state.index.formMessage);
  const securityQuestions = useSelector(
    (state) => state.accountRecovery.securityQuestionsRaw
  );

  const DEFAULT_FORM_VALUES = {
    password: "",
  };
  const { handleSubmit, control, reset } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const isSecurityQuestionNotEmpty =
    securityQuestions[0] && Object.keys(securityQuestions[0]).length > 0;

  const fetchUserSecurityQuestion = async () => {
    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    if (userStorageData) {
      await dispatch(
        onViewSecurityQuestions({ patientId: userStorageData.patientId })
      );
    }
  };

  useEffect(() => {
    fetchUserSecurityQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (data) => {
    actionConfirmPassword(data);
  };

  const openModalConfirmPassword = () => {
    setModalConfirmPasswordOpened(true);
  };

  const actionConfirmPassword = async (data) => {
    const api = new Api();
    const postBody = {
      username: cookies.get("username"),
      password: data.password,
    };
    try {
      const response = await api.validatePassword(postBody);
      if (response.responseCode === 2000) {
        reset(DEFAULT_FORM_VALUES);
        router.push("/patient/account/login-&-security/security-question");
      } else if (response.responseCode === 2001) {
        setDialogConfirmPasswordMsg({
          success: false,
          content: "Please try again after sometime.",
        });
      }
    } catch (error) {
      console.error({ error });
      setDialogConfirmPasswordMsg({
        success: false,
        content: error.responseType,
      });
    }
  };

  const handleSetupSecurityQuestionClicked = () => {
    openModalConfirmPassword();
  };

  return (
    <>
      <Stack spacing={2}>
        {formMessage.content && (
          <FormMessage
            withClose
            onClose={() => {
              dispatch(resetFormMessage());
            }}
            success={formMessage.success}
          >
            {formMessage.content}
          </FormMessage>
        )}

        <LoginSecurityView />
        <AccountCard
          headerAlwaysShow
          hideFixedAction
          titleIcon={<SecurityLockIcon />}
          title="Security Questions"
          sx={{
            border: "2px solid #F3F3F3",
          }}
          contentSx={{
            p: !isSecurityQuestionNotEmpty ? "unset" : "0 !important",
          }}
          actionContent={
            !isSecurityQuestionNotEmpty ? (
              <Button
                size="small"
                onClick={handleSetupSecurityQuestionClicked}
                aria-label={"Setup Security Question"}
                data-testid="setup-security-question-btn"
              >
                <Stack direction="row" alignItems="center" component="span">
                  <EditOutlined
                    sx={{ color: colors.link, width: 20, height: 20 }}
                  />
                  <Typography
                    tabIndex={0}
                    variant="cardLink"
                    sx={{
                      textDecoration: "underline",
                      textTransform: "none",
                      color: colors.link,
                    }}
                  >
                    Set up
                  </Typography>
                </Stack>
              </Button>
            ) : (
              <Button
                size="small"
                onClick={handleSetupSecurityQuestionClicked}
                aria-label={"Update Security Question"}
                data-testid="update-security-question-btn"
              >
                <Stack direction="row" alignItems="center" component="span">
                  <EditOutlined
                    sx={{ color: colors.link, width: 20, height: 20 }}
                  />
                  <Typography
                    variant="cardLink"
                    sx={{
                      textDecoration: "underline",
                      textTransform: "none",
                      color: colors.link,
                    }}
                  >
                    Update
                  </Typography>
                </Stack>
              </Button>
            )
          }
        >
          {!isSecurityQuestionNotEmpty && (
            <Stack spacing={1}>
              <Typography tabIndex={0} variant="headlineH4">
                You have not set-up your security questions.
              </Typography>
              <StyledButton
                size="small"
                sx={{ width: "fit-content" }}
                onClick={handleSetupSecurityQuestionClicked}
              >
                Set up
              </StyledButton>
            </Stack>
          )}
        </AccountCard>
      </Stack>

      <Dialog
        onClose={() => setModalConfirmPasswordOpened(false)}
        open={modalConfirmPasswordOpened}
        sx={{
          ".MuiPaper-root": {
            minWidth: "280px",
            position: "relative",
          },
          ".MuiDialogActions-root": {
            padding: 2,
          },
        }}
      >
        <DialogTitle
          tabIndex={0}
          aria-label={"Confirm Password"}
          sx={{ color: "#003B4A", fontSize: "22px", pb: 1 }}
        >
          Confirm Password
        </DialogTitle>
        <DialogContent sx={{ maxWidth: "400px" }}>
          <IconButton
            sx={{ position: "absolute", top: 16, right: 16, p: 0 }}
            onClick={() => setModalConfirmPasswordOpened(false)}
            aria-label="close"
          >
            <Close />
          </IconButton>

          <Stack spacing={1}>
            {dialogConfirmPasswordMsg.content && (
              <FormMessage
                onClose={() =>
                  setDialogConfirmPasswordMsg({
                    success: false,
                    content: null,
                  })
                }
                success={dialogConfirmPasswordMsg.success}
              >
                {dialogConfirmPasswordMsg.content}
              </FormMessage>
            )}
            <Typography
              tabIndex={0}
              variant="bodyMedium"
              color={colors.darkGreen}
            >
              For your security, please confirm your password to continue.
            </Typography>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Stack alignItems="center" spacing={2} flex={1}>
                <Controller
                  name="password"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        required
                        type="password"
                        label={"Password"}
                        inputProps={{
                          "aria-label": `Password - required`,
                          autoComplete: "off",
                        }}
                        value={value}
                        autoComplete="off"
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        sx={{ width: "100%" }}
                      />
                    );
                  }}
                  rules={{
                    required: "This field is required",
                  }}
                />

                <StyledButton
                  type="submit"
                  mode="primary"
                  size="small"
                  sx={{ fontSize: "14px", width: "100%" }}
                >
                  Confirm Password
                </StyledButton>
                <StyledButton
                  mode="secondary"
                  size="small"
                  onClick={() => setModalConfirmPasswordOpened(false)}
                  sx={{ fontSize: "14px", width: "100%" }}
                >
                  Cancel
                </StyledButton>
              </Stack>
            </form>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}

LoginSecurityPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AccountLayout
        currentActivePage={"login-&-security"}
        pageTitle="EyeCare Patient Portal - Login & Security"
      >
        {page}
      </AccountLayout>
    </Provider>
  );
};
