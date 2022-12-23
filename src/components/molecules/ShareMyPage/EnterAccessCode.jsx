import React from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./styles.module.scss";
import { useTranslation } from "next-i18next";
import { Controller, useForm } from "react-hook-form";
import StyledInput from "../../atoms/Input/input";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

const AlertComponent = ({ severity, title, description }) => {
  const customStyle = {
    info: {
      color: "#003B4A",
      backgroundColor: "#EDF5FE",
      fontSize: "16px",
    },
    error: {
      color: "#FFFFFF",
      backgroundColor: "#B93632",
      fontSize: "14px",
    },
  };

  return (
    <Alert
      variant="filled"
      severity={severity}
      sx={{
        fontFamily: "Libre Franklin",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "24px",
        ...customStyle[severity],
      }}
      iconMapping={{
        error: <DoNotDisturbIcon />,
      }}
      tabIndex={0}
    >
      {title && (
        <AlertTitle
          sx={{
            margin: 0,
            fontSize: "14px",
          }}
        >
          {title}
        </AlertTitle>
      )}
      {description}
    </Alert>
  );
};

export const EnterAccessCode = ({
  onSubmitCode = () => {},
  handleResendCode = () => {},
  isErrorMsg = false,
  isSuccessResendCode = false,
  isActiveAccessCode = true,
  alertInfo = null,
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "shareMyPage",
  });
  const { handleSubmit, control } = useForm({
    defaultValues: {
      accessCode: "",
    },
  });

  const onSubmit = (value) => {
    onSubmitCode(value);
  };

  return (
    <Box className={styles.accessCodeContainer}>
      <Typography
        sx={{
          fontFamily: "Bw Nista Geometric DEMO",
          fontWeight: "400",
          fontSize: "32px",
          lineHeight: "44px",
          color: "#003B4A",
        }}
        tabIndex={0}
      >
        {t("shareMyPageTitle")}
      </Typography>

      {alertInfo?.severity === "info" && (
        <AlertComponent
          severity={alertInfo.severity}
          title={alertInfo.title}
          description={alertInfo.description}
        />
      )}

      <Typography
        sx={{
          fontFamily: "Libre Franklin",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#242526",
        }}
        tabIndex={0}
      >
        {t("infoEnterAccessCode")}
      </Typography>
      {alertInfo?.severity === "error" && (
        <AlertComponent
          severity={alertInfo.severity}
          title={alertInfo.title}
          description={alertInfo.description}
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginTop: isErrorMsg ? "16px" : "0px" }}
        noValidate
      >
        <Controller
          name="accessCode"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <StyledInput
                type="text"
                id="accessCode"
                label={t("accessCode")}
                value={value}
                onChange={onChange}
                required
                size="small"
                variant="filled"
                disabled={!isActiveAccessCode ? true : false}
                sx={{
                  width: "100%",
                  borderRadius: "4px",
                  ".MuiFilledInput-root": {
                    backgroundColor: "#FFF",
                  },
                }}
              />
            );
          }}
        />
        <Stack direction="column">
          <Button
            type="submit"
            disabled={!isActiveAccessCode ? true : false}
            sx={{
              width: { xs: "100%" },
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "20px",
              background: !isActiveAccessCode ? "#B1B1B1" : "#007E8F",
              textTransform: "inherit",
              color: "#FFFFFF !important",
              marginTop: "16px",
              borderRadius: "30px",
              height: "46px",
              ":hover": {
                backgroundColor: "#007E8F",
              },
            }}
          >
            {t("submitBtn")}
          </Button>
          <Button
            onClick={handleResendCode}
            disabled={!isActiveAccessCode ? true : false}
            type="submit"
            sx={{
              width: { xs: "100%" },
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "20px",
              border: "1px solid",
              borderColor: !isActiveAccessCode ? "#B1B1B1" : "#007E8F",
              textTransform: "inherit",
              marginTop: "16px",
              color: !isActiveAccessCode ? "#B1B1B1" : "#007E8F",
              borderRadius: "30px",
              height: "46px",
              ":hover": {
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            {t("resendCodeBtn")}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EnterAccessCode;
