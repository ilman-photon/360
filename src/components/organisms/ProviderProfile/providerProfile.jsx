import Image from "next/image";
import { Typography, Box } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "../../atoms/Rating/styledRating";

export default function ProviderProfile() {
  return (
    <Box className={styles.shortBio}>
      <Box className={styles.displayFlex}>
        <Box>
          <Image
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
      <Box>
        <Box>
          <Typography variant="subtitle1" className={styles.specialistTitle}>
            Specialties and Sub-specialties:{" "}
          </Typography>
          <ul className={styles.specialistList}>
            <li>
              <Typography variant="body2">Opthometry</Typography>
            </li>
            <li>
              <Typography variant="body2">Opthalmology</Typography>
            </li>
            <li>
              <Typography variant="body2">Catarac</Typography>
            </li>
            <li className={styles.newColumn}>
              <Typography variant="body2">Glaucoma</Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
