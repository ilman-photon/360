import React from "react";
import { Box, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTranslation } from "react-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import { styles } from "./style";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { useForm } from "react-hook-form";
import constants from "../../../utils/constants";

const ConfirmationForm = ({
  onBackToLoginClicked,
  title,
  subtitle,
  description,
  additional,
  postMessage,
  isSuccessPostMessage = true,
  buttonLabel,
  buttonIcon,
  butttonMode = constants.PRIMARY,
  showPostMessage = false,
  onCTAButtonClicked,
  postMessageTitle,
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "OneTimeLink" });

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    onCTAButtonClicked(additional ? { data, router } : constants.EMPTY_STRING);
  };

  return (
    <Card className={globalStyles.container} style={styles.cardStyle}>
      <CardContent style={styles.cardContentStyle}>
        <Typography variant={constants.H2} style={styles.margin}>
          {title}
        </Typography>
        {showPostMessage ? (
          <FormMessage
            success={isSuccessPostMessage}
            sx={styles.postMessage}
            title={postMessageTitle}
          >
            {postMessage}
          </FormMessage>
        ) : (
          <></>
        )}
        {subtitle ? (
          <Typography variant="bodyMedium" style={styles.margin}>
            {subtitle}
          </Typography>
        ) : (
          <></>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={additional ? styles.margin : styles.marginDescription}
        >
          {additional ? (
            <Box>{additional(control)}</Box>
          ) : (
            <Typography variant="bodyRegular">{description}</Typography>
          )}
          <StyledButton
            type={constants.SUBMIT}
            theme={constants.PATIENT}
            mode={butttonMode}
            size={constants.LARGE}
            gradient={false}
            style={styles.margin}
          >
            {buttonIcon}
            {buttonLabel}
          </StyledButton>
        </form>
        {butttonMode !== constants.SECONDARY ? (
          <Link
            style={{
              ...styles.margin,
              ...styles.textAlign,
              ...styles.backToLoginMargin,
              ...styles.link,
            }}
            color={"#2095a9"}
            onClick={function () {
              onBackToLoginClicked(router);
            }}
          >
            {t("backButtonLink")}
          </Link>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  );
};

export default ConfirmationForm;
