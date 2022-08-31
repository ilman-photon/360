import { Box } from "@mui/system";
import constants from "../../../utils/constants";
import { StyledButton } from "../../atoms/Button/button";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./filterResultHeading.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

export const FilterResultHeading = ({
  appliedFilter = [],
  numberFilter = 30,
  dateWeek = ["Sep 19", "Sep 20", "Sep 21", "Sep 22", "Sep 23", "Sep 24"],
}) => {
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  const weekColumn = [
    "mondaySchedule",
    "tuesdaySchedule",
    "wednesdaySchedule",
    "thusdaySchedule",
    "fridaySchedule",
    "saturdaySchedule",
  ];

  function renderAppliedFilter() {
    return appliedFilter.map((option, idx) => {
      return (
        <Box className={styles.filterChildButton} key={idx}>
          {option}
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => {
              //TO DO: remove selected filter
            }}
          />
        </Box>
      );
    });
  }
  return (
    <>
      <Box className={styles.filterContainer}>
        <Box className={styles.filterButtonContainer}>
          <StyledButton
            className={styles.filterButton}
            mode={constants.SECONDARY}
            size={constants.SMALL}
            gradient={false}
            data-testid={APPOINTMENT_TEST_ID.filterbtn}
            onClick={() => {
              //TO DO: add functionality for onclick
            }}
          >
            <TuneIcon className={styles.tuneIcon} />
            Filter
            <KeyboardArrowDownIcon className={styles.keydownIcon} />
          </StyledButton>
          {renderAppliedFilter()}
        </Box>
        <Box
          sx={{
            marginTop: "16px",
            display: "grid",
            gridTemplateColumns: "490px 638px",
            justifyContent: "center",
            alignContent: "center",
            gridTemplateRows: "auto",
            gridTemplateAreas: `"filterDetails calenderDetails"`,
          }}
        >
          <Box sx={{ gridArea: "filterDetails" }}>
            <Typography className={styles.filterFound}>
              {`${numberFilter} In-network providers`}
            </Typography>
          </Box>
          <Box
            sx={{
              gridArea: "calenderDetails",
              display: "grid",
              gridTemplateColumns: "3% 94% 3%",
              gridTemplateRows: "auto",
              gridTemplateAreas: `"arrowLeft caledar arrowRight"`,
            }}
          >
            <ArrowBackIosIcon
              sx={{ gridArea: "arrowLeft", margin: "auto", width: "22px" }}
            />
            <Box
              sx={{
                gridArea: "caledar",
                display: "grid",
                gap: 1,
                gridTemplateColumns: "repeat(6, 1fr)",
                justifyContent: "center",
                alignContent: "center",
                gridTemplateRows: "auto",
                gridTemplateAreas: `"mondaySchedule tuesdaySchedule wednesdaySchedule thusdaySchedule fridaySchedule saturdaySchedule"`,
              }}
            >
              {weekColumn.map((option, idx) => {
                return (
                  <Box key={idx} sx={{ gridArea: option, textAlign: "center" }}>
                    <Typography className={styles.calenderDay}>
                      {option.slice(0, 3)}
                    </Typography>
                    <Typography className={styles.calenderDay}>
                      {dateWeek[idx]}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <ArrowForwardIosIcon
              sx={{ gridArea: "arrowRight", margin: "auto", width: "22px" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FilterResultHeading;
