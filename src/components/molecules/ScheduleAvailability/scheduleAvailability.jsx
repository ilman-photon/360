import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { viewAllAvailabilityLinkUI } from "../WeekAvailability/WeekAvailability";
import { buttonSchedule } from "../DayAvailability/DayAvailability";
import { parseScheduleDataDay } from "../../../utils/appointment";

export const ScheduleAvailability = ({
  scheduleData = [],
  onClickViewAllAvailability = () => {
    // This is intentional
  },
  OnDayClicked = () => {
    // This is intentional
  },
  currentDateIndex = 0,
  currentDate = "",
}) => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const scheduleParse = parseScheduleDataDay(scheduleData, currentDateIndex);
    if (scheduleParse) {
      setSchedule(scheduleParse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDateIndex]);

  function isScheduleAvailable() {
    return (
      schedule.length === 1 && schedule[0].indexOf("Next availability is") > -1
    );
  }

  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }
  const stringCurrentDate = isValidDate(currentDate)
    ? currentDate.toLocaleDateString()
    : "";
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
          return buttonSchedule(
            option,
            idx,
            OnDayClicked,
            stringCurrentDate,
            true
          );
        })}
      </Box>
      {viewAllAvailabilityLinkUI({ onClickViewAllAvailability })}
    </Box>
  );
};
