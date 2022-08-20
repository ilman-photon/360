import { Typography } from "@mui/material";
import Container from "./container";
import styles from "./style.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useTranslation } from "next-i18next";

export default function SetMultiFactorAuthentication({
  onConfirmClicked,
  onBackToLoginClicked,
  rememberMe,
  setRememberMe,
  data,
}) {
  const { t } = useTranslation("translation", { keyPrefix: "mfaPage" });
  const image = "/lock-mfa.png";
  const isMultipleComunication = Object.keys(data).length > 1;

  const content = () => {
    if (!isMultipleComunication) {
      const value = data.email
        ? `Email: ${data.email}`
        : `Phone: ${data.phone}`;
      return (
        <Typography variant="body2" className={styles.description}>
          {value}
        </Typography>
      );
    } else {
      return (
        <FormControl>
          <Typography variant="body2" className={styles.radioLabel}>
            {t("communicationMethodTitle")}
          </Typography>
          <RadioGroup
            aria-labelledby="communication-radio-buttons-group-label"
            name="radio-buttons-group"
            defaultValue="email"
          >
            <FormControlLabel
              value="email"
              data-testid="email-radio-button"
              label={`Email: ${data.email}`}
              sx={{
                ".MuiFormControlLabel-label": {
                  color: "#242526",
                  fontSize: "16px",
                },
              }}
              control={
                <Radio
                  sx={{
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
              data-testid="phone-radio-button"
              label={`Phone${data.phone}`}
              sx={{
                ".MuiFormControlLabel-label": {
                  color: "#242526",
                  fontSize: "16px",
                },
              }}
              control={
                <Radio
                  sx={{
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

  return (
    <>
      <Container
        title={t("setMFATitle")}
        description={t("setMFADescription")}
        image={image}
        content={content()}
        primaryButtonTitle={t("confrimBtn")}
        secondaryButtonTitle={t("backToLoginBtn")}
        onClickPrimaryButton={() => {
          onConfirmClicked();
        }}
        onClickSecondaryButton={() => {
          onBackToLoginClicked();
        }}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
      />
    </>
  );
}
