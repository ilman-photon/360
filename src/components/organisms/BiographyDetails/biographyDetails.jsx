import { Link, Typography, Stack, Box, Divider } from "@mui/material";
import styles from "./styles.module.scss";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import { useRef, useState, useEffect } from "react";
import constants from "../../../utils/constants";
import GMaps from "../Google/Maps/gMaps";
import { Api } from "../../../pages/api/api";
import { formattedAddress, isEmpty } from "../../../utils/bioUtils";

export default function BiographyDetails({ providerData, googleApiKey }) {
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const insurancesRef = useRef(null);
  const educationRef = useRef(null);

  const aboutMenuRef = useRef(null);
  const locationMenuRef = useRef(null);
  const insurancesMenuRef = useRef(null);
  const educationMenuRef = useRef(null);

  const [expand, setExpand] = useState(false);
  const [locations, setLocations] = useState();

  let isRequest = false;

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
                    aria-label={item}
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
                    aria-label={item}
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
              <Typography
                variant="body2"
                tabIndex={0}
                aria-label="16+ more in-network insurances"
              >
                16+ more in-network insurances{" "}
                <Link
                  className={styles.viewAllLink}
                  data-testid={BIOGRAPHY_TEST_ID.viewAll}
                  role="Link"
                  aria-label="View All"
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

  const getAddressQuery = (addressPayload) => {
    const addressLine1 = addressPayload.addressLine1 || "";
    const addressLine2 = addressPayload.addressLine2 || "";
    const city = addressPayload.city || "";
    const state = addressPayload.state || "";
    const zipcode = addressPayload.zipcode || addressPayload.zip || "";

    return `${addressLine1}+${addressLine2}+${city}+${state}+${zipcode}`.replace(
      / |#/g,
      "+"
    );
  };

  useEffect(() => {
    !isRequest && providerData && getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRequest, providerData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getLocation = () => {
    if (locations === undefined) {
      isRequest = true;
      const api = new Api();
      const locationsArray = [];
      const locationsList = [];
      const addressArray = providerData.address;
      addressArray.map((item) => {
        const query = getAddressQuery(item);
        locationsArray.push(api.googleGeocode(query, googleApiKey));
      });

      Promise.all(locationsArray).then((values) => {
        values.forEach((item) => {
          if (item.status === "OK") {
            const location = item.results[0]?.geometry?.location;
            if (location) {
              const locData = {
                coordinate: {
                  lat: location.lat,
                  lng: location.lng,
                },
              };
              locationsList.push(locData);
            }
          }
        });
        isRequest = false;
        setLocations(locationsList);
      });
    }
  };

  const getAddressAriaLabel = (address) => {
    return `${address.addressLine1 || ""}, ${address.addressLine2 || ""}, ${
      address.city || ""
    }, ${address.state || ""}, ${address.zip || ""}`;
  };

  const renderAddress = (newAddressArray) => {
    return (
      <Box className={styles.addressWrapper}>
        {newAddressArray.map((newAddress, idx) => {
          const addressQuery = getAddressQuery(newAddress);
          return (
            <Box
              className={styles.mapAddressContainer}
              aria-label="Address"
              key={idx}
              sx={
                idx !== 0
                  ? {
                      borderTop: "1px solid rgba(0, 59, 74, 0.25)",
                      marginTop: "26px",
                      paddingTop: "24px",
                    }
                  : {}
              }
            >
              {idx === 0 && (
                <Typography
                  tabIndex={0}
                  aria-label={"Primary Address"}
                  className={styles.addressTitle}
                >
                  Primary Address
                </Typography>
              )}
              <Typography
                variant="body2"
                className={styles.mapAddress}
                tabIndex={0}
                aria-label={getAddressAriaLabel(newAddress)}
              >
                {newAddress && formattedAddress(newAddress)}
              </Typography>
              <Box className={styles.getDirectionLinkContainer}>
                <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
                <Link
                  className={styles.getDirectionLink}
                  href={`https://www.google.com/maps/search/?api=1&query=${addressQuery}`}
                  target="_blank"
                  rel="noopener"
                  tabIndex={0}
                >
                  Get Directions
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  };

  const resetMenuStyle = () => {
    if (!isEmpty(providerData.about))
      aboutMenuRef.current.className = styles.menuText;
    if (locations && !isEmpty(locations))
      locationMenuRef.current.className = styles.menuText;
    if (!isEmpty(providerData.networkInsurance))
      insurancesMenuRef.current.className = styles.menuText;
    if (!isEmpty(providerData.education))
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

  const renderMenu = () => (
    <>
      <Box className={styles.stickyMenu}>
        <Box className={styles.stickyMenuContainer} aria-hidden>
          {!isEmpty(providerData.about) && (
            <Link
              ref={aboutMenuRef}
              className={styles.menuText}
              data-testid={BIOGRAPHY_TEST_ID.about}
              onClick={onClickAbout}
            >
              About
            </Link>
          )}
          {locations && !isEmpty(locations) && (
            <Link
              ref={locationMenuRef}
              className={styles.menuText}
              data-testid={BIOGRAPHY_TEST_ID.location}
              onClick={onClickLocation}
            >
              Locations
            </Link>
          )}
          {!isEmpty(providerData.networkInsurance) && (
            <Link
              ref={insurancesMenuRef}
              className={styles.menuText}
              data-testid={BIOGRAPHY_TEST_ID.insurance}
              onClick={onClickInsurances}
            >
              Insurances
            </Link>
          )}
          {!isEmpty(providerData.education) && (
            <Link
              ref={educationMenuRef}
              className={styles.menuText}
              data-testid={BIOGRAPHY_TEST_ID.education}
              onClick={onClickEducation}
            >
              Education
            </Link>
          )}
        </Box>
      </Box>
      <Box className={styles.menu}>
        <Divider />
        <Box className={styles.menuContainer}>
          {!isEmpty(providerData.about) && (
            <Link
              className={styles.menuText}
              onClick={onClickAbout}
              aria-label={`About Tab`}
              role="Link"
              tabIndex={0}
            >
              About
            </Link>
          )}
          {locations && !isEmpty(locations) && (
            <Link
              className={styles.menuText}
              onClick={onClickLocation}
              aria-label={`Locations Tab`}
              role="Link"
              tabIndex={0}
            >
              Locations
            </Link>
          )}
          {!isEmpty(providerData.networkInsurance) && (
            <Link
              className={styles.menuText}
              onClick={onClickInsurances}
              aria-label={`Insurances Tab`}
              role="Link"
              tabIndex={0}
            >
              Insurances
            </Link>
          )}
          {!isEmpty(providerData.education) && (
            <Link
              className={styles.menuText}
              onClick={onClickEducation}
              aria-label={`Education Tab`}
              role="Link"
              tabIndex={0}
            >
              Education
            </Link>
          )}
        </Box>
        <Divider />
      </Box>
    </>
  );

  return (
    <Box className={styles.detailedBio}>
      {renderMenu()}
      <Stack spacing={3} className={styles.detailedBioContainer}>
        {!isEmpty(providerData.about) && (
          <>
            <Typography variant="h3" ref={aboutRef} tabIndex={0}>
              {`About ${providerData.name}`}
            </Typography>
            <Typography variant="body2" tabIndex={0}>
              {providerData.about}
            </Typography>
          </>
        )}
        <Typography variant="h3" tabIndex={0}>
          Gender
        </Typography>
        <Typography variant="body2" tabIndex={0}>
          {providerData.gender}
        </Typography>

        {locations && !isEmpty(locations) && (
          <>
            <Typography variant="h3" ref={locationRef} tabIndex={0}>
              Locations
            </Typography>
            <Box className={styles.mapContainer}>
              <Box className={styles.map}>
                <GMaps
                  apiKey={googleApiKey}
                  providerListData={locations}
                  disable={true}
                />
              </Box>
              {renderAddress(address)}
            </Box>
          </>
        )}

        {!isEmpty(providerData.language) && (
          <>
            <Typography
              tabIndex={0}
              aria-label={"Languages heading"}
              variant="h3"
            >
              Languages
            </Typography>
            <Typography variant="body2" tabIndex={0}>
              {providerData.language.map((item, index) => {
                const isLastIndex = providerData.language.length - 1 === index;
                if (!isLastIndex && item !== "") {
                  return `${item}, `;
                } else {
                  return item;
                }
              })}
            </Typography>
          </>
        )}

        {!isEmpty(providerData.networkInsurance) && (
          <>
            <Typography
              variant="h3"
              aria-label={"In-network insurances heading"}
              ref={insurancesRef}
              tabIndex={0}
            >
              In-network insurances
            </Typography>
            {renderInsurances()}
          </>
        )}

        {!isEmpty(providerData.education) && (
          <>
            <Typography
              variant="h3"
              ref={educationRef}
              tabIndex={0}
              aria-label={"Education heading"}
            >
              Education
            </Typography>
            <Box className={styles.educationContainer}>
              {providerData.education.map((education, index) => {
                return (
                  <Typography variant="body2" key={index} tabIndex={0}>
                    {education}
                  </Typography>
                );
              })}
            </Box>
          </>
        )}

        {!isEmpty(providerData.membershipsAffiliation) && (
          <>
            <Typography
              variant="h3"
              tabIndex={0}
              aria-label={"Memberships and Afilliations"}
            >
              Memberships and Afilliations
            </Typography>
            <Box className={styles.educationContainer}>
              {providerData.membershipsAffiliation.map((membership, index) => {
                return (
                  <Typography key={index} variant="body2" tabIndex={0}>
                    {membership}
                  </Typography>
                );
              })}
            </Box>
          </>
        )}
      </Stack>
    </Box>
  );
}
