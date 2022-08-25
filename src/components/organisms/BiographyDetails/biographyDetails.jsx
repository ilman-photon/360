import { Link, Typography, Stack, Box, Divider } from "@mui/material";
import styles from "./styles.module.scss";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import { useRef } from "react";

export default function BiographyDetails({ profileData }) {
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const insurancesRef = useRef(null);
  const educationRef = useRef(null);

  const aboutMenuRef = useRef(null);
  const locationMenuRef = useRef(null);
  const insurancesMenuRef = useRef(null);
  const educationMenuRef = useRef(null);

  const insurances = [
    "Blue Cross Blue Shield",
    "Cigna",
    "UnitedHeathcare",
    "aaa",
  ];

  const renderInsurances = () => {
    const insurancesLength = insurances.length;
    const isRenderViewAll = insurancesLength > 3;
    return (
      <Box className={styles.insurancesContainer}>
        <ul className={styles.insurancestList}>
          {insurances.map((item, index) => {
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
            if (isRenderViewAll && index !== insurancesLength - 1) {
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
          })}
          {isRenderViewAll && (
            <li>
              <Typography variant="body2">
                16+ more in-network insurances{" "}
                <Link className={styles.viewAllLink}>View All</Link>
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
      top: aboutRef.current.offsetTop - 150,
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

  return (
    <Box className={styles.detailedBio}>
      <Box className={styles.stickyMenu}>
        <Box className={styles.stickyMenuContainer}>
          <Link
            ref={aboutMenuRef}
            className={styles.menuText}
            onClick={onClickAbout}
          >
            About
          </Link>
          <Link
            ref={locationMenuRef}
            className={styles.menuText}
            onClick={onClickLocation}
          >
            Locations
          </Link>
          <Link
            ref={insurancesMenuRef}
            className={styles.menuText}
            onClick={onClickInsurances}
          >
            Insurances
          </Link>
          <Link
            ref={educationMenuRef}
            className={styles.menuText}
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
          About Paul Wagner, MD
        </Typography>
        <Typography variant="body2">
          {
            "Dr. Esfandiari's current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari's knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more"
          }
        </Typography>
        <Typography variant="h3">Gender</Typography>
        <Typography variant="body2">Male</Typography>
        <Typography variant="h3" ref={locationRef}>
          Locations
        </Typography>
        <Box className={styles.mapContainer}>
          <Box className={styles.map}></Box>
          <Box className={styles.mapAddressContainer}>
            <Typography variant="body2" className={styles.mapAddress}>
              {`51 West 51st Street,
                            Floor 3, Suite 320\n
                            Midtown, New York, NY, 10019`}
            </Typography>
            <Box className={styles.getDirectionLinkContainer}>
              <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
              <Link className={styles.getDirectionLink}>Get directions</Link>
            </Box>
          </Box>
        </Box>
        <Typography variant="h3">Languages</Typography>
        <Typography variant="body2">English, Spanish</Typography>
        <Typography variant="h3" ref={insurancesRef}>
          In-network insurances
        </Typography>
        {renderInsurances()}

        <Typography variant="h3" ref={educationRef}>
          Education
        </Typography>
        <Box className={styles.educationContainer}>
          <Typography variant="body2">
            {"New England College of Optometry, Doctor of Optometry"}
          </Typography>
          <Typography variant="body2">
            {"University of California, San Diego (Bachelor's)"}
          </Typography>
        </Box>

        <Typography variant="h3">Memberships and Afilliations</Typography>
        <Box className={styles.educationContainer}>
          <Typography variant="body2">
            {"New England College of Optometry, Doctor of Optometry"}
          </Typography>
          <Typography variant="body2">
            {"University of California, San Diego (Bachelor's)"}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
