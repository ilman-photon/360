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

export default function CareTeamCard({ provider }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const insuranceCarrierList = useSelector((state) => state.provider.list);

  const addressLine1 = provider.address.addressLine1
    ? `${provider.address.addressLine1} `
    : "";
  const addressLine2 = provider.address.addressLine2
    ? `${provider.address.addressLine2}. `
    : ".";
  const city = provider.address.city ? `${provider.address.city}, ` : "";
  const addressState = provider.address.state
    ? `${provider.address.state} `
    : "";
  const zip = provider.address.zip ? `${provider.address.zip}` : "";
  const address = `${addressLine1}${addressLine2}${city}${addressState}${zip}`;

  const navigateToScheduleAppointment = () => {
    let location = "";

    if (provider.address.city) {
      location = provider.address.city;
    } else if (provider.address.state) {
      location = provider.address.state;
    } else if (provider.address.zip) {
      location = provider.address.zip;
    }

    const filterData = {
      location,
      date: moment().format("MM/DD/YYYY"),
      purposeOfVisit: provider.specialties,
    };

    dispatch(setFilterData(filterData));
    dispatch(setIsFilterApplied(true));
    onCalledGetAppointmentTypesAPI(insuranceCarrierList, (filterSuggestion) => {
      onCallSubmitFilterAPI(filterData, filterSuggestion, dispatch, router);
    });
  };

  return (
    <Box className={styles.careTeamContainer}>
      <Box>
        <IconButton
          aria-label="more"
          id="more-button"
          sx={{
            position: "absolute",
            right: 0,
            padding: {
              xs: "12.5px",
              sm: "22px",
            },
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box className={styles.bioContainer}>
        <Box className={styles.careTeamImage}>
          <ImageFallback
            source={provider.image}
            layout="fill"
            objectFit="cover"
            tabIndex={0}
            alt="Doctor Image"
            fallbackSrc={"/defaultImageMyCare.png"}
            aria-label="Doctor Image"
          />
        </Box>
        <Box className={styles.addressContainer}>
          <Typography className={styles.providerNameText} variant="h1">
            {provider.name}
          </Typography>
          <Box display="flex" flexDirection="row">
            <LocationOnOutlinedIcon
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                },
                margin: "auto 0",
              }}
            />
            <Typography className={styles.addressNameText} variant="body2">
              {provider.address.name}
            </Typography>
          </Box>
          <Typography className={styles.addressText} variant="body2">
            {address}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.infoContainer}>
        <Box>
          <Typography className={styles.headingText} variant="body2">
            Specialties
          </Typography>
          <Typography className={styles.text} variant="body2">
            {provider.specialties}
          </Typography>
        </Box>
        <Box>
          <Typography className={styles.headingText} variant="body2">
            Email
          </Typography>
          <Link
            className={styles.link}
            variant="body2"
            href={`mailto:${provider.email}`}
          >
            {provider.email}
          </Link>
        </Box>
        <Box>
          <Typography className={styles.headingText} variant="body2">
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
          href={`/patient/bio/${provider.providerId}`}
          className={styles.viewProfileLink}
        >
          View Profile
        </Link>
        <StyledButton
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
