import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./styles.module.scss";
import { Divider, Stack, Typography } from "@mui/material";
import constants, { TEST_ID } from "../../../utils/constants";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  getDates,
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
    isScheduleAvailability && label.indexOf("Next availability is") > -1;
  const dateTime =
    !isScheduleAvailability || !isNextAvailabilityLabel
      ? new Date(`${date} ${label.toUpperCase().replace(/(AM|PM)/, " $1")}`)
      : "";
  return (
    <Box
      key={idx}
      sx={{ width: !isScheduleAvailability ? "78px" : "100%" }}
      className={styles.scheduleBtnWarpper}
    >
      <StyledButton
        data-testid={TEST_ID.APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.timeslotButton}
        theme={constants.PATIENT}
        mode={constants.PRIMARY}
        size={constants.SMALL}
        gradient={false}
        className={
          !isScheduleAvailability ? styles.scheduleBtn : styles.scheduleAvailBtn
        }
        onClick={() => {
          if (!isScheduleAvailability || !isNextAvailabilityLabel) {
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
  onNextScheduleClicked = () => {
    // This is intentional
  },
  onPrevScheduleClicked = () => {
    // This is intentional
  },
}) => {
  const [schedule, setSchedule] = useState({});
  const [timeInWeek, setTimeInWeek] = useState("");
  const [dateWeekList, setDateWeekList] = useState([]);
  const [dateList, setDateList] = useState({
    dateRange: [],
    dateListName: [],
  });

  useEffect(() => {
    const scheduleParse = parseScheduleDataWeekOverlay(scheduleData);
    if (scheduleParse) {
      setSchedule(scheduleParse);
      setDateWeekList(parseDateWeekList(scheduleData));
    }

    const dates = getDates(
      new Date(rangeDate.startDate),
      new Date(rangeDate.endDate),
      true
    );
    if (rangeDate.startDate && rangeDate.endDate) {
      setDateList(dates);
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
          <ArrowBackIosIcon
            className={styles.iconSchedule}
            data-testid={
              TEST_ID.APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.previousWeekButton
            }
            onClick={() => {
              const date = new Date(dateList.dateRange[0]);
              date.setDate(date.getDate() - 7);
              onPrevScheduleClicked("overlay", date);
            }}
          />
          <ArrowForwardIosIcon
            className={styles.iconSchedule}
            data-testid={
              TEST_ID.APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.nextWeekButton
            }
            sx={{ marginLeft: "10px" }}
            onClick={() => {
              const date = new Date(dateList.dateRange[5]);
              date.setDate(date.getDate() + 7);
              onNextScheduleClicked("overlay", date);
            }}
          />
        </Box>
      </Box>
      <Divider className={styles.dividerSchedule} />
      <Stack
        spacing={3}
        data-testid={
          TEST_ID.APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.scheduleContainer
        }
      >
        {renderScheduleData()}
      </Stack>
    </Box>
  );
};
