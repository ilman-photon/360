import Box from "@mui/material/Box";
import React from "react";
import Link from "@mui/material/Link";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./styles.module.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import constants from "../../../utils/constants";
import stylesWeek from "../WeekAvailability/styles.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const DayAvailability = ({
  timeInWeek = "Sep 19 - Sep 24",
  scheduleData = {
    "Mon, Sep 19": [
      "08:30am",
      "09:30am",
      "09:45am",
      "10:00am",
      "10:30am",
      "11:00am",
      "11:30am",
      "11:45am",
      "12:00pm",
      "12:30pm",
      "1:30pm",
      "2:00pm",
      "2:30pm",
      "3:00pm",
    ],
    "Tue, Sep 20": [],
    "Wed, Sep 21": [],
    "Thu, Sep 22": [
      "08:30am",
      "09:30am",
      "09:45am",
      "10:00am",
      "10:30am",
      "11:00am",
      "11:30am",
      "11:45am",
      "12:00pm",
      "12:30pm",
      "1:30pm",
      "2:00pm",
      "2:30pm",
      "3:00pm",
    ],
    "Fri, Sep 23": [
      "08:30am",
      "09:30am",
      "09:45am",
      "10:00am",
      "10:30am",
      "11:00am",
      "11:30am",
      "11:45am",
      "12:00pm",
      "12:30pm",
      "1:30pm",
      "2:00pm",
      "2:30pm",
      "3:00pm",
    ],
    "Sat, Sep 24": [
      "08:30am",
      "09:30am",
      "09:45am",
      "10:00am",
      "10:30am",
      "11:00am",
      "11:30am",
    ],
  },
  OnDayClicked = () => {
    // This is intended
  }
}) => {
  // const router = useRouter();
  function renderScheduleData() {
    let renderUI = [];
    for (const [key, value] of Object.entries(scheduleData)) {
      if (value && value.length > 0) {
        renderUI.push(
          <Box className={styles.scheduleContainer}>
            <Typography className={styles.scheduleTitle}>{key}</Typography>
            {renderTimeSchedule(value)}
          </Box>
        );
      } else {
        renderUI.push(
          <Box
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

  function buttonSchedule(label, idx) {
    return (
      <Box key={idx} sx={{ width: "78px" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          size={constants.SMALL}
          gradient={false}
          className={[stylesWeek.scheduleBtn, styles.scheduleBtn].join(" ")}
          onClick={() => OnDayClicked(label)}
        >
          {label}
        </StyledButton>
      </Box>
    );
  }

  function renderTimeSchedule(value) {
    return (
      <Box
        sx={{
          display: "grid",
          width: 410,
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "4px",
          justifyContent: "center",
          alignContent: "center",
          gridTemplateRows: "auto",
        }}
      >
        {value.map((option, idx) => {
          return buttonSchedule(option, idx);
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
