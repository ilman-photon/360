import React, { useState } from "react";
import {Box, Divider, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTranslation } from "react-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import { styles } from "./style"
import FormMessage from "../../molecules/FormMessage/formMessage";

const ConfirmFormComponent = ({
  OnBackToLoginClicked,
  OnContinueButtonClicked,
  title,
  subtitle,
  description,
  additional,
  postMessage,
  isSuccessPostMessage = true,
  buttonLabel
}) => {
  const router = useRouter();
  const { t } = useTranslation('translation', { keyPrefix: 'SetOption' });
  const [showPostMessage, setShowPostMessage] = useState(true);

  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, padding: "16px" }}>
      <CardContent style={styles.cardContentStyle}>
        <Typography variant="h2" style={styles.margin}>
          {title}
        </Typography>
        {showPostMessage ? <FormMessage success={isSuccessPostMessage} sx={styles.postMessage}>{postMessage}</FormMessage> :<></>}
        <Typography variant="bodyMedium" style={styles.margin}>
          {subtitle}
        </Typography>
        {
          additional ? {additional} :  
          <Typography variant="bodyRegular" style={styles.marginDescription}>
            {description}
          </Typography>
        }
        <StyledButton
          theme="patient"
          type="primary"
          size="large"
          gradient={false}
          onClick={()=>{}}
          style={styles.margin}
        >
          {buttonLabel}
        </StyledButton>
        <Link
            style={{...styles.margin, ...styles.textAlign, ...styles.backToLoginMargin}}
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

export default ConfirmFormComponent;
