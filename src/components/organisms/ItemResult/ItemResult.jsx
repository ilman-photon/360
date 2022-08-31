import React from "react";
import { WeekAvailability } from "../../../components/molecules/WeekAvailability/WeekAvailability";
import { LocationDistance } from "../../../components/molecules/LocationDistance/LocationDistance";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";
import styles from "./styles.module.scss";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { ScheduleAvailability } from "../../molecules/ScheduleAvailability/scheduleAvailability";

export default function ItemResult({
  onClickViewAllAvailability = () => {
    // This is intentional
  },
  keyItem = "",
  isDesktop = true,
}) {
  function renderDekstopView() {
    return (
      <Box
        key={keyItem}
        sx={{
          marginTop: "16px",
          display: "grid",
          gap: "6px",
          gridTemplateColumns: "388px 100px 598px",
          gridTemplateRows: "auto",
          gridTemplateAreas: `"providerProvile locationDistance weekAvailability"`,
        }}
        className={styles.itemContainer}
      >
        <Box sx={{ gridArea: "providerProvile" }}>
          <ProviderProfile variant={"viewschedule"} />
        </Box>
        <Box sx={{ gridArea: "locationDistance" }}>
          <LocationDistance />
        </Box>
        <Box sx={{ gridArea: "weekAvailability" }}>
          <WeekAvailability
            onClickViewAllAvailability={onClickViewAllAvailability}
            keyWeek={keyItem}
          />
        </Box>
      </Box>
    );
  }

  function renderMobileView() {
    return (
      <Stack
        height={"252px"}
        marginBottom={"8px"}
        className={styles.stackContainer}
      >
        <Stack direction={"row"}>
          <ProviderProfile variant={"viewschedule"} isShownRating={false} />
          <LocationDistance isDesktop={isDesktop} />
        </Stack>
        <ScheduleAvailability
          onClickViewAllAvailability={onClickViewAllAvailability}
        />
      </Stack>
    );
  }

  return <>{isDesktop ? renderDekstopView() : renderMobileView()}</>;
}
