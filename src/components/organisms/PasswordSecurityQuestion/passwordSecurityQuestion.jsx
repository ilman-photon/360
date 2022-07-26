import React, { useState } from "react";
import { Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyledInput } from "../../atoms/Input/input";
import { useTranslation } from "react-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { styles } from "./style"

const PasswordSecurityQuestionComponent = ({
  OnBackToLoginClicked,
  OnContinueButtonClicked,
  securityQuestionData = []
}) => {
  const router = useRouter();
  const { t } = useTranslation('translation', { keyPrefix: 'PasswordSecurityQuestion' });
  const [showPostMessage, setShowPostMessage] = useState(false);

  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, padding: "16px" }}>
      <CardContent style={styles.cardContentStyle}>
        <Typography variant="h2">
          {t("title")}
        </Typography>
        <Typography variant="bodyRegular" style={styles.subTitleMargin}>
          {t("subtitle")}
        </Typography>
        {showPostMessage ? <FormMessage success={false} sx={styles.postMessage}>{t("errorAccountLock")}</FormMessage> :<></>}
        {securityQuestionData.map(function(question, i){
            return <StyledInput
            label={question[`SecurityQuestion-${(i+1)}`]}
            id={`securityQuestion-${i}`}
            variant="filled"
            style={styles.margin}
          />;
        })}
        <StyledButton
          theme="patient"
          type="primary"
          size="large"
          gradient={false}
          onClick={()=>{}}
          style={styles.margin}
        >
          {t("continueButton")}
        </StyledButton>
        <Link
            style={{...styles.margin, ...styles.backToLoginMargin}}
            color={"#2095a9"}
            onClick={function () {
              OnBackToLoginClicked(router);
            }}>
            {t("backButtonLink")}
        </Link>
      </CardContent>
    </Card>
  );
};

export default PasswordSecurityQuestionComponent;
