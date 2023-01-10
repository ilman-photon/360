import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { colors } from "../../../styles/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const CustomFormControl = styled((props) => <FormControl {...props} />)(
  ({ theme }) => ({
    "& .MuiFilledInput-root": {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      height: 52,
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      transition: "none",
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&:before": {
        borderColor: "transparent !important",
        borderBottom: "0px !important",
        transition: "none",
      },
      "&:focus": {
        backgroundColor: "#fff",
      },
      "&:after": {
        borderColor: "transparent !important",
        borderBottom: "0px !important",
        transition: "none",
      },
      "&.Mui-error": {
        borderColor: "#FF0000",
        backgroundColor: "#FF000010",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: "transparent",
      },
    },
  })
);

export default function SelectOptionButton({
  label = "",
  options = [],
  labelId,
  id,
  value = "",
  onChange,
  renderMenuListUI = null,
  ariaLabel = "",
  helperText = "",
  inputProps = {},
  renderValue,
  ...props
}) {
  return (
    <CustomFormControl
      variant="filled"
      sx={{ ...props.sx }}
      style={{ width: "100%" }}
    >
      <InputLabel
        aria-label={ariaLabel}
        role={props.role}
        id="demo-simple-select-label"
        sx={{
          fontSize: "16px",
          "&.MuiInputLabel-shrink": {
            color: colors.darkGreen,
            fontWeight: 600,
            fontFamily: "Museo Sans",
            fontSize: "1rem",
          },
          "&.Mui-error": {
            borderColor: "#B93632",
            backgroundColor: "#FBF4F4",
            color: "#6C6C6C",
          },
          ...props.inputPropsSx,
        }}
        {...props}
      >
        {label}
      </InputLabel>
      <Select
        labelId={labelId ? labelId : null}
        id={id ? id : null}
        value={value}
        label={label}
        onChange={onChange}
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          fontSize: "16px",
          "& .MuiInputBase-input:focus": {
            backgroundColor: "#fff",
          },
        }}
        inputProps={{
          "aria-label": `${label}. ${value}`,
          "aria-live": "polite",
          "data-testid": `select-${id}`,
          ...inputProps,
        }}
        MenuProps={props.MenuProps}
        {...props.menuProps}
        renderValue={
          renderValue ||
          ((select) => {
            return select;
          })
        }
        {...props}
      >
        {options.map((option, idx) => {
          if (renderMenuListUI) {
            return renderMenuListUI(option, idx);
          } else {
            return (
              <MenuItem
                key={idx}
                value={option}
                sx={{ fontSize: "16px", whiteSpace: "pre-wrap" }}
                // inputProps={{
                //   "aria-label": `${option}`,
                //   "aria-live": "polite",
                // }}
              >
                {option}
              </MenuItem>
            );
          }
        })}
      </Select>
      <FormHelperText
        sx={{
          color: props.error ? colors.error : colors.darkGreen,
          fontSize: "12px",
        }}
      >
        {helperText}
      </FormHelperText>
    </CustomFormControl>
  );
}
