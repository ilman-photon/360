import Box from "@mui/material/Box";
import React from "react";
import Link from "@mui/material/Link";
import { StyledButton } from "../../atoms/Button/button";
export const WeekAvailability = () => {
  const constants = require("../../../utils/constants");
  return (
    <Box
      sx={{
        display: "grid",
        width: 600,
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 1,
        justifyContent: "center",
        alignContent: "center",
        p: 2,
        m: 2,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"mondayScheduleOne tuesdayScheduleOne wenesdayScheduleOne thursdayScheduleOne fridayScheduleOne saturdayScheduleOne"
        "mondayScheduleTwo tuesdayScheduleTwo wenesdayScheduleTwo thursdayScheduleTwo fridayScheduleTwo saturdayScheduleTwo"
        "mondayScheduleThree tuesdayScheduleThree  wenesdayScheduleThree thursdayScheduleThree fridayScheduleThree saturdayScheduleThree"
        "moremondaySchedule moretuesdaySchedule morewenesdaySchedule morethursdaySchedule morefridaySchedule moresaturdaySchedule"
        "linkAvability linkAvability linkAvability linkAvability linkAvability linkAvability"`,
      }}
    >
      <Box sx={{ gridArea: "tuesdayScheduleOne" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>
      <Box sx={{ gridArea: "wenesdayScheduleOne" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>
      <Box sx={{ gridArea: "fridayScheduleThree" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>
      <Box sx={{ gridArea: "fridayScheduleOne" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>
      <Box sx={{ gridArea: "saturdayScheduleOne" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>

      <Box sx={{ gridArea: "tuesdayScheduleTwo" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>
      <Box sx={{ gridArea: "wenesdayScheduleTwo" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>
      <Box sx={{ gridArea: "thursdayScheduleTwo" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>

      <Box sx={{ gridArea: "tuesdayScheduleThree" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>
      <Box sx={{ gridArea: "wenesdayScheduleThree" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>

      <Box sx={{ gridArea: "moretuesdaySchedule" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>
      <Box sx={{ gridArea: "morewenesdaySchedule" }}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="submit"
          size={constants.SMALL}
          gradient={false}
        >
          13.25 Am
        </StyledButton>
      </Box>
      <Box
        sx={{
          gridArea: "linkAvability",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        <Link href="#">View all Availability</Link>
      </Box>
    </Box>
  );
};
