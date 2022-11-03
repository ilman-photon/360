import { Typography, Box, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "../../atoms/Rating/styledRating";
import { useRouter } from "next/router";
import { TEST_ID } from "../../../utils/constants";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";
import ImageFallback from "../../atoms/Image/image";

const renderSpecialistList = (providerData) => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        aria-label={"Specialties and Sub-specialties"}
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
                  aria-label={item}
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
  isShownPhoneAndRating = true,
  isShownRating = true,
  providerData = {},
  imageSize = "large",
  bioContainerClass = "",
  addressClass = "",
  isCard = false,
}) {
  const isAppointment = variant === "appointment";
  const isBio = variant === "bio";
  const isViewSchedule = variant === "viewschedule";
  const isMap = variant === "map";
  const isMobile = useMediaQuery("(max-width: 992px)");

  const router = useRouter();

  const phoneNumber = providerData.phoneNumber;

  const getAddress = (address) => {
    const addressData = Array.isArray(address) ? address[0] : address;
    if (!addressData) return;
    return (
      <>
        {addressData.addressLine1}
        <br />
        {address.addressLine2 && (
          <>
            {address.addressLine2}
            <br />
          </>
        )}
        {addressData.city}, {addressData.state},{" "}
        {addressData.zipcode || addressData.zip}
      </>
    );
  };

  function getNameFontSize() {
    let size;
    if (isBio) {
      size = "32px";
    } else if (isViewSchedule || isMap) {
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

  function getDoctorNameStyle() {
    if (isViewSchedule) {
      return styles.doctorNameViewSchedule;
    } else if (isAppointment) {
      return styles.doctorNameAppointment;
    } else if (isMap) {
      return styles.doctorMap;
    } else {
      return styles.doctorName;
    }
  }

  function getWidtBioContainer() {
    const isNotBio = isMap || isAppointment || imageSize === "small";
    const bioWidth = "auto";
    return isNotBio ? "unset" : bioWidth;
  }

  return (
    <Box
      className={isBio ? styles.shortBio : styles.appointment}
      sx={{ maxWidth: isMap ? "unset" : "368px" }}
    >
      <Box className={styles.displayFlex}>
        <Box className={getImageContainerStyle()}>
          <ImageFallback
            src={providerData.image}
            data-testid={TEST_ID.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image}
            width={100}
            height={100}
            tabIndex={0}
            className={styles.profilePhoto}
            alt="Doctor Image"
            fallbackSrc={"/cardImage.png"}
            aria-label="Doctor Image"
          />
        </Box>
        <Box
          className={[styles.bioContainer, bioContainerClass].join(" ")}
          sx={{
            width: getWidtBioContainer(),
            ml: isMap ? 1 : "inherit",
          }}
        >
          <Typography
            variant={isMap ? "cutomH4" : "h2"}
            tabIndex={0}
            fontSize={getNameFontSize()}
            aria-label={providerData.name}
            data-testid={TEST_ID.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name}
            onClick={() => {
              router.push(`/patient/bio/${providerData.providerId}`);
            }}
            className={getDoctorNameStyle()}
          >
            <span className={styles.doctorName}>{providerData.name}</span>
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
                  fontSize={isViewSchedule || isMap ? "14px" : "16px"}
                  tabIndex={"0"}
                >
                  {getAddress(providerData.address)}
                </Typography>
              </Box>
              {renderRatingAndPhone()}
              {isBio && (
                <Box marginTop={"10px"}>
                  <StyledButton
                    theme={"patient"}
                    mode={"primary"}
                    size={"small"}
                    tabIndex={0}
                    aria-label={"Schedule Appointment"}
                    gradient={false}
                    onClick={() => {
                      navigateToScheduleAppointment(providerData);
                    }}
                    data-testid="schedule-btn"
                  >
                    Schedule Appointment
                  </StyledButton>
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
