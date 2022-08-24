import { Link, Typography, Stack, Box, Divider } from "@mui/material";
import styles from "./styles.module.scss";

export default function DetailedBio({ profileData }) {
  return (
    <Box className={styles.detailedBio}>
      <Box className={styles.menu}>
        <Divider />
        <Box className={styles.menuContainer}>
          <Link className={styles.menuText}>About</Link>
          <Link className={styles.menuText}>Locations</Link>
          <Link className={styles.menuText}>Insurances</Link>
          <Link className={styles.menuText}>Education</Link>
        </Box>
        <Divider />
      </Box>
      <Stack spacing={3}>
        <Typography variant="h3">About Paul Wagner, MD</Typography>
        <Typography variant="body2">
          {
            "Dr. Esfandiari's current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari's knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more"
          }
        </Typography>
        <Typography variant="h3">Gender</Typography>
        <Typography variant="body2">Male</Typography>
        <Typography variant="h3">Locations</Typography>
        <Box className={styles.mapContainer}>
          <Box
            width={471}
            height={270}
            sx={{ backgroundColor: "skyBlue" }}
          ></Box>
          <Box sx={{ marginLeft: "24px" }}>
            <Typography variant="body2" width={362}>
              {`51 West 51st Street,
                            Floor 3, Suite 320
                            Midtown, New York, NY, 10019`}
            </Typography>
            <Link>Get directions</Link>
          </Box>
        </Box>
        <Typography variant="h3">Languages</Typography>
        <Typography variant="body2">English, Spanish</Typography>
        <Typography variant="h3">In-network insurances</Typography>
        <Box display={"flex"}>
          <ul className={styles.insurancestList}>
            <li>
              <Typography variant="body2">Blue Cross Blue Shield</Typography>
            </li>
            <li>
              <Typography variant="body2">Cigna</Typography>
            </li>
            <li className={styles.newColumn}>
              <Typography variant="body2">UnitedHeathcare</Typography>
            </li>
            <li>
              <Typography variant="body2">
                16+ more in-network insurances <Link>View All</Link>
              </Typography>
            </li>
          </ul>
        </Box>

        <Typography variant="h3">Education</Typography>
        <Box>
          <Typography variant="body2">
            {"New England College of Optometry, Doctor of Optometry"}
          </Typography>
          <Typography variant="body2">
            {"University of California, San Diego (Bachelor's)"}
          </Typography>
        </Box>

        <Typography variant="h3">Memberships and Afilliations</Typography>
        <Box>
          <Typography variant="body2">
            {"New England College of Optometry, Doctor of Optometry"}
          </Typography>
          <Typography variant="body2">
            {"University of California, San Diego (Bachelor's)"}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
