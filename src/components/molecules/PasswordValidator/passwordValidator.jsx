import React from "react";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import { Box, Typography, Collapse } from "@mui/material";
import { styles } from "./style";
import { colors } from "../../../styles/theme";

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

  const getParentView = (err, key) => {
    let passes = 0;
    err.children.map((value) => {
      if (value.validate) {
        ++passes;
      }
    });
    const passesValidation = err.passesValidation || 3;
    return (
      <Box key={key}>
        <LabelWithIcon
          key={key}
          error={passes < passesValidation}
          label={err.label}
        />
        {getChildrenView(err.children)}
      </Box>
    );
  };

  const getChildrenView = (children) => {
    return (
      <ul>
        {children.map((value, i) => {
          return (
            <li
              key={i}
              style={{ color: value.validate ? colors.green : colors.grey75 }}
            >
              <Typography
                key={i}
                sx={{
                  ...styles.textStyles,
                  ...styles.childrenStyles,
                  color: value.validate ? colors.green : colors.grey75,
                }}
              >
                {value.label}
              </Typography>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div
      style={
        props.isShowValidation
          ? { display: "block", margin: 8, paddingBottom: 8 }
          : {}
      }
    >
      <Collapse in={props.isShowValidation}>
        <>
          {validator.map((err, i) => {
            if (err.mandatory) {
              if (err.validate) errors1.push(err.validate);
            } else {
              if (err.validate) errors2.push(err.validate);
            }
            return err.children ? (
              getParentView(err, i)
            ) : (
              <LabelWithIcon key={i} error={err.validate} label={err.label} />
            );
          })}
          {props.validatePassword(errors1, errors2)}
        </>
      </Collapse>
    </div>
  );
};

export default PasswordValidator;
