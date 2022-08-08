import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { ThemeProvider, styled, alpha } from "@mui/material/styles";

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
      "&.Mui-error": {
        borderColor: "#FF0000",
        backgroundColor: "#FF000010",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  })
);

export const CustomSelect = styled((props) => <Select {...props} />)(
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
        borderBottom: "0px",
      },
      "&:before": {
        borderColor: "transparent !important",
        borderBottom: "0px",
      },
      "&:after": {
        borderColor: "transparent !important",
        borderBottom: "0px",
      },
      "&.Mui-error": {
        borderColor: "#FF0000",
        backgroundColor: "#FF000010",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
        borderColor: "0px",
      },
    },
  })
);

export default function SelectOptionButton({
  label = "",
  options = [],
  labelId,
  id,
  ...props
}) {
  const [optionValue, setOptionValue] = React.useState("");

  const handleChange = (event) => {
    setOptionValue(event.target.value);
  };

  return (
    <CustomFormControl variant="filled" {...props} style={{ width: "100%" }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId={labelId ? labelId : null}
        id={id ? id : null}
        value={optionValue}
        label={label}
        onChange={handleChange}
      >
        {options.map((option, idx) => {
          return (
            <MenuItem key={idx} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </CustomFormControl>
  );
}
