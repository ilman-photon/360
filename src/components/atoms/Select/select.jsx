import {
  alpha,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  styled,
  ThemeProvider,
} from "@mui/material";
import { colors, primaryTheme } from "../../../styles/theme";

const CustomFormControl = styled((props) => <FormControl {...props} />)(
  ({ theme }) => ({
    "& .MuiFilledInput-root": {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      height: 52,
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-error": {
        borderColor: "#FF0000",
        backgroundColor: "#FF000010",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
        boxShadow: `${colors.darkGreen} 0 0 0 2px`,
        borderColor: colors.darkGreen,
        color: colors.darkGreen,
      },
    },
  })
);

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
          "::before": {
            borderBottom: "none",
          },
          "::after": {
            borderBottom: "none",
          },
        }}
        onChange={props.onChange}
        value={props.value}
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
