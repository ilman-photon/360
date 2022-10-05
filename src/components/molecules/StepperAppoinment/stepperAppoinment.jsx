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
        aria-label={props.ariaLabelText || `Progress Bar`}
      >
        {steps?.map((label, idx) => (
          <Step
            aria-label={`${label} stage in progress bar`}
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "#D5F1D4", // circle color (COMPLETED)
                stroke: "#00B88C",
                background: "#00B88C",
                borderRadius: "50%",
              },
              "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                {
                  color: "black", // Just text label (COMPLETED)
                  background: "transparent",
                },
              "& .MuiStepLabel-root .Mui-active": {
                color: "#0095A9", // circle color (ACTIVE)
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "black", // Just text label (ACTIVE)
                },
              "& .Mui-disabled .MuiStepIcon-root": {
                color: "transparent", // Hollow icon (INCOMPLETE)
                stroke: "black",
                background: "transparent",
                borderRadius: "50%",
              },
            }}
            key={label}
          >
            <StepLabel
              sx={{
                ".css-qivjh0-MuiStepLabel-label.MuiStepLabel-alternativeLabel":
                  {
                    marginTop: 1,
                    color: "#000000",
                  },
              }}
              tabIndex={"0"}
              aria-label={`Stepper ${idx + 1}. ${label} `}
            >
              {isDesktop ? label : idx === props.activeStep ? label : null}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
