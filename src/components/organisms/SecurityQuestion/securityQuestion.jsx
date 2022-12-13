import React, { useState } from "react";
import { Box } from "@mui/material";
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
  securityQuestionCount = 5,
  updateMode = false,

  onClickedSubmitButton = () => {
    // This is intentional
  },
  onClickedSkipButton = () => {
    // This is intentional
  },
  testIds = {},
}) => {
  const [questionVals, setQuestionVals] = useState([null, null, null]);
  // const [questionValsDua] = useState(securityQuestionList);

  const handleQuestionValChange = (option, index) => {
    const newQuestionVals = questionVals;
    newQuestionVals[index] = option;
    setQuestionVals([...questionVals, newQuestionVals]);
  };

  const getAvailableOptions = () => {
    // const availableOptionsLeft = questionValsDua;
    console.log({ securityQuestionList });
    // console.log({availableOptionsLeft})
    const questions = securityQuestionList.filter((questionOption) => {
      return questionVals.indexOf(questionOption) === -1;
    });

    console.log({ questions });

    return questions;
  };

  const [showPostMessage, setShowPostMessage] = useState(propsShowPostMessage);
  const [postMessage, setPostMessage] = React.useState(
    "You must answer all security questions"
  );
  const { handleSubmit, control } = useForm();
  const hasDuplicates = (data) => {
    const isDuplicateAnswer = containsDuplicates(data.answer);
    const isDuplicateQuestion = containsDuplicates(data.question);

    return isDuplicateQuestion || isDuplicateAnswer;
  };

  function containsDuplicates(array) {
    return array.length !== new Set(array).size;
  }

  const onSubmit = (data) => {
    let validate = true;
    for (const property in data) {
      if (!data[property]) {
        validate = false;
        break;
      }
    }

    const questionAnswer = {};
    const question = [];
    const answer = [];
    for (const [key, value] of Object.entries(data)) {
      if (key.indexOf("answer") > -1) {
        answer.push(value);
      } else {
        question.push(value);
      }
    }
    questionAnswer["question"] = question;
    questionAnswer["answer"] = answer;

    if (validate && hasDuplicates(questionAnswer)) {
      onShowPostMessage("Don’t choose the same question and answer!");
    } else if (validate && !hasDuplicates(questionAnswer)) {
      onClickedSubmitButton(questionAnswer, checkSubmitMessage);
    } else {
      onShowPostMessage(
        "You must answer all security questions in order to proceed."
      );
    }
  };

  const checkSubmitMessage = ({ status, message }) => {
    if (status === "failed") {
      onShowPostMessage(message);
    }
  };

  const onShowPostMessage = function (message) {
    setShowPostMessage(true);
    setPostMessage(message);
    //Scroll to top
    window.scrollTo(0, 0);
  };

  const securityQuestionUI = function () {
    const indents = [];
    for (let i = 0; i < securityQuestionCount; i++) {
      const index = i + 1;
      indents.push(
        <Box
          key={index}
          style={styles.questionContainer}
          sx={{
            marginBottom: "24px",
            ["@media (max-width: 992px)"]: {
              marginBottom: "32px",
            },
          }}
        >
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
                      "&.Mui-focused": {
                        border: "1px solid #bbb",
                        boxShadow: "none",
                      },
                    },
                    ".MuiInputLabel-shrink": {
                      color: "#003B4A !important",
                      fontWeight: "600",
                    },
                  }}
                  inputProps={{
                    "aria-label": `Question ${index} Dropdown Menu - Required`,
                  }}
                  label={`Question ${index}`}
                  labelId={`question-label-${index}`}
                  id={`question-id-${index}`}
                  options={getAvailableOptions()}
                  value={value}
                  onChange={(event) => {
                    onChange(event);
                    handleQuestionValChange(event.target.value, index);
                    if (showPostMessage) {
                      setShowPostMessage(false);
                    }
                  }}
                  renderValue={(select) => {
                    return select;
                  }}
                  required
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
                    marginTop: "8px",
                    ["@media (max-width: 992px)"]: {
                      marginTop: "16px",
                    },
                    "& .MuiFilledInput-root": {
                      border: "1px solid #bbb",
                      backgroundColor: "#fff",
                    },
                  }}
                  inputProps={{
                    maxLength: 20,
                    "aria-label": `Answer ${index} - Required`,
                    autocomplete: "off",
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
                  required
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
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form} noValidate>
        {securityQuestionUI()}
        <Box
          style={styles.buttonContainer}
          sx={{
            flexDirection: updateMode ? "row-reverse" : "row",
            justifyContent: updateMode ? "flex-end" : "flex-start",
            ["@media (max-width: 992px)"]: {
              flexDirection: "column",
            },
          }}
        >
          <StyledButton
            type="submit"
            theme="patient"
            mode="primary"
            size="small"
            data-testid={testIds.btnSubmitSecurity || "primary-button"}
            gradient={false}
            style={styles.buttonStyle}
            sx={{
              ["@media (max-width: 992px)"]: {
                marginBottom: "16px",
              },
            }}
          >
            {updateMode ? "Update" : "Submit"}
          </StyledButton>
          <StyledButton
            theme="patient"
            mode="secondary"
            size="small"
            data-testid={testIds.btnSkip || "secondary-button"}
            gradient={false}
            style={styles.buttonStyle}
            onClick={onClickedSkipButton}
            sx={{
              ["@media (max-width: 992px)"]: {
                marginBottom: "16px",
              },
            }}
          >
            {updateMode ? "Cancel" : "Skip"}
          </StyledButton>
        </Box>
      </form>
    </Box>
  );
};

export default SecurityQuestion;
