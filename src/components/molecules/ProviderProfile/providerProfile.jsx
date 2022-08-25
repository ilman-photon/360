import Image from "next/image";
import { Typography, Box, Link } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "../../atoms/Rating/styledRating";

export default function ProviderProfile({ variant, showPosition, phoneLink }) {
  const specialist = ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"];
  const isAppointment = variant === "appointment";
  const isBio = variant === "bio";
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
    <Box className={isBio ? styles.shortBio : styles.appointment}>
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
          <Typography
            variant="h2"
            fontSize={isBio ? "32px" : "18px"}
            className={isAppointment && styles.doctorNameAppointment}
          >
            Paul Wagner, MD
          </Typography>
          {showPosition && (
            <Typography variant="h3">Scripps Eyecare</Typography>
          )}
          <Typography variant="body2" className={styles.address}>
            {`51 West 51st Street, 
                        Floor 3, Suite 320
                        Midtown, New York, NY, 10019`}
          </Typography>
          <Box
            className={isBio ? styles.ratingContainer : styles.phoneContainer}
          >
            {isBio && <StyledRating value={3.5} />}
            {!phoneLink ? (
              <Typography variant="body2" className={styles.phone}>
                (857) 299-9989
              </Typography>
            ) : (
              <Link className={styles.phoneLink}>(857) 299-9989</Link>
            )}
          </Box>
        </Box>
      </Box>
      <Box>{!isAppointment && renderSpecialistList()}</Box>
    </Box>
  );
}
