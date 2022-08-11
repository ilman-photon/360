import React, { useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { styles } from "./style";
import { StyledButton } from "../../atoms/Button/button";
import { useForm, Controller } from "react-hook-form";
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";
import StyledInput from "../../atoms/Input/input";
import FormMessage from "../../molecules/FormMessage/formMessage";
import globalStyles from "../../../styles/Global.module.scss";

const SecurityQuestion = ({
  securityQuestionList = [],
  propsShowPostMessage = false,
  postMessage = "You must answer all security questions",
  securityQuestionCount = 5,
  onClickedSubmitButton = () => {},
  onClickedSkipButton = () => {},
}) => {
  const [showPostMessage, setShowPostMessage] = useState(propsShowPostMessage);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    let validate = true;
    for (const property in data) {
      if (!data[property]) {
        validate = false;
        break;
      }
    }
    if (validate) {
      onClickedSubmitButton(checkSubmitMessage);
    } else {
      setShowPostMessage(true);
      //Scroll to top
      window.scrollTo(0, 0);
    }
  };

  const checkSubmitMessage = (message) => {
    setPostMessage(message);
  };

  const securityQuestionUI = function () {
    const indents = [];
    for (let i = 0; i < securityQuestionCount; i++) {
      const index = i + 1;
      indents.push(
        <Box key={index} style={styles.questionContainer}>
          <Controller
            as={SelectOptionButton}
            name={`question-${index}`}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <SelectOptionButton
                  sx={{
                    fontSize: "16px",
                    "& .MuiFilledInput-root": {
                      border: "1px solid #bbb",
                      backgroundColor: "#fff",
                    },
                  }}
                  label={`Question ${index}`}
                  labelId={`question-label-${index}`}
                  id={`question-id-${index}`}
                  options={securityQuestionList}
                  value={value}
                  onChange={(event) => {
                    onChange(event);
                    if (showPostMessage) {
                      setShowPostMessage(false);
                    }
                  }}
                />
              );
            }}
          />
          <Controller
            key={`answer-key-${index}`}
            name={`answer-${index}`}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  sx={{
                    "& .MuiFilledInput-root": {
                      border: "1px solid #bbb",
                      backgroundColor: "#fff",
                    },
                  }}
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
    <Box className={globalStyles.componentContainer}>
      {showPostMessage ? (
        <FormMessage success={false} sx={styles.postMessage}>
          {postMessage}
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
            size="small"
            gradient={false}
            style={styles.buttonStyle}
          >
            Submit
          </StyledButton>
          <StyledButton
            theme="patient"
            mode="secondary"
            size="small"
            gradient={false}
            style={styles.buttonStyle}
            onClick={onClickedSkipButton}
          >
            Skip
          </StyledButton>
        </Box>
      </form>
    </Box>
  );
};

export default SecurityQuestion;
