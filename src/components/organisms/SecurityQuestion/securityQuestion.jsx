import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { styles } from "./style";
import { StyledButton } from "../../atoms/Button/button";
import { useForm, Controller } from "react-hook-form";
import SelectOptionButton from "../../atoms/Button/SelectOptionButton/selectOptionButton";
import StyledInput from "../../atoms/Input/input";
import FormMessage from "../../molecules/FormMessage/formMessage";

const SecurityQuestion = ({
  securityQuestionList = ["What was the first concert you attended?"],
  showPostMessage,
  setShowPostMessage,
  securityQuestionCount = 5,
}) => {
  const router = useRouter();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {};

  const securityQuestionUI = function () {
    const indents = [];
    for (let i = 0; i < securityQuestionCount; i++) {
      const index = i + 1;
      indents.push(
        <Box style={styles.questionContainer}>
          <SelectOptionButton
            label={`Question ${index}`}
            labelId={`question-label-${index}`}
            id={`question-id-${index}`}
            options={securityQuestionList}
          />
          <Controller
            name={`answer-${index}`}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  label={`Answer ${index}`}
                  id={`answer-${index}`}
                  variant="filled"
                  value={value}
                  style={styles.answerInputStyle}
                  onChange={(event) => {
                    onChange(event);
                    if (showPostMessage) {
                      setShowPostMessage(false);
                    }
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
          />
        </Box>
      );
    }
    return indents;
  };

  return (
    <Box style={styles.cardStyle}>
      {showPostMessage ? (
        <FormMessage success={false} sx={styles.postMessage}>
          You must answer all security questions
        </FormMessage>
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        {securityQuestionUI()}
        <Box style={styles.buttonContainer}>
          <StyledButton
            type="submit"
            theme="patient"
            mode="primary"
            size="large"
            gradient={false}
            style={styles.buttonStyle}
          >
            Submit
          </StyledButton>
          <StyledButton
            theme="patient"
            mode="secondary"
            size="large"
            gradient={false}
            style={styles.buttonStyle}
          >
            Skip
          </StyledButton>
        </Box>
      </form>
    </Box>
  );
};

export default SecurityQuestion;
