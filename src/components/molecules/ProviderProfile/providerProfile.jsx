import Image from "next/image";
import { Typography, Box, Link, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "../../atoms/Rating/styledRating";
import { useRouter } from "next/router";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import { TEST_ID } from "../../../utils/constants";

const renderSpecialistList = (providerData) => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        className={styles.specialistTitle}
        tabIndex={0}
      >
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
                  tabIndex={0}
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

export default function ProviderProfile({
  variant,
  showPosition,
  phoneLink,
  isShownPhoneAndRating = true,
  isShownRating = true,
  providerData = {},
  imageSize = "large",
  bioContainerClass = "",
  addressClass = "",
}) {
  const isAppointment = variant === "appointment";
  const isBio = variant === "bio";
  const isViewSchedule = variant === "viewschedule";
  const isMap = variant === "map";
  const isMobile = useMediaQuery("(max-width: 992px)");

  const router = useRouter();

  const phoneNumber = providerData.phoneNumber;

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

  function getImageContainerStyle() {
    if (imageSize === "medium") {
      return styles.imageContainerMedium;
    } else if (imageSize === "small") {
      return styles.imageContainerSmall;
    } else {
      return styles.imageContainer;
    }
  }

  function getWidtBioContainer() {
    const isNotBio = isMap || isAppointment || imageSize === "small";
    const bioWidth = !isMobile ? "20vw" : "auto";
    return isNotBio ? "unset" : bioWidth;
  }

  return (
    <Box
      className={isBio ? styles.shortBio : styles.appointment}
      sx={{ maxWidth: isMap ? "unset" : "368px" }}
    >
      <Box className={styles.displayFlex}>
        <Box className={getImageContainerStyle()}>
          <Image
            src={providerData.image || "/transparent.png"}
            data-testid={TEST_ID.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image}
            width={100}
            height={100}
            className={styles.profilePhoto}
            tabindex={"0"}
            alt="Doctor Image"
            tabIndex={0}
          ></Image>
        </Box>
        <Box
          className={[styles.bioContainer, bioContainerClass].join(" ")}
          sx={{
            width: getWidtBioContainer(),
          }}
        >
          <Typography
            variant="h2"
            fontSize={getNameFontSize()}
            data-testid={TEST_ID.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name}
            onClick={() => {
              router.push("/patient/bio");
            }}
            className={
              isAppointment || isViewSchedule
                ? styles.doctorNameAppointment
                : ""
            }
            tabindex={"0"}
          >
            {providerData.name}
          </Typography>
          {showPosition && (
            <Typography variant="h3" tabIndex={0}>
              Scripps Eyecare
            </Typography>
          )}
          <Box className={styles.detailContainer}>
            <Box>
              <Box aria-label="Doctor Address">
                <Typography
                  variant="body2"
                  className={[styles.address, addressClass].join(" ")}
                  fontSize={isViewSchedule ? "14px" : "16px"}
                  tabindex={"0"}
                >
                  {getAddress(providerData.address)}
                </Typography>
              </Box>
              {isShownPhoneAndRating && (
                <Box
                  className={
                    isBio ? styles.ratingContainer : styles.phoneContainer
                  }
                >
                  {(isBio || (isViewSchedule && isShownRating)) && (
                    <StyledRating value={parseInt(providerData.rating)} />
                  )}
                  {!phoneLink ? (
                    <Typography
                      variant="body2"
                      className={styles.phone}
                      tabindex={"0"}
                      aria-label={`phone number ${formatPhoneNumber(
                        phoneNumber
                      )}`}
                      role={isMobile && "link"}
                      onClick={() => {
                        isMobile && window.open(`tel:${phoneNumber}`);
                      }}
                    >
                      {formatPhoneNumber(phoneNumber)}
                    </Typography>
                  ) : (
                    <Link className={styles.phoneLink} tabindex={"0"}>
                      {formatPhoneNumber(phoneNumber)}
                    </Link>
                  )}
                </Box>
              )}
            </Box>
            {isBio && !isMobile && renderSpecialistList(providerData)}
          </Box>
        </Box>
      </Box>
      {isBio && isMobile && renderSpecialistList(providerData)}
    </Box>
  );
}
