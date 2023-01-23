import { Grid, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { StyledTextArea } from "../../atoms/TextArea/textArea";
import SignForm from "../../molecules/SignForm/signForm";
import StyledInput from "../../atoms/Input/input";
import styles from "./styles.module.scss";
import { Regex } from "../../../utils/regex";

export default function AuthorizationToDisclose({
  defaultDataValue = {},
  disableInput = false,
  isEdit = false,
  isSubmitForm = false,
  useFormProps = null,
  controlName = {
    textInfo: "textInfo",
    patient1: {
      name: "patientName1",
      relationship: "patientRelationship1",
      phoneNumber: "patientPhoneNumber1",
    },
    patient2: {
      name: "patientName2",
      relationship: "patientRelationship2",
      phoneNumber: "patientPhoneNumber2",
    },
    patient3: {
      name: "patientName3",
      relationship: "patientRelationship3",
      phoneNumber: "patientPhoneNumber3",
    },
    protectionHealth: "protectionHealth",
    sign: "sign",
    signDate: "signDate",
  },
}) {
  const [isEditable, setIsEditable] = useState(false);
  const { errors, isSubmitting, control } = useFormProps;

  useEffect(() => {
    setIsEditable(isEdit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit]);

  useEffect(() => {
    if (Object.keys(errors).length === 1 && errors.sign) {
      const signBtn = document.getElementById("signBtn");
      signBtn.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  function firstSection(key) {
    return (
      <Grid item xs={12} md={8}>
        <Controller
          name={controlName[`${key}`].name}
          control={control}
          render={({
            field: { onChange, value, ref },
            fieldState: { error },
          }) => {
            return (
              <StyledInput
                inputRef={ref}
                value={value}
                onKeyDown={(e) => {
                  if (
                    !Regex.nameValidation.test(e.key) &&
                    e.key != "Backspace" &&
                    e.key != "Tab"
                  ) {
                    e.preventDefault();
                  }
                }}
                onChange={onChange}
                maxLength={50}
                disabled={disableInput || isSubmitForm}
                error={!!error}
                helperText={error ? error.message : null}
                type="default"
                variant="filled"
                label="Name"
                required
                inputProps={{
                  "aria-label": "Name field",
                }}
                data-testid={"patient-name-field"}
                sx={{
                  width: "100%",
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
      </Grid>
    );
  }

  function secondSection(key) {
    return (
      <Grid item xs={12} md={8}>
        <Controller
          name={controlName[`${key}`].relationship}
          control={control}
          render={({
            field: { onChange, value, ref },
            fieldState: { error },
          }) => {
            return (
              <StyledInput
                inputRef={ref}
                value={value}
                onChange={onChange}
                maxLength={50}
                disabled={disableInput || isSubmitForm}
                error={!!error}
                helperText={error ? error.message : null}
                type="default"
                variant="filled"
                label="Relationship"
                required
                inputProps={{
                  "aria-label": "Relationship field",
                }}
                data-testid={"patient-relationship-field"}
                sx={{
                  width: "100%",
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
      </Grid>
    );
  }

  function renderPatientDataUI(index, key) {
    return (
      <Grid
        key={`patient-container-${index}`}
        container
        spacing={2}
        sx={{
          margin: "24px 0 0 0",
          background: "#F4F4F4",
          width: "100%",
          padding: "16px 16px 32px 16px",
          ".MuiGrid-item:nth-child(odd)": {
            pl: 0,
          },
        }}
      >
        {firstSection(key)}
        <Grid item xs={12} md={4}></Grid>
        {secondSection(key)}
        <Grid item xs={12} md={4}>
          <Controller
            name={controlName[`${key}`].phoneNumber}
            control={control}
            render={({
              field: { onChange, value, ref },
              fieldState: { error },
            }) => {
              return (
                <StyledInput
                  inputRef={ref}
                  value={value}
                  onKeyDown={(e) => {
                    if (
                      !Regex.numberOnly.test(e.key) &&
                      e.key != "Backspace" &&
                      e.key != "Tab"
                    ) {
                      e.preventDefault();
                    }
                  }}
                  onChange={onChange}
                  maxLength={50}
                  disabled={disableInput || isSubmitForm}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="default"
                  variant="filled"
                  label="Phone Number"
                  inputProps={{
                    "aria-label": "Phone Number field",
                  }}
                  data-testid={"patient-phone-number-field"}
                  required
                  sx={{
                    width: "100%",
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
        </Grid>
      </Grid>
    );
  }

  function renderPatientFormUI() {
    const intent = [];
    for (const [index, [key]] of Object.entries(Object.entries(controlName))) {
      if (key.indexOf("patient") > -1) {
        intent.push(renderPatientDataUI(index, key));
      }
    }
    return intent;
  }

  function renderProtectionHealth() {
    return (
      <Stack
        sx={{
          margin: "24px 0",
          background: "#F4F4F4",
          width: "100%",
          padding: "16px",
        }}
        className={styles.textContainer}
      >
        <Typography className={styles.textInfo} tabIndex={0}>
          Is there any protected health information you would like to exclude
          from disclosure to the parties listed above? If yes, fill in here:
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <Controller
              name={controlName.protectionHealth}
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    maxLength={50}
                    disabled={disableInput || isSubmitForm}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="default"
                    variant="filled"
                    label="Text field"
                    data-testid={"patient-protection-health-field"}
                    required
                    sx={{
                      width: "100%",
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
          </Grid>
        </Grid>

        <Typography
          className={styles.textInfo}
          sx={{ marginTop: "16px" }}
          tabIndex={0}
        >
          This authorization has No Expiration unless revoked or terminated—in
          writing—by the patient or patient’s personal representative
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack className={styles.textContainer}>
      <Controller
        name={controlName.textInfo}
        control={control}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => {
          return (
            <StyledTextArea
              inputRef={ref}
              onChange={onChange}
              value={value}
              isEdit={isEditable}
              noBorder={!disableInput}
              helperText={error ? error.message : null}
              sx={{
                margin: "14px 0 0 0",
                ".MuiInputBase-inputMultiline": {
                  height: "165px !important",
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
      {renderPatientFormUI()}
      {renderProtectionHealth()}
      <SignForm
        isSigned={defaultDataValue?.sign}
        isEdit={disableInput}
        isSubmitForm={isSubmitForm}
        useFormProps={useFormProps}
        showRelationship={false}
        isReadOnlyDate={true}
        textInfo="Patient/Legal Representative Signature"
        controlName={{
          sign: controlName.sign,
          date: controlName.signDate,
        }}
      />
      <Typography
        className={styles.textInfo}
        sx={{ margin: "16px 0" }}
        tabIndex={0}
      >
        This form replaces all prior disclosure authorizations as of the date
        above.
      </Typography>
    </Stack>
  );
}
