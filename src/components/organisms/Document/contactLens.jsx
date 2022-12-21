import { Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { StyledTextArea } from "../../atoms/TextArea/textArea";
import SignForm from "../../molecules/SignForm/signForm";
import styles from "./styles.module.scss";

export default function ContactLens({
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
              isEdit={isEditable}
              noBorder={!disableInput}
              helperText={error ? error.message : null}
              sx={{
                margin: "24px 0",
                ".MuiInputBase-inputMultiline": {
                  height: "30px !important",
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
        isReadOnlyDate={true}
        textInfo="Patient Signature:"
        textInfoPosition="top"
        controlName={{
          sign: controlName.sign,
          date: controlName.signDate,
        }}
      />
    </Stack>
  );
}
