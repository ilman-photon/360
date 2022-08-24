import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";
import { colors, primaryTheme } from "../../../styles/theme";

const CustomSelect = (props) => {
  const options = props.options || [];
  return (
    <FormControl sx={{ m: 1 }} variant="filled">
      <InputLabel
        sx={{
          "&.Mui-focused": {
            color: colors.darkGreen,
          },
        }}
      >
        {props.label}
      </InputLabel>
      <Select
        label={props.label}
        defaultValue={props.defaultValue || ""}
        sx={{
          "&.MuiFilledInput-root": {
            background: "transparent",
            border: "solid 1px #e2e2e1",
            borderRadius: "4px",
          },
          "::before": {
            borderBottom: "none",
          },
          "::after": {
            borderBottom: "none",
          },
        }}
        onChange={props.onChange}
        value={props.value}
        data-testid={`styled-select-${props.id}`}
      >
        {options.map((option, idx) => {
          return (
            <MenuItem key={idx} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export const StyledSelect = (props) => {
  return (
    <>
      <ThemeProvider theme={primaryTheme}>
        <CustomSelect
          options={props.options}
          helperText={props.helperText}
          {...props}
        ></CustomSelect>
      </ThemeProvider>
    </>
  );
};
