import Box from "@mui/material/Box";
import React from "react";
import Link from "@mui/material/Link";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./styles.module.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";

export const WeekAvailability = ({
  scheduleData = {
    monday: ["11:30am", "", "", ""],
    tuesday: ["08:00am", "10:30am", "11:00am", "3 more"],
    wednesday: ["08:30am", "10:30am", "11:30am", "5 more"],
    thursday: ["09:30am", "11:00am", "", ""],
    friday: ["09:30am", "", "", ""],
    saturday: ["09:30am", "", "", ""],
  },
}) => {
  const router = useRouter();
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
        renderUI.push(buttonSchedule(value[i], gridArea, isTypeMore));
      }
    }
    return renderUI;
  }

  function buttonSchedule(label, gridArea, isTypeMore = false) {
    if (label) {
      return (
        <Box sx={{ gridArea: gridArea, width: "90px" }}>
          <StyledButton
            theme={constants.PATIENT}
            mode={constants.PRIMARY}
            type="submit"
            size={constants.SMALL}
            gradient={false}
            className={styles.scheduleBtn}
            onClick={() => {
              //TO DO: temporary navigate, move to page when start developing functionality
              router.push("/patient/appointments");
            }}
          >
            {label}
            {isTypeMore && (
              <KeyboardArrowDownOutlinedIcon sx={{ width: "18px" }} />
            )}
          </StyledButton>
        </Box>
      );
    }
    return (
      <Box className={styles.dividerContainer}>
        <Divider className={styles.divider} />
      </Box>
    );
  }

  const constants = require("../../../utils/constants");
  return (
    <Box
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
      <Box
        sx={{
          gridArea: "linkAvability",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Link href="#" className={styles.linkAvailabelity}>
          View all Availability
        </Link>
      </Box>
    </Box>
  );
};
