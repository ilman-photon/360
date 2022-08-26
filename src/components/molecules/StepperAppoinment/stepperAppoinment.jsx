import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useMediaQuery } from "@mui/material";

export default function StepperAppoinment({ ...props }) {
  const steps = props.steps;
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        p: { xs: 1, md: "16px 240px" },
        mt: { xs: 0, md: "80px" },
        justifyContent: "center",
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <Stepper
        activeStep={props.activeStep}
        alternativeLabel
        sx={{ width: "800px" }}
      >
        {steps.map((label, idx) => (
          <Step sx={{ color: "#87C9D2" }} key={label}>
            <StepLabel
              sx={{
                ".css-qivjh0-MuiStepLabel-label.MuiStepLabel-alternativeLabel":
                  {
                    marginTop: 1,
                    color: "#000000",
                  },
              }}
            >
              {isDesktop ? label : idx === props.activeStep ? label : null}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
