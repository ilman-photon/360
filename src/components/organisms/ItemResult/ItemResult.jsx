import React from "react";
import { WeekAvailability } from "../../../components/molecules/WeekAvailability/WeekAvailability";
import { LocationDistance } from "../../../components/molecules/LocationDistance/LocationDistance";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";
import styles from "./styles.module.scss";
import { Box } from "@mui/system";

export default function ItemResult({
  onClickViewAllAvailability = () => {
    // This is intentional
  },
  keyItem = "",
}) {
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
