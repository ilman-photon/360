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
        mt: { xs: 0 },
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
              marginBottom: { xs: "40px", md: "0" },
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
              "& .MuiStepLabel-root .MuiStepLabel-iconContainer .Mui-active": {
                color: "#99d5dd", // circle color (ACTIVE)
                border: "#CFEAED 1px solid",
                borderRadius: "50%",
              },
              "& .MuiStepLabel-root .Mui-active text": {
                fill: "black", // active label text
                fontFamily: "Libre Franklin",
                fontWeight: "700",
                fontSize: "14px",
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "black", // Just text label (ACTIVE)
                  whiteSpace: "nowrap",
                  position: "absolute",
                  left: "-50%",
                  right: "-50%",
                },
              "& .Mui-disabled .MuiStepIcon-root": {
                color: "transparent", // Hollow icon (INCOMPLETE)
                stroke: "black",
                background: "transparent",
                borderRadius: "50%",
              },
              "& .MuiStepIcon-text": {
                fill: "black",
                fontSize: "13px",
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
