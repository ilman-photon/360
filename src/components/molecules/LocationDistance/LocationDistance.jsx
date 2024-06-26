import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import { colors } from "../../../styles/theme";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";

export const LocationDistance = ({
  isDesktop = true,
  distance = "",
  onGetDirection = () => {
    // This is intentional
  },
}) => {
  const iconSize = isDesktop ? 23 : 25;
  return (
    <Box
      sx={{
        display: isDesktop ? "grid" : "block",
        gridTemplateColumns: isDesktop ? "repeat(2, 1fr)" : "none",
        width: isDesktop ? "auto" : "80px",
        marginLeft: isDesktop ? "0px" : "15px",
        marginTop: isDesktop ? "10px" : "0px",
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
        className={styles.distanceLabelWarpper}
      >
        {isDesktop && (
          <LocationOnOutlinedIcon sx={{ width: 16, color: colors.darkGreen }} />
        )}
        <Typography
          sx={{ display: "block" }}
          component="span"
          variant="body2"
          color="text.primary"
          className={styles.distanceLabel}
          tabIndex={"0"}
          aria-label={`provider distance is ${distance}`}
        >
          {distance}
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
          marginTop: isDesktop ? "40px" : "60px",
        }}
      >
        <Button
          role={"button"}
          onClick={onGetDirection}
          sx={{
            padding: 0,
            cursor: "pointer",
          }}
          aria-label={"Direction button"}
          className={styles.directionButton}
        >
          <DirectionsOutlinedIcon
            aria-label={"Get Direction"}
            sx={{
              width: iconSize,
              height: iconSize,
              color: colors.darkGreen,
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};
