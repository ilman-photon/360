import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, FormHelperText } from "@mui/material";
import { colors } from "../../../styles/theme";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Image from "next/image";

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
  isInsuranceForm = false,
  isRegistrationForm = false,
  ...props
}) {
  const options = props.options || [];
  const iconSize = isCancelSchedule ? "24px" : "0.75em";

  return (
    <FormControl {...props}>
      <FormLabel
        id="row-radio-buttons-group-label"
        aria-label={`${props.label}`}
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
        tabIndex={0}
      >
        {props.label}
        {tooltipContent ? (
          <>
            <CustomWidthTooltip title={tooltipContent} placement="top" arrow>
              <Box sx={{ marginLeft: "7px", lineHeight: "10px" }}>
                <Image
                  alt=""
                  src={"/tooltipIcon.png"}
                  width={18}
                  height={18}
                  style={{ cursor: "pointer", paddingLeft: "10px" }}
                />
              </Box>
            </CustomWidthTooltip>
          </>
        ) : (
          ""
        )}
      </FormLabel>
      <RadioGroup
        row={row}
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ ...textSx, marginTop: isCancelSchedule ? "16px" : "unset" }}
      >
        {options.map((option, idx) => {
          return (
            <FormControlLabel
              key={idx}
              value={option.value}
              aria-label={`${option.label} Radio Button`}
              tabindex={0}
              control={
                <Radio
                  checked={props.value === option.value}
                  data-testid={props.testId}
                  sx={{
                    ".MuiSvgIcon-root": {
                      width: iconSize,
                    },
                    "&.Mui-checked": {
                      color: colors.teal,
                    },
                  }}
                />
              }
              label={option.label}
              sx={{
                "& .MuiRadio-root": {
                  padding: isCancelSchedule ? "2px 9px 2px 16px" : "9px",
                },
                ".MuiTypography-root":
                  props.isInsuranceForm || props.isRegistrationForm
                    ? { fontSize: 16, color: "#242526" }
                    : { fontSize: 14 },
              }}
            />
          );
        })}
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
