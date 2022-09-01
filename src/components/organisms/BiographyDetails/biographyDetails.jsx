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
    console.log(expand);
    const networkInsurance = providerData.networkInsurance;
    const insurancesLength = networkInsurance && networkInsurance.length;
    const isRenderViewAll = networkInsurance && insurancesLength > 3;
    return (
      <Box className={styles.insurancesContainer}>
        <ul className={styles.insurancestList}>
          {networkInsurance &&
            networkInsurance.map((item, index) => {
              if (expand) {
                const splitedIndex =
                  ((insurancesLength % 2) + insurancesLength) / 2;
                return (
                  <li key={index}>
                    <Typography
                      variant="body2"
                      className={index === splitedIndex ? styles.newColumn : ""}
                    >
                      {item}
                    </Typography>
                  </li>
                );
              } else {
                if (!isRenderViewAll) {
                  return (
                    <li key={index}>
                      <Typography
                        variant="body2"
                        className={index === 2 ? styles.newColumn : ""}
                      >
                        {item}
                      </Typography>
                    </li>
                  );
                }
                if (isRenderViewAll && index < 3) {
                  return (
                    <li key={index}>
                      <Typography
                        variant="body2"
                        className={index === 2 ? styles.newColumn : ""}
                      >
                        {item}
                      </Typography>
                    </li>
                  );
                }
              }
            })}

          {isRenderViewAll && !expand && (
            <li>
              <Typography variant="body2">
                16+ more in-network insurances{" "}
                <Link
                  className={styles.viewAllLink}
                  data-testid={BIOGRAPHY_TEST_ID.viewAll}
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
  const addressQuery =
    address &&
    `${address.addressLine1} ${address.addressLine2} ${address.city} ${address.state} ${address.zipcode}`.replace(
      / /g,
      "+"
    );

  console.log(addressQuery);

  return (
    <Box className={styles.detailedBio}>
      <Box className={styles.stickyMenu}>
        <Box className={styles.stickyMenuContainer}>
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
          <Link className={styles.menuText} onClick={onClickAbout}>
            About
          </Link>
          <Link className={styles.menuText} onClick={onClickLocation}>
            Locations
          </Link>
          <Link className={styles.menuText} onClick={onClickInsurances}>
            Insurances
          </Link>
          <Link className={styles.menuText} onClick={onClickEducation}>
            Education
          </Link>
        </Box>
        <Divider />
      </Box>
      <Stack spacing={3} className={styles.detailedBioContainer}>
        <Typography variant="h3" ref={aboutRef}>
          {providerData.name}
        </Typography>
        <Typography variant="body2">{providerData.about}</Typography>
        <Typography variant="h3">Gender</Typography>
        <Typography variant="body2">{providerData.gender}</Typography>
        <Typography variant="h3" ref={locationRef}>
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
            ></iframe>
          </Box>
          <Box className={styles.mapAddressContainer}>
            <Typography variant="body2" className={styles.mapAddress}>
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
        </Box>

        <Typography variant="h3">Languages</Typography>
        <Typography variant="body2">
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
        <Typography variant="h3" ref={insurancesRef}>
          In-network insurances
        </Typography>
        {renderInsurances()}

        <Typography variant="h3" ref={educationRef}>
          Education
        </Typography>
        <Box className={styles.educationContainer}>
          {providerData.education &&
            providerData.education.map((item, index) => {
              return (
                <Typography variant="body2" key={index}>
                  {item}
                </Typography>
              );
            })}
        </Box>

        <Typography variant="h3">Memberships and Afilliations</Typography>
        <Box className={styles.educationContainer}>
          {providerData.membershipsAffiliation &&
            providerData.membershipsAffiliation.map((item, index) => {
              return (
                <Typography variant="body2" key={index}>
                  {item}
                </Typography>
              );
            })}
        </Box>
      </Stack>
    </Box>
  );
}
