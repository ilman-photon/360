import React, { useState,useRef } from "react";
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

  onClickedSubmitButton = () => {
    // This is intentional
  },
  onClickedSkipButton = () => {
    // This is intentional
  },
  testIds,
}) => {
  const [questionVals,setQuestionVals] = useState([null, null, null])
  const [questionValsDua,setQuestionValsDua] = useState(securityQuestionList)


      const  handleQuestionValChange = (option, index) => {
        const newQuestionVals = questionVals;
        newQuestionVals[index] = option;
        setQuestionVals([...questionVals, newQuestionVals])
      };
    
     const  getAvailableOptions = () => {
        const availableOptionsLeft = questionValsDua;
        return availableOptionsLeft.filter(questionOption => {
          return questionVals.indexOf(questionOption) === -1;
        });
      };

  const [showPostMessage, setShowPostMessage] = useState(propsShowPostMessage);
  const [postMessage, setPostMessage] = React.useState(
    "You must answer all security questions"
  );
  const { handleSubmit, control } = useForm()
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
      onShowPostMessage("You must answer all security questions");
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
    let tabindex = 0;
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
                    },
                  }}
                  label={`Question ${index}`}
                  labelId={`question-label-${index}`}
                  id={`question-id-${index}`}
                  options={getAvailableOptions()}
                  value={value}
                  onChange={(event) => {
                    onChange(event);
                    handleQuestionValChange(event.target.value,index)
                    if (showPostMessage) {
                      setShowPostMessage(false);
                    }
                  }}
                  menuProps={{
                    tabIndex: tabindex,
                  }}
                  renderValue={(select)=>{
                    return select
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
                    marginTop: "8px",
                    ["@media (max-width: 992px)"]: {
                      marginTop: "16px",
                    },
                    "& .MuiFilledInput-root": {
                      border: "1px solid #bbb",
                      backgroundColor: "#fff",
                    },
                  }}
                  label={`Answer ${index}`}
                  id={`answer-${index}`}
                  variant="filled"
                  value={value}
                  inputProps={{ maxLength: 20 }}
                  style={styles.answerInputStyle}
                  onChange={(event) => {
                    onChange(event);
                    if (showPostMessage) {
                      setShowPostMessage(false);
                    }
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                  tabIndex={tabindex++}
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
      <h3>Ini punya saya</h3>

      {showPostMessage ? (
        <FormMessage success={false} sx={styles.postMessage}>
          {postMessage}
        </FormMessage>
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        {securityQuestionUI()}
        <Box
          style={styles.buttonContainer}
          sx={{
            flexDirection: "row",
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
            Submit
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
            Skip
          </StyledButton>
        </Box>
      </form>
    </Box>
  );
};

export default SecurityQuestion;
