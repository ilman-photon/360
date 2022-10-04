import { Link, Typography, Stack, Box, Divider } from "@mui/material";
import styles from "./styles.module.scss";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import { useRef, useState } from "react";
import constants from "../../../utils/constants";

export default function BiographyDetails({ providerData = {}, googleApiKey }) {
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const insurancesRef = useRef(null);
  const educationRef = useRef(null);

  const aboutMenuRef = useRef(null);
  const locationMenuRef = useRef(null);
  const insurancesMenuRef = useRef(null);
  const educationMenuRef = useRef(null);

  const [expand, setExpand] = useState(false);

  const renderInsurances = () => {
    const networkInsurance = providerData.networkInsurance;
    const insurancesLength = networkInsurance.length;
    const isRenderViewAll = insurancesLength > 3;
    return (
      <Box className={styles.insurancesContainer}>
        <ul className={styles.insurancestList}>
          {networkInsurance.map((item, index) => {
            if (expand) {
              const splitedIndex =
                ((insurancesLength % 2) + insurancesLength) / 2;
              return (
                <li key={index}>
                  <Typography
                    variant="body2"
                    className={index === splitedIndex ? styles.newColumn : ""}
                    tabIndex={0}
                  >
                    {item}
                  </Typography>
                </li>
              );
            } else if (index < 3) {
              return (
                <li key={index}>
                  <Typography
                    variant="body2"
                    className={index === 2 ? styles.newColumn : ""}
                    tabIndex={0}
                  >
                    {item}
                  </Typography>
                </li>
              );
            }
          })}

          {isRenderViewAll && !expand && (
            <li>
              <Typography variant="body2" tabIndex={0}>
                16+ more in-network insurances{" "}
                <Link
                  className={styles.viewAllLink}
                  data-testid={BIOGRAPHY_TEST_ID.viewAll}
                  aria-roledescription="Link"
                  aria-label="View All link"
                  tabIndex={0}
                  onClick={() => {
                    setExpand(true);
                  }}
                >
                  View All
                </Link>
              </Typography>
            </li>
          )}
        </ul>
      </Box>
    );
  };

  const getAddressQuery = (queryAddress) => {
    return `${queryAddress.addressLine1} ${queryAddress.addressLine2} ${queryAddress.city} ${queryAddress.state} ${queryAddress.zipcode}`.replace(
      / /g,
      "+"
    );
  };

  const renderAddress = (addressArray) => {
    return (
      <Box>
        {addressArray.map((address, idx) => {
          const addressQuery = getAddressQuery(address);
          return (
            <Box
              className={styles.mapAddressContainer}
              aria-label="Address"
              key={idx}
              sx={
                idx !== 0 && {
                  borderTop: "1px solid rgba(0, 59, 74, 0.25)",
                  marginTop: "26px",
                  paddingTop: "24px",
                }
              }
            >
              <Typography className={styles.addressTitle}>
                {idx === 0 ? "Primary Address" : "Secondary Address"}
              </Typography>
              <Typography
                variant="body2"
                className={styles.mapAddress}
                tabIndex={0}
              >
                {address && (
                  <>
                    {address.addressLine1}
                    <br />
                    {address.addressLine2}
                    <br />
                    {address.city}, {address.state}, {address.zipcode}
                  </>
                )}
              </Typography>
              <Box className={styles.getDirectionLinkContainer}>
                <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
                <Link
                  className={styles.getDirectionLink}
                  href={`https://www.google.com/maps/search/?api=1&query=${addressQuery}`}
                  target="_blank"
                  rel="noopener"
                >
                  Get directions
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  };

  const resetMenuStyle = () => {
    aboutMenuRef.current.className = styles.menuText;
    locationMenuRef.current.className = styles.menuText;
    insurancesMenuRef.current.className = styles.menuText;
    educationMenuRef.current.className = styles.menuText;
  };

  const onClickAbout = () => {
    resetMenuStyle();
    aboutMenuRef.current.className = styles.menuTextSelected;
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };
  const onClickLocation = () => {
    resetMenuStyle();
    locationMenuRef.current.className = styles.menuTextSelected;
    window.scrollTo({
      left: 0,
      top: locationRef.current.offsetTop - 120,
      behavior: "smooth",
    });
  };
  const onClickInsurances = () => {
    resetMenuStyle();
    insurancesMenuRef.current.className = styles.menuTextSelected;
    window.scrollTo({
      left: 0,
      top: insurancesRef.current.offsetTop - 120,
      behavior: "smooth",
    });
  };
  const onClickEducation = () => {
    resetMenuStyle();
    educationMenuRef.current.className = styles.menuTextSelected;
    window.scrollTo({
      left: 0,
      top: educationRef.current.offsetTop - 120,
      behavior: "smooth",
    });
  };

  const { BIOGRAPHY_TEST_ID } = constants.TEST_ID;

  const address = providerData.address;
  const addressQuery = getAddressQuery(address[0]);

  return (
    <Box className={styles.detailedBio}>
      <Box className={styles.stickyMenu}>
        <Box className={styles.stickyMenuContainer} aria-hidden>
          <Link
            ref={aboutMenuRef}
            className={styles.menuText}
            data-testid={BIOGRAPHY_TEST_ID.about}
            onClick={onClickAbout}
          >
            About
          </Link>
          <Link
            ref={locationMenuRef}
            className={styles.menuText}
            data-testid={BIOGRAPHY_TEST_ID.location}
            onClick={onClickLocation}
          >
            Locations
          </Link>
          <Link
            ref={insurancesMenuRef}
            className={styles.menuText}
            data-testid={BIOGRAPHY_TEST_ID.insurance}
            onClick={onClickInsurances}
          >
            Insurances
          </Link>
          <Link
            ref={educationMenuRef}
            className={styles.menuText}
            data-testid={BIOGRAPHY_TEST_ID.education}
            onClick={onClickEducation}
          >
            Education
          </Link>
        </Box>
      </Box>
      <Box className={styles.menu}>
        <Divider />
        <Box className={styles.menuContainer}>
          <Link
            className={styles.menuText}
            onClick={onClickAbout}
            aria-label={`About Tab`}
            aria-roledescription="Link"
          >
            About
          </Link>
          <Link
            className={styles.menuText}
            onClick={onClickLocation}
            aria-label={`Locations Tab`}
            aria-roledescription="Link"
          >
            Locations
          </Link>
          <Link
            className={styles.menuText}
            onClick={onClickInsurances}
            aria-label={`Insurances Tab`}
            aria-roledescription="Link"
          >
            Insurances
          </Link>
          <Link
            className={styles.menuText}
            onClick={onClickEducation}
            aria-label={`Education Tab`}
            aria-roledescription="Link"
          >
            Education
          </Link>
        </Box>
        <Divider />
      </Box>
      <Stack spacing={3} className={styles.detailedBioContainer}>
        <Typography variant="h3" ref={aboutRef} tabIndex={0}>
          {`About ${providerData.name}`}
        </Typography>
        <Typography variant="body2" tabIndex={0}>
          {providerData.about}
        </Typography>
        <Typography variant="h3" tabIndex={0}>
          Gender
        </Typography>
        <Typography variant="body2" tabIndex={0}>
          {providerData.gender}
        </Typography>
        <Typography variant="h3" ref={locationRef} tabIndex={0}>
          Locations
        </Typography>

        <Box className={styles.mapContainer}>
          <Box className={styles.map}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=${addressQuery}`}
              aria-label="Map"
            ></iframe>
          </Box>
          {renderAddress(address)}
        </Box>

        <Typography variant="h3" tabIndex={0}>
          Languages
        </Typography>
        <Typography variant="body2" tabIndex={0}>
          {providerData.language &&
            providerData.language.map((item, index) => {
              const isLastIndex = providerData.language.length - 1 === index;
              if (!isLastIndex) {
                return `${item}, `;
              } else {
                return item;
              }
            })}
        </Typography>
        <Typography variant="h3" ref={insurancesRef} tabIndex={0}>
          In-network insurances
        </Typography>
        {providerData.networkInsurance && renderInsurances()}

        <Typography variant="h3" ref={educationRef} tabIndex={0}>
          Education
        </Typography>
        <Box className={styles.educationContainer}>
          {providerData.education &&
            providerData.education.map((education, index) => {
              return (
                <Typography variant="body2" key={index} tabIndex={0}>
                  {education}
                </Typography>
              );
            })}
        </Box>

        <Typography variant="h3" tabIndex={0}>
          Memberships and Afilliations
        </Typography>
        <Box className={styles.educationContainer}>
          {providerData.membershipsAffiliation &&
            providerData.membershipsAffiliation.map((membership, index) => {
              return (
                <Typography key={index} variant="body2" tabIndex={0}>
                  {membership}
                </Typography>
              );
            })}
        </Box>
      </Stack>
    </Box>
  );
}
