import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { colors } from "../../../styles/theme";

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
  ...props
}) {
  return (
    <CustomFormControl variant="filled" {...props} style={{ width: "100%" }}>
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          fontSize: "16px",
          "&.MuiInputLabel-shrink": {
            color: colors.darkGreen,
            fontWeight: 600,
            fontFamily: "Libre Franklin",
            fontSize: "1rem",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={labelId ? labelId : null}
        id={id ? id : null}
        value={value}
        label={label}
        onChange={onChange}
        sx={{
          fontSize: "16px",
          "& .MuiInputBase-input:focus": {
            backgroundColor: "#fff",
          },
        }}
      >
        {options.map((option, idx) => {
          return (
            <MenuItem key={idx} value={option} sx={{ fontSize: "16px" }}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </CustomFormControl>
  );
}
