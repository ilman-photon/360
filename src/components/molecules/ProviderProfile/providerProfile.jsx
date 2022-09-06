import Image from "next/image";
import { Typography, Box, Link } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "../../atoms/Rating/styledRating";
import { useRouter } from "next/router";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";

export default function ProviderProfile({
  variant,
  showPosition,
  phoneLink,
  isShownPhoneAndRating = true,
  isShownRating = true,
  providerData = {},
  imageSize = "large",
}) {
  const isAppointment = variant === "appointment";
  const isBio = variant === "bio";
  const isViewSchedule = variant === "viewschedule";
  const isMap = variant === "map";

  const router = useRouter();

  const phoneNumber = providerData.phoneNumber;
  const renderSpecialistList = () => {
    return (
      <Box>
        <Typography variant="subtitle1" className={styles.specialistTitle}>
          Specialties and Sub-specialties:{" "}
        </Typography>
        <ul className={styles.specialistList}>
          {providerData.specialties &&
            providerData.specialties.map((item, index) => {
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

  const getAddress = (address) => {
    if (!address) return;
    return (
      <>
        {address.addressLine1}
        <br />
        {address.addressLine2}
        <br />
        {address.city}, {address.state}, {address.zipcode}
      </>
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
            src={providerData.image || "/transparent.png"}
            width={imageSize === "small" ? 50 : 100}
            height={imageSize === "small" ? 50 : 100}
            className={styles.profilePhoto}
            alt="Doctor Image"
          ></Image>
        </Box>
        <Box
          className={styles.bioContainer}
          sx={{ width: isMap || isViewSchedule ? "unset" : "20vw" }}
        >
          <Typography
            variant="h2"
            fontSize={getNameFontSize()}
            onClick={() => {
              router.push("/patient/bio");
            }}
            className={
              isAppointment || isViewSchedule
                ? styles.doctorNameAppointment
                : ""
            }
          >
            {providerData.name}
          </Typography>
          {showPosition && (
            <Typography variant="h3">Scripps Eyecare</Typography>
          )}
          <Typography
            variant="body2"
            className={styles.address}
            fontSize={isViewSchedule ? "14px" : "16px"}
          >
            {getAddress(providerData.address)}
          </Typography>
          {isShownPhoneAndRating && (
            <Box
              className={isBio ? styles.ratingContainer : styles.phoneContainer}
            >
              {(isBio || (isViewSchedule && isShownRating)) && (
                <StyledRating value={parseInt(providerData.rating)} />
              )}
              {!phoneLink ? (
                <Typography variant="body2" className={styles.phone}>
                  {formatPhoneNumber(phoneNumber)}
                </Typography>
              ) : (
                <Link className={styles.phoneLink}>
                  {formatPhoneNumber(phoneNumber)}
                </Link>
              )}
            </Box>
          )}
        </Box>
      </Box>
      <Box>{isBio && renderSpecialistList()}</Box>
    </Box>
  );
}
