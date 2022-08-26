import Grid from "@mui/material/Grid";
import React from "react";
import { WeekAvailability } from "../../../components/molecules/WeekAvailability/WeekAvailability";
import { LocationDistance } from "../../../components/molecules/LocationDistance /LocationDistance";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";

export default function ItemResult() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={5}>
        <ProviderProfile variant={"viewschedule"} />
      </Grid>
      <Grid item xs={2}>
        <LocationDistance />
      </Grid>
      <Grid item xs={5}>
        <WeekAvailability />
      </Grid>
    </Grid>
  );
}
