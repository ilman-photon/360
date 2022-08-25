import Grid from "@mui/material/Grid";
import React from "react";
import { WeekAvailability } from "../../../components/molecules/WeekAvailability/WeekAvailability";
import { LocationDistance } from "../../../components/molecules/LocationDistance /LocationDistance";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "./styledRating";

export default function ItemResult() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={5}>
        <Box className={styles.shortBio}>
          <Box className={styles.displayFlex}>
            <Box>
              <Image
                alt="doctor-image"
                src="/doctor.png"
                width={90}
                height={90}
                className={styles.profilePhoto}
              ></Image>
            </Box>
            <Box className={styles.bioContainer}>
              <Typography variant="h2">Paul Wagner, MD</Typography>
              <Typography variant="body2" className={styles.address}>
                {`51 West 51st Street, 
                        Floor 3, Suite 320
                        Midtown, New York, NY, 10019`}
              </Typography>
              <Box className={styles.ratingContainer}>
                <StyledRating value={3.5} />
                <Typography variant="body2" className={styles.phone}>
                  (857) 299-9989
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
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
