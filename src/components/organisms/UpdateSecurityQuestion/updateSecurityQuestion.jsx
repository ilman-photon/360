import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetFormMessage, setFormMessage } from "../../../store";
import { colors } from "../../../styles/theme";
import { StyledButton } from "../../atoms/Button/button";
import StyledInput from "../../atoms/Input/input";
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";
import FormMessage from "../../molecules/FormMessage/formMessage";

const UpdateSecurityQuestion = ({
  questionList = [
    {
      "In what city or town did your parents meet?": "",
      "What is your favorite cold-weather activity?": "",
      "What was the first book you read?": "",
      "What was the first concert you attended?": "",
      "What was the first film you saw in a theater?": "",
      "What was the first thing you learned to cook?": "",
      "What was the make and model of your first car?": "",
      "What was your favorite cartoon character during your childhood?": "",
      "Where did you go the first time you flew on a plane?": "",
      "Who is your all-time favorite movie character?": "",
    },
  ],
  userQuestion = [
    {
      "In what city or town did your parents meet?": "Washington",
    },
  ],
  onUpdateSecurityQuestion = () => {
    // This is intentional
  },
  onCancelUpdateSecurityQuestion = () => {
    // This is intentional
  },
}) => {
  const dispatch = useDispatch();

  const [selectedQuestion, setSelectedQuestion] = useState([...Array(5)]);
  const [filteredQuestionList, setFilteredQuestionList] = useState([]);

  const formMessage = useSelector((state) => state.index.formMessage);

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      "question-1": "",
      "answer-1": "",
      "question-2": "",
      "answer-2": "",
      "question-3": "",
      "answer-3": "",
      "question-4": "",
      "answer-4": "",
      "question-5": "",
      "answer-5": "",
    },
  });

  const buildQuestionList = () => {
    if (questionList[0]) {
      const filtered = Object.keys(questionList[0]).filter((questionOption) => {
        return !selectedQuestion.includes(questionOption);
      });

      setFilteredQuestionList(filtered);
    }
  };

  const onQuestionValueChanged = (option, index) => {
    const newSelectedQuestion = Array.from(selectedQuestion);
    newSelectedQuestion[index] = option;
    setSelectedQuestion(newSelectedQuestion);
  };

  useEffect(() => {
    buildQuestionList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedQuestion]);

  useEffect(() => {
    buildQuestionList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(questionList)]);

  useEffect(() => {
    if (userQuestion[0]) {
      const questions = Object.keys(userQuestion[0]);
      const answers = Object.values(userQuestion[0]);

      const newSelectedQuestion = selectedQuestion;
      questions.forEach((key, index) => {
        setValue(`question-${index + 1}`, key);
        setValue(`answer-${index + 1}`, answers[index]);

        newSelectedQuestion[index] = key;
      });
      setSelectedQuestion(newSelectedQuestion);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userQuestion)]);

  const onSubmit = (data) => {
    dispatch(resetFormMessage());
    const payload = {};
    Object.keys(data).forEach((v, i) => {
      const question = data[`question-${i + 1}`];
      const answer = data[`answer-${i + 1}`];
      if (question) {
        payload[question] = answer;
      }
    });
    onUpdateSecurityQuestion(payload);
  };

  const showErrorMessage = () => {
    dispatch(
      setFormMessage({
        success: false,
        content: "You must answer all security questions",
      })
    );
  };

  return (
    <Stack spacing={3} sx={{ px: 3, py: 4 }}>
      <Typography variant="headlineH2" color={colors.darkGreen}>
        Security Questions
      </Typography>

      {formMessage.content && (
        <FormMessage
          withClose
          onClose={() => {
            dispatch(resetFormMessage());
          }}
          success={formMessage.success}
        >
          {formMessage.content}
        </FormMessage>
      )}

      <form noValidate onSubmit={handleSubmit(onSubmit, showErrorMessage)}>
        <Stack spacing={3}>
          {[...Array(5)].map((_, i) => {
            return (
              <Stack key={`sq-${i}`} spacing={1}>
                <Controller
                  name={`question-${i + 1}`}
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => {
                    return (
                      <SelectOptionButton
                        required
                        id={`question-${i + 1}`}
                        sx={{
                          m: 0,
                          "& .MuiFilledInput-root": {
                            border: "1px solid #bbb",
                            backgroundColor: "#fff",
                            fontSize: "16px",
                            fontWeight: 400,
                            color: colors.darkGreen,
                            "&.Mui-error": {
                              borderColor: "#B93632",
                              backgroundColor: "#FBF4F4",
                            },
                          },
                          ".MuiInputLabel-root": {
                            color: colors.darkGreen,
                            lineHeight: "unset",
                            fontSize: 16,
                            "&.Mui-focused": {
                              color: colors.darkGreen,
                            },
                            "&.Mui-error": {
                              color: colors.error,
                            },
                          },
                        }}
                        label={`Question ${i + 1}`}
                        inputProps={{ "data-testid": `content-input-${i + 1}` }}
                        options={filteredQuestionList}
                        error={!!error}
                        helperText={error ? error.message : null}
                        value={value}
                        onChange={(event) => {
                          onChange(event);
                          onQuestionValueChanged(event.target.value, i);
                          dispatch(resetFormMessage());
                        }}
                        renderValue={(select) => {
                          return select;
                        }}
                      />
                    );
                  }}
                  rules={{
                    required: "This field is required",
                  }}
                />
                <Controller
                  name={`answer-${i + 1}`}
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        required
                        type="text"
                        inputRef={ref}
                        id={`answer-${i + 1}`}
                        label={`Answer ${i + 1}`}
                        sx={{
                          "& .MuiFilledInput-root": {
                            border: "1px solid #bbb",
                            backgroundColor: "#fff",
                          },
                          ".MuiInputLabel-root": {
                            color: colors.darkGreen,
                            "&.Mui-focused": {
                              color: colors.darkGreen,
                            },
                          },
                        }}
                        inputProps={{
                          maxLength: 20,
                          autoComplete: "off",
                        }}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                  rules={{
                    required: "This field is required",
                  }}
                />
              </Stack>
            );
          })}

          <Stack flexDirection="row" gap={3}>
            <StyledButton
              size="small"
              mode="secondary"
              onClick={onCancelUpdateSecurityQuestion}
              sx={{ display: { xs: "none !important", sm: "block" } }}
            >
              Cancel
            </StyledButton>
            <StyledButton size="small" type="submit" sx={{ width: "100%" }}>
              Update
            </StyledButton>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default UpdateSecurityQuestion;
