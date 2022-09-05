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
  OnDayClicked = () => {
    // This is intentional
  },
  keyItem = "",
  isDesktop = true,
  providerData = {},
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
          <ProviderProfile
            variant={"viewschedule"}
            providerData={providerData}
          />
        </Box>
        <Box sx={{ gridArea: "locationDistance" }}>
          <LocationDistance />
        </Box>
        <Box sx={{ gridArea: "weekAvailability" }}>
          <WeekAvailability
            onClickViewAllAvailability={() => {
              onClickViewAllAvailability(providerData);
            }}
            keyWeek={keyItem}
            OnDayClicked={OnDayClicked}
            scheduleData={providerData?.availability}
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
          <ProviderProfile
            variant={"viewschedule"}
            isShownRating={false}
            providerData={providerData}
          />
          <LocationDistance isDesktop={isDesktop} />
        </Stack>
        <ScheduleAvailability
          onClickViewAllAvailability={() => {
            onClickViewAllAvailability(providerData);
          }}
          OnDayClicked={OnDayClicked}
        />
      </Stack>
    );
  }

  return <>{isDesktop ? renderDekstopView() : renderMobileView()}</>;
}
