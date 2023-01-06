import { Box, IconButton, Link, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./styles.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData, setIsFilterApplied } from "../../../store/appointment";
import { useRouter } from "next/router";
import ImageFallback from "../../atoms/Image/image";
import moment from "moment";
import {
  onCalledGetAppointmentTypesAPI,
  onCallSubmitFilterAPI,
} from "../../../utils/appointment";

export default function CareTeamCard({ provider, coordinate }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const insuranceCarrierList = useSelector((state) => state.provider.list);

  const addressLine1 = provider.address?.addressLine1
    ? `${provider.address.addressLine1} `
    : "";
  const addressLine2 = provider.address?.addressLine2
    ? `${provider.address.addressLine2}. `
    : ".";
  const city = provider.address?.city ? `${provider.address.city}, ` : "";
  const addressState = provider.address?.state
    ? `${provider.address.state} `
    : "";
  const zip = provider.address?.zip ? `${provider.address.zip}` : "";
  const address = `${addressLine1}${addressLine2}${city}${addressState}${zip}`;

  const navigateToScheduleAppointment = () => {
    let location = "";

    if (provider.address?.city) {
      location = provider.address.city;
    } else if (provider.address?.state) {
      location = provider.address.state;
    } else if (provider.address?.zip) {
      location = provider.address.zip;
    }

    onCalledGetAppointmentTypesAPI(insuranceCarrierList, (filterSuggestion) => {
      const selectedAppointmentType = filterSuggestion?.purposeOfVisit?.find(
        (element) => element.title === provider.specialties
      );

      const filterData = {
        location,
        date: moment().format("MM/DD/YYYY"),
        purposeOfVisit: selectedAppointmentType?.title || "ALL",
      };

      dispatch(setFilterData(filterData));
      dispatch(setIsFilterApplied(true));

      onCallSubmitFilterAPI(
        filterData,
        filterSuggestion,
        dispatch,
        router,
        coordinate
      );
    });
  };

  return (
    <Box className={styles.careTeamContainer}>
      <Box className={styles.bioContainer}>
        <Box className={styles.careTeamImage}>
          <ImageFallback
            source={provider.image}
            layout="fill"
            objectFit="cover"
            tabIndex={0}
            alt="Doctor Image"
            fallbackSrc={"/defaultImageMyCare.png"}
            aria-label="Doctor/Optometrist image"
            priority
          />
        </Box>
        <Box className={styles.addressContainer}>
          <Typography
            tabIndex={0}
            aria-label={provider.name}
            className={styles.providerNameText}
            variant="h1"
          >
            {provider.name}
          </Typography>
          <Box display="flex" flexDirection="row" sx={{ mt: 2 }}>
            <LocationOnOutlinedIcon
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                },
                margin: "auto 0",
              }}
            />
            <Typography
              tabIndex={0}
              aria-label={provider.address?.name}
              className={styles.addressNameText}
              variant="body2"
            >
              {provider.address?.name}
            </Typography>
          </Box>
          <Typography
            tabIndex={0}
            aria-label={address}
            className={styles.addressText}
            variant="body2"
          >
            {address}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.infoContainer}>
        <Box>
          <Typography
            tabIndex={0}
            aria-label={"Specialties"}
            className={styles.headingText}
            variant="body2"
          >
            Specialties
          </Typography>
          <Typography
            tabIndex={0}
            aria-label={provider.specialties}
            className={styles.text}
            variant="body2"
          >
            {provider.specialties}
          </Typography>
        </Box>
        <Box>
          <Typography
            tabIndex={0}
            aria-label={"email"}
            className={styles.headingText}
            variant="body2"
          >
            Email
          </Typography>
          <Link
            className={styles.link}
            tabIndex={0}
            aria-label={provider.email}
            variant="body2"
            href={`mailto:${provider.email}`}
          >
            {provider.email}
          </Link>
        </Box>
        <Box>
          <Typography
            tabIndex={0}
            aria-label={"phone"}
            className={styles.headingText}
            variant="body2"
          >
            Phone
          </Typography>
          <PhoneNumber
            phone={provider.phone || "-"}
            sx={{
              "&.MuiTypography-body2": {
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                },
              },
            }}
          />
        </Box>
      </Box>
      <Box className={styles.buttonContainer}>
        <Link
          tabIndex={0}
          aria-label={"View Profile"}
          href={`/patient/bio/${provider.providerId}`}
          className={styles.viewProfileLink}
        >
          View Profile
        </Link>
        <StyledButton
          tabIndex={0}
          aria-label={"Schedule Appointment"}
          theme={"patient"}
          mode={"primary"}
          size={"small"}
          gradient={false}
          onClick={() => {
            navigateToScheduleAppointment();
          }}
          data-testid="schedule-btn"
        >
          Schedule Appointment
        </StyledButton>
      </Box>
    </Box>
  );
}
