import { Box, Stack, Typography, Link } from "@mui/material";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import styles from "./styles.module.scss";

export default function UpcomingAppointments() {
  return (
    <Box className={styles.upcomingAppointments}>
      <Stack spacing={3.5}>
        <Typography variant="h2" className={styles.title}>
          Upcoming appointments
        </Typography>
        <Box className={styles.itemContainer}>Test</Box>
        <Box className={styles.itemContainer}>
          <ProviderProfile variant={"appointment"} showPosition phoneLink />
          <Box className={styles.getDirectionLink}>
            <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
            <Link className={styles.getDirectionLinkText}>Get directions</Link>
          </Box>
        </Box>
        <Box className={styles.itemContainer}>Test</Box>
      </Stack>
    </Box>
  );
}
