import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsIcon from "@mui/icons-material/Directions";
export const LocationDistance = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 1,
        justifyContent: "center",
        alignContent: "center",
        p: 1,
        m: 1,
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
        <LocationOnIcon sx={{ width: 30, height: 30, m: 1 }} />
        <Typography
          sx={{ display: "block" }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          10 ml
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
        }}
      >
        <DirectionsIcon sx={{ width: 50, height: 50 }} />
      </Box>
    </Box>
  );
};
