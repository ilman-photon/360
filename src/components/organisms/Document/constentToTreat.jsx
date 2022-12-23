import { Grid, Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { StyledTextArea } from "../../atoms/TextArea/textArea";
import StyledInput from "../../atoms/Input/input";
import SignForm from "../../molecules/SignForm/signForm";
import styles from "./styles.module.scss";

export default function ConstentToTreat({
  defaultDataValue = {},
  disableInput = false,
  isEdit = false,
  isSubmitForm = false,
  useFormProps = null,
  controlName = {
    patientName: "patientName",
    dob: "dob",
    textInfo: "textInfo",
    sign: "sign",
    signDate: "signDate",
  },
}) {
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setIsEditable(isEdit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit]);

  return (
    <Stack className={styles.textContainer}>
      <Grid
        container
        spacing={2}
        sx={{
          margin: "24px 0",
          background: "#F4F4F4",
          width: "100%",
          padding: "16px 16px 32px 16px",
          ".MuiGrid-item:first-of-type": {
            pl: 0,
          },
        }}
      >
        <Grid item xs={12} md={7}>
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
                  inputProps={{ "aria-label": "Patient name field" }}
                  data-testid={"patient-name-field"}
                  required
                  sx={{
                    width: "100%",
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
        </Grid>
        <Grid item xs={12} md={4}>
          <Controller
            name={controlName.dob}
            control={useFormProps.control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  disableFuture
                  type="default"
                  maxLength={50}
                  id="dob"
                  InputProps={{ "data-testid": "date-field", readOnly: true }}
                  data-testid={"date-field"}
                  label="Date"
                  variant="filled"
                  disabled={disableInput || isSubmitForm}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  required
                  sx={{
                    margin: 0,
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
      <Controller
        name={controlName.textInfo}
        control={useFormProps.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <StyledTextArea
              onChange={onChange}
              value={value}
              isEdit={isEditable}
              tabIndex={0}
              helperText={error ? error.message : null}
              sx={{
                marginBottom: "24px",
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
        showRelationship={false}
        isReadOnlyDate={true}
        textInfo="Patient/Legal Representative Signature"
        controlName={{
          sign: controlName.sign,
          date: controlName.signDate,
        }}
      />
    </Stack>
  );
}
