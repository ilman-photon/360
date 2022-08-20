import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FormHelperText, Tooltip } from "@mui/material";
import { colors } from "../../../styles/theme";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

export default function RowRadioButtonsGroup({
  row = true,
  helperText = null,
  tooltipContent,
  ...props
}) {
  const options = props.options || [];

  return (
    <FormControl {...props}>
      <FormLabel
        id="row-radio-buttons-group-label"
        sx={{
          fontSize: 16,
          "&.Mui-focused": {
            color: "black",
          },
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {props.label}
        {tooltipContent ? (
          <>
            <Tooltip title={tooltipContent} placement="top">
              <ErrorOutlineOutlinedIcon
                sx={{
                  width: 16,
                  height: 16,
                  marginLeft: "4px",
                }}
              />
            </Tooltip>
          </>
        ) : (
          ""
        )}
      </FormLabel>
      <RadioGroup
        row={row}
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {options.map((option, idx) => {
          return (
            <FormControlLabel
              key={idx}
              value={option.value}
              aria-label={`${option.label} Radio Button`}
              control={
                <Radio
                  checked={props.value === option.value}
                  data-testid={props.testId}
                  sx={{
                    ".MuiSvgIcon-root": {
                      width: "0.75em",
                    },
                    "&.Mui-checked": {
                      color: colors.teal,
                    },
                  }}
                />
              }
              label={option.label}
              sx={{
                ".MuiTypography-root": {
                  fontSize: 14,
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
