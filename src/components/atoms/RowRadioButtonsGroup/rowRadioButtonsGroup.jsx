import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FormHelperText } from "@mui/material";
import { colors } from "../../../styles/theme";

export default function RowRadioButtonsGroup({ helperText = null, ...props }) {
  const options = props.options || [];

  return (
    <FormControl {...props}>
      <FormLabel
        id="row-radio-buttons-group-label"
        sx={{
          fontSize: 16,
          "&.Mui-focused": {
            color: colors.black,
          },
        }}
      >
        {props.label}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {options.map((option, idx) => {
          return (
            <FormControlLabel
              key={idx}
              value={option.value}
              control={
                <Radio
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
