import Box from "@mui/material/Box";
import React from "react";
import Link from "@mui/material/Link";
import { StyledButton } from "../../atoms/Button/button";
import styles from "../DayAvailability/styles.module.scss";
import stylesWeek from "../WeekAvailability/styles.module.scss";
import { useRouter } from "next/router";
import { viewAllAvailabilityLinkUI } from "../WeekAvailability/WeekAvailability";
import { buttonSchedule } from "../DayAvailability/DayAvailability";

export const ScheduleAvailability = ({
  scheduleData = ["08:30am", "09:00am", "09:30am", "09:4am"],
  onClickViewAllAvailability = () => {
    // This is intentional
  },
  OnDayClicked = () => {
    // This is intended
  },
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          width: "328px",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "4px",
          justifyContent: "center",
          alignContent: "center",
          gridTemplateRows: "auto",
        }}
      >
        {scheduleData.map((option, idx) => {
          return buttonSchedule(option, idx, OnDayClicked);
        })}
      </Box>
      {viewAllAvailabilityLinkUI({ onClickViewAllAvailability })}
    </Box>
  );
};
