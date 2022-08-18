import * as React from "react";
import { Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./style.module.scss";
import Stack from "@mui/material/Stack";

const constants = require("../../../utils/constants");

export default function Container({
  title,
  description,
  image,
  content,
  primaryButtonTitle,
  secondaryButtonTitle,
  linkTitle,
  onClickPrimaryButton,
  onClickSecondaryButton,
  onClickLink,
  postMessage,
  isEndView,
  rememberMe,
  setRememberMe,
}) {
  const renderFromMessage = () => {
    if (postMessage && postMessage !== "") {
      return (
        <div className={styles.FormMessageContainer}>
          <FormMessage error title={postMessage.message.title}>
            {postMessage.message.description}
          </FormMessage>
        </div>
      );
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.imageContainer}>
        <Image
          alt="auth-image"
          src={image}
          height="188px"
          width="188px"
          objectFit="contain"
        />
      </Box>
      <Stack spacing={2}>
        <Box className={styles.contentContainer}>
          <Typography variant={constants.H1} className={styles.title}>
            {title}
          </Typography>
          {renderFromMessage()}
          <Typography variant="body2" className={styles.description}>
            {description}
          </Typography>
          {content}
          {!isEndView && (
            <Box className={styles.checkBoxContainer}>
              <Box className={styles.checkBox}>
                <Checkbox
                  sx={{
                    padding: 0,
                  }}
                  checked={rememberMe}
                  onChange={() => {
                    setRememberMe(event.target.checked);
                  }}
                />
                <Typography className={styles.checkBoxLabel}>
                  Remember me
                </Typography>
              </Box>
              <Typography variant="body2" className={styles.checkBoxText}>
                {`This means you won't have to authenticate at every sign-in`}
              </Typography>
            </Box>
          )}
          <Stack spacing={2}>
            <StyledButton
              theme={constants.PATIENT}
              mode={constants.PRIMARY}
              type="button"
              size={constants.SMALL}
              data-testid="primary-button"
              gradient={false}
              onClick={() => {
                onClickPrimaryButton();
              }}
            >
              {primaryButtonTitle}
            </StyledButton>
            {!isEndView && (
              <StyledButton
                theme={constants.PATIENT}
                mode={constants.SECONDARY}
                type="button"
                size={constants.SMALL}
                data-testid="secondary-button"
                gradient={false}
                onClick={() => {
                  onClickSecondaryButton();
                }}
              >
                {secondaryButtonTitle}
              </StyledButton>
            )}
            <Link
              className={styles.link}
              onClick={() => {
                onClickLink();
              }}
            >
              {linkTitle}
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}