import { Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { StyledTextArea } from "../../atoms/TextArea/textArea";
import SignForm from "../../molecules/SignForm/signForm";
import styles from "./styles.module.scss";

export default function MedicationVisionExam({
  defaultDataValue = {},
  disableInput = false,
  isEdit = false,
  isSubmitForm = false,
  useFormProps = null,
  controlName = {
    textInfo: "textInfo",
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
                margin: "24px 0",
                ".MuiInputBase-inputMultiline": {
                  height: "455px !important",
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
