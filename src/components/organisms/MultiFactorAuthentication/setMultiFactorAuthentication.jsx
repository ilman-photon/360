import * as React from "react";
import { Typography } from "@mui/material";
import Container from "./container";
import styles from "./style.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useTranslation } from "next-i18next";
import { maskingEmail, maskingPhone } from "../../../utils/mfa";

export default function SetMultiFactorAuthentication({
  onConfirmClicked,
  onBackToLoginClicked,
  rememberMe,
  setRememberMe,
  data,
  testIds,
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "mfaPage",
    useSuspense: false,
  });
  const [selectedCommunication, setSelectedCommunication] = React.useState("");
  const image = "/lock-mfa.png";
  const isMultipleComunication = Object.keys(data).length > 1;
  const [postMessage, setPostMessage] = React.useState("");

  const content = () => {
    if (!isMultipleComunication) {
      let value = "";
      if (data.email) {
        value = `Email: ${maskingEmail(data.email)}`;
        selectedCommunication === "" && setSelectedCommunication("email");
      } else if (data.phone) {
        value = `Phone: ${maskingPhone(data.phone)}`;
        selectedCommunication === "" && setSelectedCommunication("phone");
      }
      return (
        <Typography variant="body2" className={styles.description} tabIndex={0}>
          {value}
        </Typography>
      );
    } else {
      selectedCommunication === "" && setSelectedCommunication("email");
      return (
        <FormControl>
          <Typography
            variant="body2"
            className={styles.radioLabel}
            sx={{ color: "#242526" }}
            tabIndex={0}
          >
            {t("communicationMethodTitle")}
          </Typography>
          <RadioGroup
            name="radio-buttons-group"
            defaultValue="email"
            onChange={(event) => {
              setSelectedCommunication(event.target.value);
            }}
            sx={{
              marginLeft: "8px",
              marginTop: "15px",
            }}
          >
            <FormControlLabel
              value="email"
              data-testid={testIds.radioEmail}
              label={`Email: ${maskingEmail(data.email)}`}
              sx={{
                ".MuiFormControlLabel-label": {
                  color: "#242526",
                  fontSize: "16px",
                },
              }}
              control={
                <Radio
                  sx={{
                    padding: "5px 8px",
                    ".MuiSvgIcon-root": {
                      width: "24px",
                    },
                    "&.Mui-checked": {
                      color: "#0095A9",
                    },
                  }}
                />
              }
            />
            <FormControlLabel
              value="phone"
              data-testid={testIds.radioPhone}
              label={`Phone: ${maskingPhone(data.phone)}`}
              sx={{
                ".MuiFormControlLabel-label": {
                  color: "#242526",
                  fontSize: "16px",
                },
              }}
              control={
                <Radio
                  sx={{
                    padding: "5px 8px",
                    ".MuiSvgIcon-root": {
                      width: "24px",
                    },
                    "&.Mui-checked": {
                      color: "#0095A9",
                    },
                  }}
                />
              }
            />
          </RadioGroup>
        </FormControl>
      );
    }
  };

  const handleError = (message) => {
    if (message.status === "failed") {
      setPostMessage(message);
    }
  };

  const getMfaDescription = () => {
    if (!isMultipleComunication && data.email) {
      return t("setMFAEmailDescription");
    } else if (!isMultipleComunication && data.phone) {
      return t("setMFAPhoneDescription");
    } else {
      return t("setMFADescription");
    }
  };

  return (
    <>
      {postMessage === "" ? (
        <Container
          title={t("setMFATitle")}
          description={getMfaDescription()}
          image={image}
          content={content()}
          primaryButtonTitle={t("confrimBtn")}
          secondaryButtonTitle={t("backToLoginBtn")}
          onClickPrimaryButton={() => {
            onConfirmClicked(selectedCommunication, handleError);
          }}
          onClickSecondaryButton={() => {
            onBackToLoginClicked();
          }}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          testIds={{
            primary: testIds.btnConfirm,
            secondary: testIds.btnBack,
            checkbox: testIds.rememberMe,
          }}
        />
      ) : (
        <Container
          title={t("setMFATitle")}
          image={image}
          primaryButtonTitle={t("backToLoginBtn")}
          onClickPrimaryButton={() => {
            onBackToLoginClicked();
          }}
          postMessage={postMessage}
          isEndView={true}
          testIds={{
            primary: testIds.btnConfirm,
            secondary: testIds.btnBack,
            checkbox: testIds.rememberMe,
          }}
        />
      )}
    </>
  );
}
