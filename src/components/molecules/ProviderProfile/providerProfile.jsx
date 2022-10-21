import Image from "next/image";
import { Typography, Box, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "../../atoms/Rating/styledRating";
import { useRouter } from "next/router";
import { TEST_ID } from "../../../utils/constants";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";
import { StyledButton } from "../../atoms/Button/button";

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

  const navigateToScheduleAppointment = () => {
    const address = providerData.address;
    const addressData = Array.isArray(address) ? address[0] : address;
    const state = addressData.state;
    const filterData = {
      location: state,
    };

    dispatch(setFilterData(filterData));
    router.push("/patient/appointment/");
  };

  return (
    <Box
      className={isBio ? styles.shortBio : styles.appointment}
      sx={{ maxWidth: isMap ? "unset" : "368px" }}
    >
      <Box className={styles.displayFlex}>
        <Box className={getImageContainerStyle()}>
          <Image
            src={providerData.image || "/cardImage.png"}
            data-testid={TEST_ID.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image}
            width={100}
            height={100}
            className={styles.profilePhoto}
            alt="Doctor Image"
            tabIndex={0}
          />
        </Box>
        <Box
          className={[styles.bioContainer, bioContainerClass].join(" ")}
          sx={{
            width: getWidtBioContainer(),
          }}
        >
          <Typography
            variant={isMap ? "cutomH4" : "h2"}
            fontSize={getNameFontSize()}
            data-testid={TEST_ID.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name}
            onClick={() => {
              router.push(`/patient/bio/${providerData.providerId}`);
            }}
            className={getDoctorNameStyle()}
            tabIndex={"0"}
          >
            <span className={styles.doctorName}>{providerData.name} </span>
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
              {isShownPhoneAndRating && (
                <Box
                  className={
                    isBio ? styles.ratingContainer : styles.phoneContainer
                  }
                  sx={{ marginLeft: isMap ? "-67px" : "0" }}
                >
                  {(isBio || isMap || (isViewSchedule && isShownRating)) && (
                    <StyledRating value={parseFloat(providerData.rating)} />
                  )}
                  <PhoneNumber phone={phoneNumber} />
                </Box>
              )}
              {isBio && (
                <Box marginTop={"10px"}>
                  <StyledButton
                    theme={"patient"}
                    mode={"primary"}
                    size={"small"}
                    gradient={false}
                    onClick={() => {
                      navigateToScheduleAppointment();
                    }}
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
