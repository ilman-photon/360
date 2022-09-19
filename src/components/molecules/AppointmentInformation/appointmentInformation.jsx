import { Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";

export default function AppointmentInformation({ data }) {
  const getProviderLocation = () => {
    if (!data.providerInfo.location) return "#";
    return `https://www.google.com/maps/search/?api=1&query=${data.providerInfo.location.latitude},${data.providerInfo.location.longitude}`;
  };

  return (
    <Box className={styles.appointmentInformation}>
      <Box className={styles.imageContainer}>
        <Image
          src={data.providerInfo.image}
          layout="fill"
          tabIndex={0}
          className={styles.profilePhoto}
          alt="Doctor Image"
          aria-label="Doctor Image"
        ></Image>
      </Box>
      <Box className={styles.nameContainer}>
        <Typography
          tabIndex={0}
          ariaLabel={data.providerInfo.name}
          variant="subtitle1"
          className={styles.doctorName}
        >
          {data.providerInfo.name}
        </Typography>
        <Box className={styles.subTitleWrapper}>
          <Typography tabIndex={0} ariaLabel={"Patient"} variant="subtitle1">
            Patient:{" "}
          </Typography>
          <Typography
            tabIndex={0}
            ariaLabel={data.patientInfo.name}
            variant="body2"
          >
            {data.patientInfo.name}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.locationContainer}>
        <Box className={styles.locationWrapper}>
          <Typography
            tabIndex={0}
            ariaLabel={"Location"}
            variant="subtitle2"
            className={styles.titleLocation}
          >
            Location
          </Typography>
          <Typography
            tabIndex={0}
            ariaLabel={data.providerInfo.position}
            variant="body1"
            className={styles.bodyTitle}
          >
            {data.providerInfo.position}
          </Typography>
          <Typography tabIndex={0} variant="body2">
            <>
              {data.providerInfo.address.addressLine1}
              <br />
              {data.providerInfo.address.addressLine2}
              <br />
              {data.providerInfo.address.city},{" "}
              {data.providerInfo.address.state},{" "}
              {data.providerInfo.address.zipcode}
            </>
          </Typography>
          <Link
            tabIndex={0}
            ariaLabel={formatPhoneNumber(data.providerInfo.phoneNumber)}
            className={styles.link}
          >
            {formatPhoneNumber(data.providerInfo.phoneNumber)}
          </Link>
          <Box className={styles.getDirectionLink}>
            <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
            <Link
              className={styles.getDirectionLinkText}
              href={getProviderLocation()}
              target="_blank"
            >
              Get directions
            </Link>
          </Box>
        </Box>
        <Box className={styles.insuranceWrapper}>
          <Typography
            tabIndex={0}
            ariaLabel={"Insurance"}
            variant="subtitle2"
            className={styles.titleLocation}
          >
            Insurance
          </Typography>
          {data.appointmentInfo.insuranceCarrier.map((item, index) => {
            return (
              <Typography
                tabIndex={0}
                ariaLabel={item}
                variant="body2"
                key={index}
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
