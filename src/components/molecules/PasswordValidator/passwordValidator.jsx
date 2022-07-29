import React from "react";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import { Typography } from "@mui/material";
import { styles } from "./style";
import { Collapse } from "@mui/material";

export const PasswordValidator = ({ ...props }) => {
  const validator = props.validator || [];
  let isValid = true;
  if (props.password) {
    //validate
    validator.forEach((element) => {
      if (element.validate) isValid = false;
    });
  }
  let errors1 = [];
  let errors2 = [];

  return (
    <div
      style={
        props.isShowValidation
          ? { display: "block", margin: 8, paddingBottom: 8 }
          : {}
      }
    >
      <Collapse in={props.isShowValidation}>
        {validator.map((err, i) => {
          if (err.mandatory) {
            if (err.validate) props.validatePassword(errors1.push(err.validate))
          } else {
            if (err.validate) props.validatePassword(errors2.push(err.validate))
          }
          return err.text ? (
            <Typography variant="h3" sx={styles.textStyles}>
              {err.label}
            </Typography>
          ) : (
            <LabelWithIcon key={i} error={err.validate} label={err.label} />
          );
        })}
        {props.validatePassword(errors1, errors2)}
      </Collapse>
    </div>
  );
};

export default PasswordValidator;
