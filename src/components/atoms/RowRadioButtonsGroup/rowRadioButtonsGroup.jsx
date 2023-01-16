import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FormHelperText, IconButton } from "@mui/material";
import { colors } from "../../../styles/theme";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 221,
  },
});

export default function RowRadioButtonsGroup({
  row = true,
  helperText = null,
  tooltipContent,
  textSx = {},
  isCancelSchedule = false,
  customRadioLabel,
  ...props
}) {
  const options = props.options || [];
  const iconSize = isCancelSchedule ? "24px" : "0.75em";

  return (
    <FormControl {...props}>
      <FormLabel
        id="row-radio-buttons-group-label"
        aria-label={`${props.label}`}
        tabIndex={"0"}
        sx={{
          fontSize: 16,
          fontWeight: "600",
          "&.Mui-focused": {
            color: "black",
          },
          display: "inline-flex",
          alignItems: "center",
          ...textSx,
        }}
      >
        <div style={props.labelSx}>{props.label}</div>
        {tooltipContent ? (
          <>
            <Tooltip
              title={tooltipContent}
              placement="top"
              PopperProps={{
                role: "alert",
              }}
              aria-label={`Information Icon - ${tooltipContent}`}
            >
              <IconButton
                sx={{ p: 0, marginLeft: "7px", lineHeight: "10px" }}
                style={{ cursor: "pointer" }}
                aria-label={"Information Icon"}
              >
                <InfoOutlinedIcon
                  sx={{
                    width: "19.21px",
                    height: "19.21px",
                    color: "#00000080",
                  }}
                />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          ""
        )}
      </FormLabel>
      <RadioGroup
        row={row}
        aria-labelledby="row-radio-buttons-group-label"
        name={props.name}
        sx={{ ...textSx, marginTop: isCancelSchedule ? "16px" : "unset" }}
        value={props.value}
        onChange={props.onChange}
      >
        {options.map((option, idx) => {
          return (
            <FormControlLabel
              key={idx}
              value={option.value}
              data-testid={`${option.value}-test`}
              control={
                <Radio
                  checked={props.value === option.value}
                  data-testid={props.testId}
                  inputProps={{
                    tabindex: -1,
                    "aria-hidden": true,
                  }}
                  sx={{
                    ".MuiSvgIcon-root": {
                      width: iconSize,
                    },
                    "&.Mui-checked": {
                      color: colors.teal,
                    },
                    height: isCancelSchedule ? "40px" : "auto",
                  }}
                  tabIndex={-1}
                />
              }
              label={customRadioLabel ? customRadioLabel(option) : option.label}
              tabIndex={0}
              sx={{
                "& .MuiRadio-root": {
                  padding: isCancelSchedule ? "2px 9px 2px 16px" : "9px",
                },
                ".MuiTypography-root": {
                  fontSize: 16,
                  color: "#242526",
                  fontFamily: `"Museo Sans", sans-serif`,
                },
              }}
            />
          );
        })}
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
