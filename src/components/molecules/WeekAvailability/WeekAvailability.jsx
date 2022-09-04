import Box from "@mui/material/Box";
import React from "react";
import Link from "@mui/material/Link";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./styles.module.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Divider, Typography } from "@mui/material";
import constants from "../../../utils/constants";

export function viewAllAvailabilityLinkUI({
  onClickViewAllAvailability = () => {
    // This is intentional
  },
}) {
  return (
    <Box
      sx={{
        gridArea: "linkAvability",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
      className={styles.linkWrapper}
    >
      <Link
        className={styles.linkAvailabelity}
        data-testid={constants.TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll}
        onClick={onClickViewAllAvailability}
      >
        View all Availability
      </Link>
    </Box>
  );
}

export const WeekAvailability = ({
  scheduleData = {
    monday: ["2022-08-31T04:30:00.904Z", "", "", ""],
    tuesday: [
      "2022-08-31T01:00:00.904Z",
      "2022-08-31T03:30:00.904Z",
      "2022-08-31T04:00:00.904Z",
      "3 more",
    ],
    wednesday: [
      "2022-08-31T01:30:00.904Z",
      "2022-08-31T03:30:00.904Z",
      "2022-08-31T04:30:00.904Z",
      "5 more",
    ],
    thursday: ["2022-08-31T02:30:00.904Z", "2022-08-31T04:00:00.904Z", "", ""],
    friday: ["2022-08-31T02:30:00.904Z", "", "", ""],
    saturday: ["2022-08-31T02:30:00.904Z", "", "", ""],
  },
  onClickViewAllAvailability = () => {
    // This is intentional
  },
  OnDayClicked = () => {
    // This is intended
  },
  keyWeek = "",
}) => {
  function renderScheduleData() {
    let renderUI = [];
    for (const [key, value] of Object.entries(scheduleData)) {
      for (let i = 0; i < value.length; i++) {
        let gridArea = `${key}Schedule${i}`;
        let isTypeMore = false;
        if (value[i].indexOf("more") > -1) {
          gridArea = `more${key}Schedule`;
          isTypeMore = true;
        }
        renderUI.push(
          buttonSchedule(
            value[i],
            gridArea,
            isTypeMore,
            `${keyWeek}-${i}-${key}-schedule-button`
          )
        );
      }
    }
    return renderUI;
  }

  function buttonSchedule(label, gridArea, isTypeMore = false, index = "") {
    if (label) {
      function isValidDate(d) {
        return d instanceof Date && !isNaN(d);
      }
      const date = new Date(label);
      const labelTime = isValidDate(date)
        ? date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
        : label;
      return (
        <Box
          key={index}
          sx={{ gridArea: gridArea, width: "90px" }}
          className={styles.buttonWrapper}
        >
          <StyledButton
            theme={constants.PATIENT}
            mode={constants.PRIMARY}
            type="submit"
            size={constants.SMALL}
            gradient={false}
            className={styles.scheduleBtn}
            onClick={() => {
              if (labelTime.indexOf("more") > -1) {
                onClickViewAllAvailability();
              } else {
                OnDayClicked(label);
              }
            }}
          >
            <Typography className={styles.scheduleBtnLabel}>
              {labelTime}
              {isTypeMore && (
                <KeyboardArrowDownOutlinedIcon sx={{ width: "18px" }} />
              )}
            </Typography>
          </StyledButton>
        </Box>
      );
    }
    return (
      <Box key={index} className={styles.dividerContainer}>
        <Divider className={styles.divider} />
      </Box>
    );
  }

  return (
    <Box
      key={keyWeek}
      sx={{
        display: "grid",
        width: 598,
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 1,
        justifyContent: "center",
        alignContent: "center",
        gridTemplateRows: "auto",
        gridTemplateAreas: `"mondaySchedule0 tuesdaySchedule0 wednesdaySchedule0 thursdaySchedule0 fridaySchedule0 saturdaySchedule0"
                            "mondaySchedule1 tuesdaySchedule1 wednesdaySchedule1 thursdaySchedule1 fridaySchedule1 saturdaySchedule1"
                            "mondaySchedule2 tuesdaySchedule2 wednesdaySchedule2 thursdaySchedule2 fridaySchedule2 saturdaySchedule2"
                            "moremondaySchedule moretuesdaySchedule morewednesdaySchedule morethursdaySchedule morefridaySchedule moresaturdaySchedule"
                            "linkAvability linkAvability linkAvability linkAvability linkAvability linkAvability"`,
      }}
    >
      {renderScheduleData()}
      {viewAllAvailabilityLinkUI({ onClickViewAllAvailability })}
    </Box>
  );
};
