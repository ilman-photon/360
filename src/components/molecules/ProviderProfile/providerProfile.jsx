import Image from "next/image";
import { Typography, Box, Link } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "../../atoms/Rating/styledRating";
import { useRouter } from "next/router";

export default function ProviderProfile({ variant, showPosition, phoneLink }) {
  const specialist = ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"];
  const isAppointment = variant === "appointment";
  const isBio = variant === "bio";
  const isViewSchedule = variant === "viewschedule";
  const isDayAvailableView = false;
  const isMap = variant === "map";

  const router = useRouter();
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

  function getNameFontSize() {
    let size;
    if (isBio) {
      size = "32px";
    } else if (isViewSchedule) {
      size = "16px";
    } else {
      size = "18px";
    }

    return size;
  }

  return (
    <Box
      className={isBio ? styles.shortBio : styles.appointment}
      sx={{ maxWidth: isMap ? "unset" : "368px" }}
    >
      <Box className={styles.displayFlex}>
        <Box>
          <Image
            src="/doctor.png"
            width={100}
            height={100}
            className={styles.profilePhoto}
            alt="Doctor Image"
          ></Image>
        </Box>
        <Box
          className={styles.bioContainer}
          sx={{ width: isMap ? "unset" : "20vw" }}
        >
          <Typography
            variant="h2"
            fontSize={getNameFontSize()}
            onClick={() => {
              router.push("/patient/bio");
            }}
            className={
              (isAppointment || isViewSchedule) && styles.doctorNameAppointment
            }
          >
            Paul Wagner, MD
          </Typography>
          {showPosition && (
            <Typography variant="h3">Scripps Eyecare</Typography>
          )}
          <Typography
            variant="body2"
            className={styles.address}
            fontSize={isViewSchedule ? "14px" : "16px"}
          >
            {`51 West 51st Street, 
                        Floor 3, Suite 320
                        Midtown, New York, NY, 10019`}
          </Typography>
          {isDayAvailableView && (
            <Box
              className={isBio ? styles.ratingContainer : styles.phoneContainer}
            >
              {(isBio || isViewSchedule) && <StyledRating value={3.5} />}
              {!phoneLink ? (
                <Typography variant="body2" className={styles.phone}>
                  (857) 299-9989
                </Typography>
              ) : (
                <Link className={styles.phoneLink}>(857) 299-9989</Link>
              )}
            </Box>
          )}
        </Box>
      </Box>
      <Box>{isBio && renderSpecialistList()}</Box>
    </Box>
  );
}
