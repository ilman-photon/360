import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import { colors } from "../../../styles/theme";
import styles from "./styles.module.scss";

export const LocationDistance = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyContent: "center",
        alignContent: "center",
        gridTemplateRows: "auto",
        gridTemplateAreas: `"distanceDoctor"
        "directoryMap"`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gridArea: "distanceDoctor",
        }}
      >
        <LocationOnOutlinedIcon sx={{ width: 16, color: colors.darkGreen }} />
        <Typography
          sx={{ display: "block" }}
          component="span"
          variant="body2"
          color="text.primary"
          className={styles.distanceLabel}
        >
          10 mi
        </Typography>
      </Box>
      <Box
        sx={{
          gridArea: "directoryMap",
          display: "flex",
          p: 1,
          m: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <DirectionsOutlinedIcon
          sx={{ width: 18, height: 18, color: colors.darkGreen }}
        />
      </Box>
    </Box>
  );
};
