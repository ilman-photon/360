import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { viewAllAvailabilityLinkUI } from "../WeekAvailability/WeekAvailability";
import { buttonSchedule } from "../DayAvailability/DayAvailability";
import { parseScheduleDataDay } from "../../../utils/appointment";

export const ScheduleAvailability = ({
  scheduleData = ["08:30am", "09:00am", "09:30am", "09:4am"],
  onClickViewAllAvailability = () => {
    // This is intentional
  },
  OnDayClicked = () => {
    // This is intentional
  },
  currentDateIndex = 0,
}) => {
  const [schedule, setSchedule] = useState([
    "08:30am",
    "09:00am",
    "09:30am",
    "09:4am",
  ]);

  useEffect(() => {
    const scheduleParse = parseScheduleDataDay(scheduleData, currentDateIndex);

    if (scheduleParse) {
      setSchedule(scheduleParse);
    }
    console.log("scheduleData: ", scheduleParse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDateIndex]);

  function isScheduleAvailable() {
    return (
      schedule.length === 1 && schedule[0].indexOf("Next availability is") > -1
    );
  }

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          width: !isScheduleAvailable() ? "328px" : "100%",
          gridTemplateColumns: !isScheduleAvailable()
            ? "repeat(4, 1fr)"
            : "repeat(1, 1fr)",
          gap: "4px",
          justifyContent: "center",
          alignContent: "center",
          gridTemplateRows: "auto",
        }}
      >
        {schedule.map((option, idx) => {
          return buttonSchedule(option, idx, OnDayClicked, true);
        })}
      </Box>
      {viewAllAvailabilityLinkUI({ onClickViewAllAvailability })}
    </Box>
  );
};
