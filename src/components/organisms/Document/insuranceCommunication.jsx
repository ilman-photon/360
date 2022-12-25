import { Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { StyledTextArea } from "../../atoms/TextArea/textArea";
import SignForm from "../../molecules/SignForm/signForm";
import styles from "./styles.module.scss";

export default function InsuranceCommunication({
  defaultDataValue = {},
  disableInput = false,
  isEdit = false,
  isSubmitForm = false,
  useFormProps = null,
  controlName = {
    textInfo: "textInfo",
    sign: "sign",
    textInfo2: "textInfo2",
    signPrivatePay: "signPrivatePay",
  },
}) {
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setIsEditable(isEdit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit]);

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
              data-testid={`${controlName.textInfo}-txt`}
              isEdit={isEditable}
              tabIndex={0}
              helperText={error ? error.message : null}
              sx={{
                margin: "24px 0",
                ".MuiInputBase-inputMultiline": {
                  height: "260px !important",
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
        showRelationship={false}
        showDate={false}
        textInfoPosition="none"
        controlName={{
          sign: controlName.sign,
        }}
        customSignText={"Intital"}
      />
      <Typography
        className={styles.subtitleTxt}
        tabIndex={0}
        sx={{
          textAlign: "left !important",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "26px",
          lineHeight: "32px",
          margin: "24px auto 0px 0px !important",
          "@media (max-width: 767px)": {
            margin: "8px 0 16px 0 !important",
            textAlign: "left !important",
          },
        }}
      >
        Private Pay Communication
      </Typography>
      <Controller
        name={controlName.textInfo2}
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
                margin: "24px 0",
                ".MuiInputBase-inputMultiline": {
                  height: "260px !important",
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
        isSigned={defaultDataValue?.signPrivatePay}
        isEdit={disableInput}
        isSubmitForm={isSubmitForm}
        useFormProps={useFormProps}
        showRelationship={false}
        showDate={false}
        isReadOnlyDate={true}
        textInfoPosition="none"
        controlName={{
          sign: controlName.signPrivatePay,
        }}
        customSignText={"Intital"}
      />
    </Stack>
  );
}
