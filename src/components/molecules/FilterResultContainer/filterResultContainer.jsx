import { Box } from "@mui/system";
import { Grid, Tab, Tabs } from "@mui/material";
import { colors } from "../../../styles/theme";
import PropTypes from "prop-types";
import ItemResult from "../../organisms/ItemResult/ItemResult";
import styles from "./styles.module.scss";
import EmptyResult from "../FilterResult/emptyResult";
import GMaps from "../../organisms/Google/Maps/gMaps";

export const FilterResultContainer = ({
  activeTabs = 0,
  setActiveTabs = () => {
    // This is intentional
  },
  onClickViewAllAvailability = () => {
    // This is intentional
  },
  OnDayClicked = () => {
    // This is intentional
  },
  isDesktop = false,
  filterData = {
    location: "",
    date: "",
    purposeOfVisit: "",
    insuranceCarrier: "",
  },
  providerList = [],
  googleApiKey = "",
  currentDateIndex = 0,
  currentDate = "",
}) => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  function renderItemResult() {
    const indents = [];
    for (let i = 0; i < 3; i++) {
      indents.push(
        <Box key={i}>
          <ItemResult
            keyItem={`${i}-item-filter`}
            onClickViewAllAvailability={onClickViewAllAvailability}
            isDesktop={isDesktop}
            providerData={providerList[i]}
            OnDayClicked={(payload) => {
              OnDayClicked(payload, providerList[i]);
            }}
            currentDateIndex={currentDateIndex}
            currentDate={currentDate}
          />
        </Box>
      );
    }
    return indents;
  }

  return (
    <>
      <Tabs
        sx={{
          display: {
            background: "#fff",
            md: "none",
          },
          textTransform: "capitalize",
          fontFamily: "Libre Franklin, sans-serif",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "0.0016em",
          color: colors.darkGreen,
        }}
        value={activeTabs}
        onChange={(_evt, val) => {
          setActiveTabs(val);
        }}
        textColor="inherit"
        variant="fullWidth"
        TabIndicatorProps={{
          style: {
            backgroundColor: colors.teal,
            height: "5px",
          },
        }}
      >
        <Tab
          value={0}
          label="List View"
          {...a11yProps(0)}
          sx={{ textTransform: "capitalize" }}
          tabIndex={"0"}
        />
        <Tab
          value={1}
          label="Map View"
          {...a11yProps(1)}
          sx={{ textTransform: "capitalize" }}
          tabIndex={"0"}
        />
      </Tabs>
      <Grid
        container
        spacing={0}
        sx={{ backgroundColor: "#fff", flex: 1, overflow: "auto" }}
      >
        {activeTabs === 0 ? (
          <Grid item xs={12} md={6} paddingTop={"16px"}>
            <>
              {/* Handle the empty result after integrate services */}
              {providerList.length > 0 ? (
                <Box className={styles.filterTabsList}>
                  {renderItemResult()}
                </Box>
              ) : (
                <Box
                  sx={{
                    padding: "16px",
                  }}
                >
                  <EmptyResult
                    isEmpty={true}
                    message={
                      "No results found. Please try again with a different search criteria."
                    }
                  />
                </Box>
              )}
            </>
          </Grid>
        ) : (
          <Grid item xs={12} md={6} paddingTop={"16px"}>
            <GMaps
              apiKey={googleApiKey}
              providerListData={providerList}
              OnTimeClicked={OnDayClicked}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default FilterResultContainer;
