import { Link, Typography, Stack, Box, Divider } from "@mui/material";
import styles from "./styles.module.scss";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";

export default function BiographyDetails({ profileData }) {
  return (
    <Box className={styles.detailedBio}>
      <Box className={styles.stickyMenu}>
        <Box className={styles.stickyMenuContainer}>
          <Link className={styles.menuTextSelected}>About</Link>
          <Link className={styles.menuText}>Locations</Link>
          <Link className={styles.menuText}>Insurances</Link>
          <Link className={styles.menuText}>Education</Link>
        </Box>
      </Box>
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
      <Stack spacing={3} className={styles.detailedBioContainer}>
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
          <Box className={styles.map}></Box>
          <Box className={styles.mapAddressContainer}>
            <Typography variant="body2" className={styles.mapAddress}>
              {`51 West 51st Street,
                            Floor 3, Suite 320\n
                            Midtown, New York, NY, 10019`}
            </Typography>
            <Box className={styles.getDirectionLinkContainer}>
              <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
              <Link className={styles.getDirectionLink}>Get directions</Link>
            </Box>
          </Box>
        </Box>
        <Typography variant="h3">Languages</Typography>
        <Typography variant="body2">English, Spanish</Typography>
        <Typography variant="h3">In-network insurances</Typography>
        <Box className={styles.insurancesContainer}>
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
                16+ more in-network insurances{" "}
                <Link className={styles.viewAllLink}>View All</Link>
              </Typography>
            </li>
          </ul>
        </Box>

        <Typography variant="h3">Education</Typography>
        <Box className={styles.educationContainer}>
          <Typography variant="body2">
            {"New England College of Optometry, Doctor of Optometry"}
          </Typography>
          <Typography variant="body2">
            {"University of California, San Diego (Bachelor's)"}
          </Typography>
        </Box>

        <Typography variant="h3">Memberships and Afilliations</Typography>
        <Box className={styles.educationContainer}>
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
