import React from "react";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import { Box, Typography, Collapse, CircularProgress } from "@mui/material";
import { styles } from "./style";
import { colors } from "../../../styles/theme";

export const PasswordValidator = ({ ...props }) => {
  const validator = props.validator || [];
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
      <Box
        key={key}
        sx={{
          "& ::marker": {
            fontSize: "10px",
          },
        }}
      >
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
      <ul
        style={{
          marginTop: "5px",
          marginBottom: 0,
          marginLeft: "10px",
        }}
      >
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
                  display: "inline-table",
                  verticalAlign: "middle",
                }}
                tabIndex="0"
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
      <Collapse
        in={props.isShowValidation}
        sx={{
          ...props.sx,
        }}
      >
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
              <Box
                display={"flex"}
                sx={{
                  alignItems: "baseline",
                  gap: 1,
                }}
              >
                <LabelWithIcon key={i} error={err.validate} label={err.label} />
                {props.isLoading && err.hasLoading && (
                  <CircularProgress
                    sx={{
                      width: "20px !important",
                      height: "20px !important",
                    }}
                  />
                )}
              </Box>
            );
          })}
          {props.validatePassword(errors1, errors2)}
        </>
      </Collapse>
    </div>
  );
};

export default PasswordValidator;
