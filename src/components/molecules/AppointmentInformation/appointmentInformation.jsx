import { Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";
import ImageFallback from "../../atoms/Image/image";

export default function AppointmentInformation({ data }) {
  const getProviderLocation = (address) => {
    if (address === "") return "#";
    const addressLine1 = address.addressLine1 || "";
    const addressLine2 = address.addressLine2 || "";
    const state = address.state || "";
    const zipcode = address.zipcode || address.zipcode || "";
    const city = address.city || "";

    const addressQuery =
      `${addressLine1}${addressLine2}${city}${state}${zipcode}`.replace(
        / /g,
        "+"
      );
    return `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  };

  const getAriaLabel = (providerInfo) => {
    const position = providerInfo.position || "";
    const addressLine1 = providerInfo.address.addressLine1 || "";
    const addressLine2 = providerInfo.address.addressLine2 || "";
    const city = providerInfo.address.city || "";
    const state = providerInfo.address.state || "";
    const zipcode = providerInfo.address.zipcode || "";

    const returnData =
      position +
      `\n` +
      addressLine1 +
      `\n` +
      addressLine2 +
      `\n` +
      city +
      "\n" +
      state +
      `\n` +
      zipcode;
    return returnData;
  };

  return (
    <Box className={styles.appointmentInformation}>
      <Box className={styles.imageContainer}>
        <ImageFallback
          source={data.providerInfo.image}
          layout="fill"
          tabIndex={0}
          className={styles.profilePhoto}
          alt="Doctor Image"
          fallbackSrc={"/cardImage.png"}
          aria-label="Doctor Image"
        />
      </Box>
      <Box className={styles.nameContainer}>
        <Typography
          tabIndex={0}
          ariaLabel={data.providerInfo.name}
          className={[styles.doctorName, styles.subtitleStyle].join(" ")}
        >
          {data.providerInfo.name}
        </Typography>
        <Box className={styles.subTitleWrapper}>
          <Typography
            tabIndex={0}
            ariaLabel={"Patient"}
            className={styles.subtitleStyle}
          >
            Patient:{" "}
          </Typography>
          <Typography
            tabIndex={0}
            ariaLabel={data.patientInfo.name}
            variant="body2"
            className={styles.patientSubtitleStyle}
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
          <div
            tabIndex={0}
            ariaLabel={
              data.providerInfo.address !== "" &&
              getAriaLabel(data.providerInfo)
            }
          >
            <Typography variant="body1" className={styles.bodyTitle}>
              {data.providerInfo.position}
            </Typography>
            {data.providerInfo.address !== "" && (
              <Typography variant="body2" sx={{ color: "#191919" }}>
                {data.providerInfo.address.addressLine1 +
                  `\n` +
                  data.providerInfo.address.addressLine2 +
                  `\n` +
                  data.providerInfo.address.city +
                  "\n" +
                  data.providerInfo.address.state +
                  `\n` +
                  data.providerInfo.address.zipcode}
              </Typography>
            )}
          </div>
          <PhoneNumber phone={data.providerInfo.phoneNumber} />
          <Box className={styles.getDirectionLink}>
            <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
            <Link
              className={styles.getDirectionLinkText}
              href={getProviderLocation(data.providerInfo.address)}
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
          {data.appointmentInfo.insuranceCarrier.length > 0 ? (
            data.appointmentInfo.insuranceCarrier.map((item, index) => {
              return (
                <Typography
                  tabIndex={0}
                  ariaLabel={item}
                  variant="body2"
                  key={index}
                  sx={{ color: "#191919" }}
                >
                  {item}
                </Typography>
              );
            })
          ) : (
            <Typography ariaLabel="-" variant="body2" sx={{ color: "#191919" }}>
              -
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
