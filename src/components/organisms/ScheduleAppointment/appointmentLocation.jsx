import * as React from "react";
import { Stack, Typography, Button, Grid, Link, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import AccountCard from "../../molecules/AccountCard/accountCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import { styles } from "./style";

export default function AppointmentLocation() {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  return (
    <Box mb={2}>
      <AccountCard
        titleIcon={<LocationOnIcon />}
        title={t("location")}
        textStyle={{ fontWeight: "700" }}
        isAppoinment={true}
        actionContent={
          <Button variant="text" className={styles.editButton}>
            <EditOutlinedIcon sx={{ width: 20, height: 20 }} />
            <div type="link" style={styles.editLink}>
              Edit
            </div>
          </Button>
        }
      >
        <Stack spacing={2}>
          <Grid container>
            <Grid p={0}>
              <Image
                src={faker.image.imageUrl(275, 173)}
                width={105}
                height={105}
                style={{ borderRadius: "50%" }}
                alt="profile"
              />
            </Grid>
            <Grid pl={2}>
              <Typography
                variant="h4"
                style={{ ...styles.detailText, ...styles.boldText }}
                aria-label={"Myself"}
              >
                Dr. Sonha Nguyen
              </Typography>
              <Typography
                variant="regularBold"
                style={styles.detailText}
                aria-label={"Myself"}
              >
                5755 Burke Centre Parkway
                <br />
                Burke, VA 22015-2264
              </Typography>
              <Typography
                variant="h4"
                style={styles.detailText}
                aria-label={"Myself"}
              >
                <Link style={styles.linkText}>(703) 250-9000</Link>
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </AccountCard>
    </Box>
  );
}
