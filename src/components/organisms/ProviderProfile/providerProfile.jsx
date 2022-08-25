import Image from "next/image";
import { Typography, Box } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "../../atoms/Rating/styledRating";

export default function ProviderProfile() {
  const specialist = ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"];
  const renderSpecialistList = () => {
    return (
      <Box>
        <Typography variant="subtitle1" className={styles.specialistTitle}>
          Specialties and Sub-specialties:{" "}
        </Typography>
        <ul className={styles.specialistList}>
          {specialist.map((item, index) => {
            return (
              <li key={index}>
                <Typography
                  variant="body2"
                  className={index === 3 ? styles.newColumn : ""}
                >
                  {item}
                </Typography>
              </li>
            );
          })}
        </ul>
      </Box>
    );
  };

  return (
    <Box className={styles.shortBio}>
      <Box className={styles.displayFlex}>
        <Box>
          <Image
            src="/doctor.png"
            width={90}
            height={90}
            className={styles.profilePhoto}
            alt="Doctor Image"
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
      <Box>{renderSpecialistList()}</Box>
    </Box>
  );
}
