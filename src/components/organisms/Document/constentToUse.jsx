import { Stack, Typography, Box, useMediaQuery } from "@mui/material";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { StyledTextArea } from "../../atoms/TextArea/textArea";
import StyledInput from "../../atoms/Input/input";
import SignForm from "../../molecules/SignForm/signForm";
import styles from "./styles.module.scss";

export default function ConsentToUse({
  defaultDataValue = {},
  disableInput = false,
  isEdit = false,
  isSubmitForm = false,
  useFormProps = null,
  isNewForm = false,
  controlName = {
    textInfo: "textInfo",
    sign: "sign",
    signRelationship: "signRelationship",
    signDate: "signDate",
    textInfo2: "textInfo2",
    signCommunication: "signCommunication",
    signCommunicationRelationship: "signCommunicationRelationship",
    signCommunicationDate: "signCommunicationDate",
    textInfo3: "textInfo3",
    textInfo4: "textInfo4",
    textInfo5: "textInfo5",
    agentName: "agentName",
    patientName: "patientName",
    patientDOB: "patientDOB",
    signOptional: "signOptional",
    signOptionalRelationship: "signOptionalRelationship",
    signOptionalDate: "signOptionalDate",
    textInfo6: "textInfo6",
  },
}) {
  const [isEditable, setIsEditable] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsEditable(isEdit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit]);

  function renderOptionalFormUI() {
    return (
      <>
        <Box aria-label="Optional heading" tabIndex={0}>
          <Typography className={styles.textTitle} aria-hidden={true}>
            {isNewForm ? "Designation of Agent (Optional)" : "Optional"}
          </Typography>
        </Box>
        <Stack
          alignItems={"center"}
          sx={{
            margin: "24px 0",
            background: "#F4F4F4",
            width: "100%",
            padding: "16px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Controller
            name={controlName.textInfo4}
            control={useFormProps.control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledTextArea
                  multiline={isMobile}
                  onChange={onChange}
                  value={value}
                  isEdit={isEditable}
                  tabIndex={0}
                  noBorder={!disableInput}
                  helperText={error ? error.message : null}
                  sx={{
                    backgroundColor: !disableInput ? "transparent" : "",
                    margin: "24px 0",
                    width: { xs: "100%", md: disableInput ? "180px" : "140px" },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: !disableInput ? "transparent" : "#fff",
                      "&:hover": {
                        backgroundColor: !disableInput ? "transparent" : "#fff",
                      },
                      "&.Mui-focused": {
                        backgroundColor: !disableInput ? "transparent" : "#fff",
                      },
                    },
                    "@media (max-width: 767px)": {
                      margin: "0",
                      paddingBottom: "16px",
                    },
                    ".MuiInputBase-inputMultiline": {
                      height: "26px !important",
                      overflow: "auto !important",
                      color: isEditable
                        ? "#191919 !important"
                        : "#003B4A !important",
                    },
                  }}
                />
              );
            }}
            rules={
              disableInput
                ? {
                    required:
                      "This portion of the form cannot be left blank. Please update all required fields.",
                  }
                : {}
            }
          />
          <Controller
            name={controlName.agentName}
            control={useFormProps.control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  value={value}
                  onChange={onChange}
                  maxLength={50}
                  disabled={disableInput || isSubmitForm}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="default"
                  variant="filled"
                  label="Person to be named as Agent"
                  data-testid={"agent-name-field"}
                  required
                  sx={{
                    margin: "0 16px",
                    width: { xs: "100%", md: "377px" },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      "&:hover": {
                        backgroundColor: "#fff",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "#fff",
                      },
                    },
                    ".MuiFormHelperText-root.Mui-error": {
                      backgroundColor: "#F4F4F4",
                      margin: 0,
                      padding: "0 14px",
                    },
                  }}
                />
              );
            }}
            rules={
              !disableInput
                ? {
                    required: "Please update all required fields.",
                  }
                : {}
            }
          />
          <Controller
            name={controlName.textInfo5}
            control={useFormProps.control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledTextArea
                  multiline={isMobile}
                  onChange={onChange}
                  value={value}
                  isEdit={isEditable}
                  noBorder={!disableInput}
                  tabIndex={0}
                  helperText={error ? error.message : null}
                  sx={{
                    backgroundColor: !disableInput ? "transparent" : "",
                    margin: "24px 0",
                    "@media (max-width: 767px)": {
                      margin: "16px 0 0 0 ",
                    },
                    width: { xs: "100%", md: disableInput ? "700px" : "650px" },
                    ".MuiInputBase-inputMultiline": {
                      height: "26px !important",
                      overflow: "auto !important",
                      color: isEditable
                        ? "#191919 !important"
                        : "#003B4A !important",

                      "@media (max-width: 767px)": {
                        height: "auto !important",
                      },
                    },
                  }}
                />
              );
            }}
            rules={
              disableInput
                ? {
                    required:
                      "This portion of the form cannot be left blank. Please update all required fields.",
                  }
                : {}
            }
          />
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            margin: "0 0 48px 0",
            background: "#F4F4F4",
            width: "100%",
            padding: "16px",
            "@media (max-width: 767px)": {
              display: "flex",
              flexWrap: "wrap",
            },
          }}
        >
          <Typography className={styles.textOption} tabIndex={0}>
            for
          </Typography>
          <Controller
            name={controlName.patientName}
            control={useFormProps.control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  value={value}
                  onChange={onChange}
                  maxLength={50}
                  disabled={disableInput || isSubmitForm}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="default"
                  variant="filled"
                  label="Patient Name"
                  data-testid={"Patient-name-field"}
                  required
                  sx={{
                    margin: "0 16px",
                    width: { xs: "auto", md: "377px" },
                    ".MuiFormHelperText-root.Mui-error": {
                      backgroundColor: "#F4F4F4",
                      margin: 0,
                      padding: "0 14px",
                    },
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              );
            }}
            rules={
              !disableInput
                ? {
                    required: "Please update all required fields.",
                  }
                : {}
            }
          />
          <Typography className={styles.textOption} tabIndex={0}>
            , date of birth
          </Typography>
          <Controller
            name={controlName.patientDOB}
            control={useFormProps.control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  value={value}
                  onChange={onChange}
                  maxLength={50}
                  disabled={disableInput || isSubmitForm}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="default"
                  variant="filled"
                  inputProps={{
                    "aria-label": "date field",
                  }}
                  label="MM/DD/YYYY"
                  data-testid={"Patient-dob-field"}
                  required
                  sx={{
                    margin: "0 16px",
                    width: "177px",
                    ".MuiFormHelperText-root.Mui-error": {
                      backgroundColor: "#F4F4F4",
                      margin: 0,
                      padding: "0 14px",
                    },
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              );
            }}
            rules={
              !disableInput
                ? {
                    required: "Please update all required fields.",
                  }
                : {}
            }
          />
        </Stack>
      </>
    );
  }

  return (
    <Stack className={styles.textContainer}>
      <Controller
        name={controlName.textInfo}
        control={useFormProps.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <StyledTextArea
              onChange={onChange}
              value={value}
              isEdit={isEditable}
              helperText={error ? error.message : null}
              tabIndex={0}
              sx={{
                margin: "24px 0",
                ".MuiInputBase-inputMultiline": {
                  height: "251px !important",
                  overflow: "auto !important",
                  color: isEditable
                    ? "#191919 !important"
                    : "#003B4A !important",
                },
              }}
            />
          );
        }}
        rules={
          disableInput
            ? {
                required:
                  "This portion of the form cannot be left blank. Please update all required fields.",
              }
            : {}
        }
      />
      <SignForm
        isSigned={defaultDataValue?.sign}
        isEdit={disableInput}
        isSubmitForm={isSubmitForm}
        useFormProps={useFormProps}
        isReadOnlyDate={true}
        controlName={{
          sign: controlName.sign,
          date: controlName.signDate,
          relationship: controlName.signRelationship,
        }}
      />
      <Controller
        name={controlName.textInfo2}
        control={useFormProps.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <StyledTextArea
              onChange={onChange}
              value={value}
              isEdit={isEditable}
              noBorder={!disableInput}
              helperText={error ? error.message : null}
              tabIndex={0}
              sx={{
                margin: "24px 0",
                ".MuiInputBase-inputMultiline": {
                  height: "185px !important",
                  overflow: "auto !important",
                  color: isEditable
                    ? "#191919 !important"
                    : "#003B4A !important",
                },
              }}
            />
          );
        }}
        rules={
          disableInput
            ? {
                required:
                  "This portion of the form cannot be left blank. Please update all required fields.",
              }
            : {}
        }
      />
      <SignForm
        isSigned={defaultDataValue?.signCommunication}
        isEdit={disableInput}
        isSubmitForm={isSubmitForm}
        useFormProps={useFormProps}
        isReadOnlyDate={true}
        showDate={!isNewForm}
        showRelationship={!isNewForm}
        textInfoPosition={isNewForm ? "none" : "bottom"}
        controlName={{
          sign: controlName.signCommunication,
          date: controlName.signCommunicationDate,
          relationship: controlName.signCommunicationRelationship,
        }}
        customSignText={isNewForm ? "Initial" : ""}
      />
      <Controller
        name={controlName.textInfo3}
        control={useFormProps.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <StyledTextArea
              onChange={onChange}
              value={value}
              isEdit={isEditable}
              noBorder={!disableInput}
              helperText={error ? error.message : null}
              tabIndex={0}
              sx={{
                margin: "24px 0",
                ".MuiInputBase-inputMultiline": {
                  height: "70px !important",
                  overflow: "auto !important",
                  color: isEditable
                    ? "#191919 !important"
                    : "#003B4A !important",
                  fontFamily: `"Bw Nista Geometric DEMO", sans-serif`,
                  fontSize: "18px",
                },
              }}
            />
          );
        }}
        rules={
          disableInput
            ? {
                required:
                  "This portion of the form cannot be left blank. Please update all required fields.",
              }
            : {}
        }
      />
      {renderOptionalFormUI()}
      <SignForm
        isSigned={defaultDataValue?.signOptional}
        isEdit={disableInput}
        isSubmitForm={isSubmitForm}
        useFormProps={useFormProps}
        isReadOnlyDate={true}
        controlName={{
          sign: controlName.signOptional,
          date: controlName.signOptionalDate,
          relationship: controlName.signOptionalRelationship,
        }}
      />
      <Controller
        name={controlName.textInfo6}
        control={useFormProps.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <StyledTextArea
              onChange={onChange}
              value={value}
              isEdit={isEditable}
              noBorder={!disableInput}
              helperText={error ? error.message : null}
              tabIndex={0}
              sx={{
                margin: "24px 0",
                ".MuiInputBase-inputMultiline": {
                  height: "26px !important",
                  overflow: "auto !important",
                  color: isEditable
                    ? "#191919 !important"
                    : "#003B4A !important",
                },
              }}
            />
          );
        }}
        rules={
          disableInput
            ? {
                required:
                  "This portion of the form cannot be left blank. Please update all required fields.",
              }
            : {}
        }
      />
    </Stack>
  );
}
