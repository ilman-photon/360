import * as React from "react";
import { Stack, Typography, Button, Grid, Link } from "@mui/material";
import styles from "./Style.module.scss";
import { useTranslation } from "next-i18next";
import AccountCard from "../../molecules/AccountCard/accountCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import constants from "../../../utils/constants";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Image from "next/image";
import { faker } from "@faker-js/faker";

export default function AppointmentLocation() {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  return (
    <AccountCard
      titleIcon={<LocationOnIcon />}
      title={t("location")}
      //   isEditing={isEditing}
      // OnEditClicked={OnEditClicked}
      actionContent={
        <Button
          // onClick={OnEditClicked}
          variant="text"
          className={styles.editButton}
        >
          <EditOutlinedIcon sx={{ width: 20, height: 20 }} />
          <div type="link" style={{ marginLeft: 4, color: "#008294" }}>
            Edit
          </div>
        </Button>
      }
    >
      <Stack spacing={2}>
        <Grid container>
          <Grid item xs={6} p={0}>
            <Image
              src={faker.image.imageUrl(275, 173)}
              width={122}
              height={122}
              style={{ borderRadius: "50%" }}
              alt="profile"
            />
          </Grid>
          <Grid item xs={6} p={0}>
            <Typography
              variant="h4"
              style={{ color: "#003B4A", fontSize: "18px" }}
              aria-label={"Myself"}
            >
              {t("myself")}
            </Typography>
            5755 Burke Centre Parkway Burke, VA 22015-2264
            <Link>(703) 250-9000</Link>
          </Grid>
        </Grid>
      </Stack>
    </AccountCard>
  );
}
