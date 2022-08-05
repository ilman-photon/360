import { ThemeProvider, styled, alpha } from "@mui/material/styles";
import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import InputMask from "react-input-mask";

import { primaryTheme } from "../../../styles/theme";

export const CustomFormControl = styled((props) => <FormControl {...props} />)(
  ({ theme }) => ({
    "&.MuiFormControl-root": {
      border: "none",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        backgroundColor: "transparent",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: "transparent",
      },
    },
  })
);

export const CustomPasswordInput = styled((props) => (
  <TextField
    InputProps={{
      disableUnderline: true,
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            {...props.customevent}
            edge="end"
          >
            {props.type !== "password" ? (
              <VisibilityOffOutlinedIcon sx={{ transform: "scaleX(-1)" }} />
            ) : (
              <VisibilityOutlinedIcon />
            )}
          </IconButton>
        </InputAdornment>
      ),
    }}
    {...props}
  />
))(({ theme }) => ({
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
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const RedditTextField = styled((props) => (
  <TextField
    InputProps={{
      disableUnderline: true,
      endAdornment: props.adorment ? (
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" edge="end">
            <PersonOutlinedIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </InputAdornment>
      ) : null,
    }}
    {...props}
  />
))(({ theme }) => ({
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
    "&:before": {
      borderColor: "transparent !important",
    },
    "&:after": {
      borderColor: "transparent !important",
    },
    "&.Mui-error": {
      borderColor: "#FF0000",
      backgroundColor: "#FF000010",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const CustomInput = styled(({ ...props }) => {
  const [values, setValues] = React.useState({
    value: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const showPassword = values.showPassword ? "text" : "password";

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  switch (props.type) {
    case "password":
      return (
        <>
          <CustomFormControl sx={{ m: 1 }} variant="filled">
            <CustomPasswordInput
              error={!Boolean(values.value) && props.error}
              variant="filled"
              id={props.id}
              type={showPassword}
              customevent={{
                onClick: handleClickShowPassword,
                onMouseDown: handleMouseDownPassword,
              }}
              onChange={props.onChange}
              placeholder={props.placeholder}
              label={props.label}
              adorment={props.adorment}
              helperText={props.helperText}
              style={props.style}
            />
          </CustomFormControl>
        </>
      );
    case "dob":
      return (
        <>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disableFuture={props.disableFuture}
              label={props.label}
              onChange={props.onChange}
              value={props.value}
              renderInput={(params) => (
                <RedditTextField
                  variant="filled"
                  style={{ marginTop: 11 }}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    borderColor: "#B5B5B5",
                    margin: "8px",
                  }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </>
      );
    case "phone":
      return (
        <>
          <CustomFormControl sx={{ m: 1 }} variant="filled">
            <InputMask mask="(999) 999-9999" maskPlaceholder="" {...props}>
              <RedditTextField name="phone" type="text" />
            </InputMask>
          </CustomFormControl>
        </>
      );

    default:
      return (
        <>
          <RedditTextField
            variant="filled"
            style={{ marginTop: 11 }}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              borderColor: "#B5B5B5",
              ...props.sx,
            }}
            {...props}
          />
        </>
      );
  }
})(
  () => `
  color: white;
  `
);

export const StyledInput = ({
  type,
  variant = "outlined",
  helperText = "",
  placeholder = "",
  label = "",
  withIcon = "true",
  adorment = null,
  ...props
}) => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <CustomInput
        type={type}
        variant={variant}
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        withicon={withIcon}
        {...props}
        className={["custom-input"].join(" ")}
        adorment={adorment}
      ></CustomInput>
    </ThemeProvider>
  );
};

export default StyledInput;
