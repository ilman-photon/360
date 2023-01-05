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
import Tooltip from "@mui/material/Tooltip";
import { colors, primaryTheme } from "../../../styles/theme";
import { PickersDay, pickersDayClasses } from "@mui/x-date-pickers";

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
    ".Mui-disabled input": {
      backgroundColor: "#efefef",
    },
  })
);

export const CustomPasswordInput = styled((props) => (
  <TextField
    aria-label={
      props.required ? "Password required text field" : "Password text field"
    }
    // tabIndex={0}
    InputProps={{
      disableUnderline: true,
      endAdornment: (
        <InputAdornment position="end">
          <Tooltip
            title={`${
              props.type !== "password" ? "Hide Password" : "Show Password"
            }`}
            PopperProps={{
              role: "alert",
            }}
            aria-label={`${
              props.type !== "password"
                ? "Password hide icon"
                : "Password unhide icon"
            }`}
          >
            <IconButton
              aria-label={`${
                props.type !== "password"
                  ? "Password hide icon"
                  : "Password unhide icon"
              }`}
              {...props.customevent}
              edge="end"
            >
              {props.type !== "password" ? (
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon sx={{ transform: "scaleX(-1)" }} />
              )}
            </IconButton>
          </Tooltip>
        </InputAdornment>
      ),
    }}
    {...props}
    inputProps={{ ...props.inputProps, maxlength: 20 }}
  />
))(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: "#303030",
    "&.MuiInputLabel-shrink": {
      color: "#003B4A",
      fontWeight: 600,
    },
    "&.Mui-error": {
      color: "#B93632",
      fontWeight: "unset",
    },
  },
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    height: 52,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-error": {
      borderColor: "#B93632",
      backgroundColor: "#FBF4F4",
      color: "#6C6C6C",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      color: "#193138",
    },
  },
  "& .MuiFormHelperText-root": {
    "&.Mui-error": {
      color: "#B93632",
    },
  },
  "& .MuiFormLabel-asterisk.MuiInputLabel-asterisk": {
    visibility: "hidden",
    "&::before": {
      content: '"*"',
      visibility: "visible",
    },
  },
}));

export const RedditTextField = React.forwardRef((props, ref) => {
  return (
    <TextField
      inputRef={ref}
      onKeyDown={props.onKeyDown}
      onInput={(e) => {
        e.target.value = e.target.value
          .toString()
          .slice(0, props.maxLength || 100000);
      }}
      InputProps={{
        disableUnderline: true,
        endAdornment: props.adorment ? (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <PersonOutlinedIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </InputAdornment>
        ) : null,
        className:
          props.inputProps?.readOnly && !props.inputProps?.isTransparent
            ? "Mui-disabled"
            : undefined,
        ...props.InputProps,
      }}
      inputProps={{ "aria-label": props["label"], ...props.inputProps }}
      {...props}
      InputLabelProps={{
        "aria-hidden": true,
        ...props.InputLabelProps,
      }}
    />
  );
});
RedditTextField.displayName = "RedditTextField";

const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
  return (
    <PickersDay
      {...pickersDayProps}
      sx={{
        [`&&.${pickersDayClasses.selected}`]: {
          backgroundColor: colors.primaryButton,
        },
      }}
    />
  );
};

export const StyledRedditField = styled(RedditTextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: "#303030",
    "&.MuiInputLabel-shrink": {
      color: "#003B4A",
      fontWeight: 600,
    },
    "&.Mui-error": {
      color: "#B93632",
    },
    "&.Mui-disabled": {
      color: "#00000061",
    },
  },
  "& .MuiFilledInput-root": {
    border: "1px solid #BDBDBD",
    overflow: "hidden",
    borderRadius: 4,
    height: 52,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#2b2b2b",
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
      borderColor: "#B93632",
      backgroundColor: "#FBF4F4",
      color: "#6C6C6C",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      color: "#193138",
    },
    input: {
      height: "unset",
      color: "#303030",
    },
    "input::placeholder": {
      fontSize: 16,
      color: "#303030",
    },
  },
  "& .MuiFormHelperText-root": {
    "&.Mui-error": {
      color: "#B93632",
    },
  },
  ".Mui-disabled input": {
    backgroundColor: "#efefef",
  },
  "& .MuiFormLabel-asterisk.MuiInputLabel-asterisk": {
    visibility: "hidden",
    "&::before": {
      content: '"*"',
      visibility: "visible",
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

  const preventPasteHandler = (event) => {
    event.preventDefault();
  };

  const DateIcon = () => {
    return (
      <IconButton
        aria-label={"Calendar icon"}
        {...props.customevent}
        edge="end"
        sx={{ display: "none" }}
      ></IconButton>
    );
  };

  switch (props.type) {
    case "password":
      return (
        <>
          <CustomFormControl
            sx={{ m: 1, width: props.passwordWidth || "100%" }}
            variant="filled"
          >
            <CustomPasswordInput
              error={!Boolean(values.value) && props.error}
              InputLabelProps={{
                "aria-hidden": true,
              }}
              inputProps={{
                "aria-label": props["label"],
                ...props.inputProps,
              }}
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
              onPaste={handleMouseDownPassword}
              value={props.value}
              required={props.required}
              inputRef={props.inputRef}
              autoComplete={props.autoComplete}
              sx={{
                ".MuiInputBase-root": {
                  border: "1px solid #BDBDBD",
                },
              }}
            />
          </CustomFormControl>
        </>
      );
    case "dob":
      const dobInputRef = React.useRef(null);
      return (
        <>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              components={{
                OpenPickerIcon: DateIcon,
              }}
              inputFormat="MM/dd/yyyy"
              disableOpenPicker={props.selectorDisabled}
              disableFuture={props.disableFuture}
              disablePast={props.disablePast}
              ariaLabel={
                props.required ? `${props.label} required` : props.label
              }
              ariaLive={props.label}
              label={props.label}
              onChange={props.onChange}
              value={props.value}
              renderDay={renderWeekPickerDay}
              onClose={() => {
                setTimeout(() => {
                  dobInputRef?.current?.blur();
                }, 1);
                props?.onClose && props?.onClose();
              }}
              inputRef={dobInputRef}
              PaperProps={{
                sx: {
                  "& .MuiPickersDay-root": {
                    "&.Mui-selected": {
                      backgroundColor: colors.primaryButton,
                      "&:hover": {
                        backgroundColor: colors.primaryButton,
                      },
                    },
                  },
                },
              }}
              getOpenDialogAriaText={(date, utils) => {
                if (date instanceof Date && !isNaN(date))
                  return `Choose date, selected date is ${utils.format(
                    utils.date(date),
                    "fullDate"
                  )}`;
                else return "Double tap to Choose date";
              }}
              renderInput={(params) => (
                <StyledRedditField
                  variant="filled"
                  sx={{
                    borderRadius: "4px",
                    borderColor: "#B5B5B5",
                    margin: !props.isFilter && !props.noMargin ? "8px" : 0,
                    width: {
                      xs: props.dobWidth,
                      sm: props.dobWidthSm || props.dobWidth,
                    },
                    ["& .MuiFilledInput-root"]: {
                      border: props.isFilter
                        ? "0px solid #ffff"
                        : "1px solid #BDBDBD",
                      ["& .MuiInputBase-input"]: {
                        cursor: props.isFilter ? "pointer" : "inherit",
                      },
                    },
                    ".Mui-disabled": {
                      backgroundColor: "#efefef",
                    },
                  }}
                  {...params}
                  onClick={props.onClick}
                  error={props.error}
                  helperText={props.helperText}
                  onPaste={preventPasteHandler}
                  required={props.required}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "MM/DD/YYYY",
                    readOnly: props.inputProps?.readOnly,
                    className:
                      props.inputProps?.readOnly &&
                      !props.inputProps.isTransparent
                        ? "Mui-disabled"
                        : undefined,
                  }}
                />
              )}
              {...props}
            />
          </LocalizationProvider>
        </>
      );
    case "phone":
      return (
        <>
          <CustomFormControl
            variant="filled"
            sx={{
              width: props.widthPhone,
              ...(props.sxContainer || {}),
            }}
          >
            <InputMask
              mask="(999) 999-9999"
              maskChar={null}
              maskPlaceholder=""
              {...props}
            >
              <StyledRedditField name="phone" type="text" />
            </InputMask>
          </CustomFormControl>
        </>
      );
    case "textarea":
      return (
        <>
          <StyledRedditField
            variant="filled"
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              borderColor: "#fff",

              ".MuiInputBase-root": {
                padding: props.noBorder ? "0px" : "",
              },

              ".MuiInputBase-inputMultiline": {
                height: "300px !important",
                overflow: "auto !important",
                color: props.isEdit
                  ? "#191919 !important"
                  : "#003B4A !important",
              },

              ".MuiOutlinedInput-notchedOutline": {
                border: props.noBorder ? "none" : "",
              },
              ...props.sx,
            }}
            {...props}
          />
        </>
      );
    default:
      return (
        <>
          <StyledRedditField
            variant="filled"
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              borderColor: "#B5B5B5",
              ...props.sx,
            }}
            {...props}
            onPaste={preventPasteHandler}
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
        className={["custom-input"].join(" ")}
        adorment={adorment}
        {...props}
      ></CustomInput>
    </ThemeProvider>
  );
};
StyledInput.displayName = "StyledInput";

export default StyledInput;
