import AccountLayout from "../../../components/templates/accountLayout";
import PersonalInformation from "../../../components/organisms/PersonalInformation/personalInformation";
import ContactInformation from "../../../components/organisms/ContactInformation/contactInformation";
import { Box, Grid, Tab, Tabs, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setUserData } from "../../../store/user";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

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

export async function getStaticProps() {
  return {
    props: {
      autoFillAPIToken: process.env.MAPBOX_API_TOKEN,
    },
  };
}
export default function ProfileInformationPage({ autoFillAPIToken }) {
  const [contactEditing, setContactEditing] = useState(false);
  const [personalEditing, setPersonalEditing] = useState(false);
  const [activeTabs, setActiveTabs] = useState(0);

  const userData = useSelector((state) => state.user.userData);

  const dispatch = useDispatch();
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const onSavePersonalData = (payload) => {
    dispatch(setUserData(payload));
    setPersonalEditing(false);
  };

  const onSaveContactData = (payload) => {
    dispatch(setUserData(payload));
    setContactEditing(false);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    setPersonalEditing(false);
    setContactEditing(false);
  }, [activeTabs]);

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <section>
      <Tabs
        sx={{
          display: {
            md: "none",
          },
        }}
        value={activeTabs}
        onChange={(evt, val) => {
          setActiveTabs(val);
        }}
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab value={0} label="Profile" {...a11yProps(0)} />
        <Tab value={1} label="Contact" {...a11yProps(1)} />
      </Tabs>
      <Grid container spacing={isDesktop ? 2 : 0}>
        <Grid item xs={12} md={6}>
          {isDesktop || activeTabs === 0 ? (
            <>
              <PersonalInformation
                userData={userData}
                isEditing={personalEditing}
                OnEditClicked={(_) => setPersonalEditing(true)}
                OnCancelEditClicked={(_) => setPersonalEditing(false)}
                OnSaveClicked={onSavePersonalData}
              />
            </>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {isDesktop || activeTabs === 1 ? (
            <>
              <ContactInformation
                userData={userData}
                isEditing={contactEditing}
                OnEditClicked={(_) => setContactEditing(true)}
                OnCancelEditClicked={(_) => setContactEditing(false)}
                OnSaveClicked={onSaveContactData}
                autoFillAPIToken={autoFillAPIToken}
              />
            </>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </section>
  );
}

ProfileInformationPage.getLayout = function getLayout(page) {
  return (
    <AccountLayout currentActivePage={"profile-info"}>{page}</AccountLayout>
  );
};
