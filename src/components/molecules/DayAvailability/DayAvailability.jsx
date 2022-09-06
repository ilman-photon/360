import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./styles.module.scss";
import { Divider, Typography } from "@mui/material";
import constants from "../../../utils/constants";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  parseDateWeekList,
  parseScheduleDataWeekOverlay,
  timeInWeekLabel,
} from "../../../utils/appointment";

export const buttonSchedule = (
  label = "",
  idx,
  OnDayClicked = () => {
    // This is intended
  },
  date = "",
  isScheduleAvailability = false
) => {
  const isNextAvailabilityLabel =
    !isScheduleAvailability ||
    (isScheduleAvailability && label.indexOf("Next availability is") < 0);
  const dateTime = !isNextAvailabilityLabel
    ? new Date(`${date} ${label.toUpperCase().replace(/(AM|PM)/, " $1")}`)
    : "";
  return (
    <Box
      key={idx}
      sx={{ width: !isScheduleAvailability ? "78px" : "100%" }}
      className={styles.scheduleBtnWarpper}
    >
      <StyledButton
        theme={constants.PATIENT}
        mode={constants.PRIMARY}
        size={constants.SMALL}
        gradient={false}
        className={
          !isScheduleAvailability ? styles.scheduleBtn : styles.scheduleAvailBtn
        }
        onClick={() => {
          if (isNextAvailabilityLabel) {
            OnDayClicked(dateTime);
          }
        }}
      >
        {label}
      </StyledButton>
    </Box>
  );
};

export const DayAvailability = ({
  rangeDate = {
    startDate: "",
    endDate: "",
  },
  scheduleData = {},
  isDesktop = false,
  OnDayClicked = () => {
    // This is intended
  },
}) => {
  const [schedule, setSchedule] = useState({});
  const [timeInWeek, setTimeInWeek] = useState("");
  const [dateWeekList, setDateWeekList] = useState([]);

  useEffect(() => {
    const scheduleParse = parseScheduleDataWeekOverlay(scheduleData);
    if (scheduleParse) {
      setSchedule(scheduleParse);
      setDateWeekList(parseDateWeekList(scheduleData));
    }

    setTimeInWeek(timeInWeekLabel(rangeDate.startDate, rangeDate.endDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduleData]);

  function renderScheduleData() {
    let renderUI = [];
    for (const [index, [key, value]] of Object.entries(
      Object.entries(schedule)
    )) {
      if (value && value.length > 0) {
        renderUI.push(
          <Box className={styles.scheduleContainer} key={index}>
            <Typography className={styles.scheduleTitle}>{key}</Typography>
            {renderTimeSchedule(value, index)}
          </Box>
        );
      } else {
        renderUI.push(
          <Box
            key={index}
            className={[
              styles.scheduleContainer,
              styles.noScheduleContainer,
            ].join(" ")}
          >
            <Typography className={styles.scheduleTitle}>{key}</Typography>
            <Typography className={styles.noSchedule}>
              No availability
            </Typography>
          </Box>
        );
      }
    }
    return renderUI;
  }

  function renderTimeSchedule(value, index) {
    const column = isDesktop ? 5 : 4;
    return (
      <Box
        sx={{
          display: "grid",
          width: isDesktop ? 410 : 330,
          gridTemplateColumns: `repeat(${column}, 1fr)`,
          gap: "4px",
          justifyContent: "center",
          alignContent: "center",
          gridTemplateRows: "auto",
        }}
      >
        {value.map((option, idx) => {
          return buttonSchedule(option, idx, OnDayClicked, dateWeekList[index]);
        })}
      </Box>
    );
  }

  return (
    <Box>
      <Box className={styles.scheduleTimeContainer}>
        <Typography className={styles.scheduleTimeTitle}>
          {timeInWeek}
        </Typography>
        <Box className={styles.iconTimeContainer}>
          <ArrowBackIosIcon className={styles.iconSchedule} />
          <ArrowForwardIosIcon className={styles.iconSchedule} />
        </Box>
      </Box>
      <Divider className={styles.dividerSchedule} />
      {renderScheduleData()}
    </Box>
  );
};
