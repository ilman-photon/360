import { Typography, Box } from "@mui/material";
import styles from "./styles.module.scss";
import StyledRating from "../../atoms/Rating/styledRating";
import { useRouter } from "next/router";
import { TEST_ID } from "../../../utils/constants";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";
import { StyledButton } from "../../atoms/Button/button";
import { formattedAddress } from "../../../utils/bioUtils";
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
      <ul
        className={styles.specialistList}
        style={{
          columnCount: providerData.specialties.length > 2 ? 2 : 1,
        }}
      >
        {providerData.specialties.map((item, index) => {
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
  navigateToScheduleAppointment = () => {
    //This is intentional
  },
}) {
  const isAppointment = variant === "appointment";
  const isBio = variant === "bio";
  const isViewSchedule = variant === "viewschedule";
  const isMap = variant === "map";

  const router = useRouter();

  const getAddress = (address) => {
    const addressData = Array.isArray(address) ? address[0] : address;
    if (!addressData) return;
    return formattedAddress(addressData);
  };

  const getAddressName = (address) => {
    const addressData = Array.isArray(address) ? address[0] : address;
    if (!addressData) return null;
    return addressData.name;
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

  function renderRatingAndPhone() {
    if (isShownPhoneAndRating) {
      return (
        <Box className={isBio ? styles.ratingContainer : styles.phoneContainer}>
          {(isBio || isMap || (isViewSchedule && isShownRating)) && (
            <StyledRating value={parseFloat(providerData.rating / 2)} />
          )}
          {providerData.phoneNumber && (
            <PhoneNumber isMap={isMap} phone={providerData.phoneNumber} />
          )}
        </Box>
      );
    } else {
      return null;
    }
  }

  function getAddressAriaLabel(address) {
    const addressData = Array.isArray(address) ? address[0] : address;
    return `${addressData?.addressLine1 || ""}, ${
      addressData?.addressLine2 || ""
    }, ${addressData?.city || ""}, ${addressData?.state || ""}, ${
      addressData?.zip || ""
    }`;
  }

  return (
    <Box
      className={isBio ? styles.shortBio : styles.appointment}
      sx={{ maxWidth: isMap ? "unset" : "368px" }}
    >
      <Box
        className={[
          styles.displayFlex,
          isViewSchedule ? styles.viewSchedule : {},
        ].join(" ")}
      >
        <Box className={getImageContainerStyle()}>
          <ImageFallback
            source={providerData.image}
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
            ml: isViewSchedule || isMap ? 1 : "inherit",
          }}
        >
          <Typography
            variant={isMap ? "cutomH4" : "h2"}
            tabIndex={0}
            fontSize={getNameFontSize()}
            aria-label={providerData.name}
            role={isViewSchedule ? "link" : "text"}
            data-testid={TEST_ID.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name}
            onClick={() => {
              isViewSchedule &&
                router.push(`/patient/bio/${providerData.providerId}`);
            }}
            className={getDoctorNameStyle()}
          >
            <span className={styles.doctorName}>{providerData.name}</span>
          </Typography>
          {showPosition && (
            <Typography
              tabIndex={getAddressName(providerData.address) ? 0 : -1}
              variant="h3"
            >
              {getAddressName(providerData.address)}
            </Typography>
          )}
          <Box
            className={[
              styles.detailContainer,
              isViewSchedule ? styles.viewSchedule : {},
            ].join(" ")}
            sx={{
              display: "flex",
              gap: "110px",
            }}
          >
            <Box
              sx={
                isBio && {
                  width: {
                    sm: "40%",
                  },
                  maxWidth: {
                    sm: "280px",
                  },
                }
              }
            >
              <Box width={280}>
                <Typography
                  variant="body2"
                  className={[styles.address, addressClass].join(" ")}
                  fontSize={isViewSchedule || isMap ? "14px" : "16px"}
                  tabIndex={0}
                  aria-label={getAddressAriaLabel(providerData.address)}
                >
                  {getAddress(providerData.address)}
                </Typography>
              </Box>
              {renderRatingAndPhone()}
              {isBio && (
                <Box marginTop={"10px"} width={"216px"}>
                  <StyledButton
                    mode={"primary"}
                    size={"small"}
                    tabIndex={0}
                    aria-label={"Schedule Appointment"}
                    gradient={false}
                    onClick={() => {
                      navigateToScheduleAppointment(providerData);
                    }}
                    data-testid="schedule-btn"
                    sx={{
                      p: "11px 20px",
                      fontWeight: 400,
                      boxShadow: "none !important",
                      borderRadius: "30px",
                    }}
                  >
                    Schedule Appointment
                  </StyledButton>
                </Box>
              )}
            </Box>

            {/* render specialties in desktop */}
            {isBio && (
              <Box
                sx={{
                  display: "none",
                  ["@media (min-width:993px)"]: {
                    display: "block",
                  },
                }}
              >
                {providerData.specialties && renderSpecialistList(providerData)}
              </Box>
            )}

            {/* ---------------------------------- */}
          </Box>
        </Box>
      </Box>
      {/* render specialties in mobile */}
      <Box
        sx={{
          display: "none",
          ["@media (max-width:992px)"]: {
            display: "block",
          },
        }}
      >
        {isBio &&
          providerData.specialties &&
          renderSpecialistList(providerData)}
      </Box>
      {/* ---------------------------------- */}
    </Box>
  );
}
