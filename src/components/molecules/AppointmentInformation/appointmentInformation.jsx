import { Box, Typography, Link, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Api } from "../../../pages/api/api";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";

export default function AppointmentInformation({ data }) {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const getProviderLocation = () => {
    if (!data.providerInfo.location) return "#";
    return `https://www.google.com/maps/search/?api=1&query=${data.providerInfo.location.latitude},${data.providerInfo.location.longitude}`;
  };

  const [providerImage, setProviderImage] = useState("");
  const [isRequested, setIsRequested] = useState(false);

  const getProviderImage = (imageId) => {
    const api = new Api();
    api
      .getURLDigitalAsset(imageId)
      .then((response) => {
        const imageURL = response.presignedUrl;
        setProviderImage(imageURL);
      })
      .catch(() => {
        setProviderImage("");
      })
      .finally(() => {
        setIsRequested(true);
      });
  };

  useEffect(() => {
    !isRequested && getProviderImage(data.providerInfo.image);
  });

  return (
    <Box className={styles.appointmentInformation}>
      <Box className={styles.imageContainer}>
        {providerImage !== "" ? (
          <Image
            src={providerImage}
            layout="fill"
            tabIndex={0}
            className={styles.profilePhoto}
            alt="Doctor Image"
            aria-label="Doctor Image"
          ></Image>
        ) : (
          <AccountCircleIcon
            sx={{
              width: { xs: "66px", md: "100px" },
              height: { xs: "66px", md: "100px" },
              color: "#b5b5b5",
            }}
            className={styles.profilePhoto}
            alt="Doctor Image"
            tabIndex={0}
          />
        )}
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
              (data.providerInfo.position ||
                "" + `\n` + data.providerInfo.address.addressLine1 ||
                "" + `\n` + data.providerInfo.address.addressLine2 ||
                "" + `\n` + data.providerInfo.address.city ||
                "" + "\n" + data.providerInfo.address.state ||
                "" + `\n` + data.providerInfo.address.zipcode ||
                "")
            }
          >
            <Typography variant="body1" className={styles.bodyTitle}>
              {data.providerInfo.position}
            </Typography>
            {data.providerInfo?.address !== "" && (
              <Typography variant="body2">
                {data.providerInfo?.address?.addressLine1 ||
                  "" + `\n` + data.providerInfo?.address?.addressLine2 ||
                  "" + `\n` + data.providerInfo?.address?.city ||
                  "" + "\n" + data.providerInfo?.address?.state ||
                  "" + `\n` + data.providerInfo?.address?.zipcode ||
                  ""}
              </Typography>
            )}
          </div>
          <PhoneNumber phone={data.providerInfo.phoneNumber} />
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
