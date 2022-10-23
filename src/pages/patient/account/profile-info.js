import AccountLayout from "../../../components/templates/accountLayout";
import PersonalInformation from "../../../components/organisms/PersonalInformation/personalInformation";
import ContactInformation from "../../../components/organisms/ContactInformation/contactInformation";
import { Grid, Tab, Tabs, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchUser, updateUser } from "../../../store/user";
import store from "../../../store/store";
import { closePageMessage, setPageMessage } from "../../../store";
import { useRouter } from "next/router";
import { Api } from "../../api/api";
import constants from "../../../utils/constants";
import FormMessage from "../../../components/molecules/FormMessage/formMessage";
import { styled } from "@mui/material/styles";

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  textTransform: "none",
  fontSize: "14px",
  "&.MuiTab-root.Mui-selected": {
    color: "#003B4A",
  },
}));

export async function getStaticProps() {
  return {
    props: {
      autoFillAPIToken: process.env.MAPBOX_API_TOKEN,
      googleAPIKey: process.env.GOOGLE_API_KEY,
    },
  };
}
export default function ProfileInformationPage({
  googleAPIKey,
  autoFillAPIToken,
}) {
  const [contactEditing, setContactEditing] = useState(false);
  const [personalEditing, setPersonalEditing] = useState(false);
  const [activeTabs, setActiveTabs] = useState(0);
  const [usStatesList, setUsStatesList] = useState([]);
  const [patientId, setPatientId] = useState(null);

  const userData = useSelector((state) => state.user.userData);
  const pageMessage = useSelector((state) => state.index.pageMessage);

  const dispatch = useDispatch();
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const api = new Api();
  const router = useRouter();

  const onBackButtonEvent = (e) => {
    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    if (!userStorageData) {
      e.preventDefault();
      router.push("/patient/login");
    }
  };

  useEffect(() => {
    window.addEventListener("popstate", onBackButtonEvent);

    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    if (userStorageData) {
      dispatch(fetchUser({ patientId: userStorageData.patientId }));
      setPatientId(userStorageData.patientId);
      fetchUSListOfStates();
    } else {
      router.replace("/patient/login");
    }

    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showSuccessMessage = (message) => {
    dispatch(
      setPageMessage({
        isShow: true,
        content: message || "Your changes were saved",
      })
    );
    setTimeout(() => {
      dispatch(closePageMessage());
    }, 5000);
  };

  const onSavePersonalData = async (postBody) => {
    const { payload } = await dispatch(
      updateUser({ patientId, payload: postBody })
    );
    if (payload.success) {
      showSuccessMessage("Your changes were saved");
      setPersonalEditing(false);
    }
  };

  const onSaveContactData = async (postBody) => {
    const { payload } = await dispatch(
      updateUser({ patientId, payload: postBody })
    );
    if (payload.success) {
      showSuccessMessage("Your changes were saved");
      setContactEditing(false);
    }
  };

  const fetchUSListOfStates = async () => {
    const stateList = await api.getUSListOfStates();
    setUsStatesList(stateList);
  };

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
  const { PERSONAL_INFO_TEST_ID } = constants.TEST_ID;

  return (
    <section>
      <FormMessage
        onClick={() => {
          dispatch(closePageMessage());
        }}
        role="button"
        success={pageMessage.error ? false : true}
        fontTitle={16}
        sx={{
          borderRadius: "0px",
          justifyContent: "center",
          position: "absolute",
          top: "-48px",
          left: 0,
          width: "100%",
          transition: "0.3 s ease-in-out",
          cursor: "pointer",
        }}
      >
        {pageMessage.content}
      </FormMessage>
      {!isDesktop && (
        <Tabs
          sx={{
            backgroundColor: "#F4F4F4",
          }}
          value={activeTabs}
          onChange={(_evt, val) => {
            setActiveTabs(Number(val));
          }}
          textColor="inherit"
          variant="fullWidth"
          TabIndicatorProps={{
            style: { background: "#0095A9", color: "red" },
          }}
        >
          <StyledTab value={0} label="Profile" {...a11yProps(0)} />
          <StyledTab value={1} label="Contact" {...a11yProps(1)} />
        </Tabs>
      )}
      <Grid container spacing={isDesktop ? 2 : 0}>
        <Grid item xs={12} sm={12} lg={6}>
          {isDesktop || activeTabs === 0 ? (
            <>
              <PersonalInformation
                userData={userData}
                isEditing={personalEditing}
                OnEditClicked={(_) => setPersonalEditing(true)}
                OnCancelEditClicked={(_) => setPersonalEditing(false)}
                OnSaveClicked={onSavePersonalData}
                testIds={PERSONAL_INFO_TEST_ID}
              />
            </>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          {isDesktop || activeTabs === 1 ? (
            <>
              <ContactInformation
                userData={userData}
                isEditing={contactEditing}
                OnEditClicked={(_) => setContactEditing(true)}
                OnCancelEditClicked={(_) => setContactEditing(false)}
                OnSaveClicked={onSaveContactData}
                autoFillAPIToken={autoFillAPIToken}
                googleAPIKey={googleAPIKey}
                usStatesList={usStatesList}
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
    <Provider store={store}>
      <AccountLayout currentActivePage={"profile-info"}>{page}</AccountLayout>
    </Provider>
  );
};
