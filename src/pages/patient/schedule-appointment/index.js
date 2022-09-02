import * as React from "react";
import Cookies from "universal-cookie";
import ScheduleAppointment from "../../../components/organisms/ScheduleAppointment/scheduleAppointment";
import AppointmentLocation from "../../../components/organisms/ScheduleAppointment/appointmentLocation";
import AppointmentDetails from "../../../components/organisms/ScheduleAppointment/appointmentDetails";
import AppointmentForm from "../../../components/organisms/ScheduleAppointment/appointmentForm";
import ModalScheduling from "../../../components/organisms/ScheduleAppointment/ModalScheduling/modalScheduling";
import DrawerScheduling from "../../../components/organisms/ScheduleAppointment/ModalScheduling/drawerScheduling";

import StepperAppoinment from "../../../components/molecules/StepperAppoinment/stepperAppoinment";
import AccountTitleHeading from "../../../components/atoms/AccountTitleHeading/accountTitleHeading";
import styles from "./styles.module.scss";

import BaseHeader from "../../../components/organisms/BaseHeader/baseHeader";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LabelWithIcon } from "../../../components/atoms/LabelWithIcon/labelWithIcon";

import {
  Button,
  Grid,
  Box,
  Divider,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { editAppointmentScheduleData } from "../../../store/appointment";
import { fetchUser } from "../../../store/user";

const MobileTopBar = (data) => {
  return (
    <Box className={styles.mobileMenuBar}>
      <LabelWithIcon
        error={false}
        label={data.label}
        sx={styles.mobileTextBar}
        primaryColor={true}
      />
      <Button variant="text" className={styles.editButton}>
        <div
          type="link"
          style={{
            marginLeft: 4,
            color: "#008294",
            textDecoration: "underline",
          }}
        >
          Edit
        </div>
      </Button>
    </Box>
  );
};

export const PageContent = ({
  activeStep,
  isLoggedIn = false,
  dispatch,
  appointmentScheduleData = {},
  OnsetActiveStep = () => {
    // This is intentional
  },
  OnEditClicked = () => {
    // This is intentional
  },
  OnClickSchedule = () => {
    // This is intentional
  },
}) => {
  const [selectedSelf, setSelectedSelf] = React.useState(1);
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const handleFormSubmit = (payload) => {
    dispatch(
      editAppointmentScheduleData({
        key: "patientInfo",
        value: payload,
      })
    );
    OnsetActiveStep();
  };

  switch (activeStep) {
    case 1:
      return (
        <>
          <Grid
            className={styles.examForComponent}
            p={{ xs: "24px 14px", md: "40px 16px" }}
            sx={{ width: { xs: "100%", md: "65%" } }}
          >
            <AppointmentLocation
              providerData={appointmentScheduleData.providerInfo}
              OnEditClicked={OnEditClicked}
            />
            <AppointmentDetails
              appointmentData={appointmentScheduleData.appointmentInfo}
              OnEditClicked={OnEditClicked}
            />
            <Divider sx={{ mt: 2 }} />
            <Stack sx={{ p: "16px 0", justifyContent: "right" }}>
              <Button
                variant="contained"
                className={styles.continueButton}
                sx={{
                  width: { xs: "100%", md: "222px" },
                  background: "#0095A9",
                  borderRadius: "46px",
                }}
                onClick={() => OnsetActiveStep(2)}
              >
                {isLoggedIn ? t("scheduleAppoinment") : t("continue")}
              </Button>
            </Stack>
          </Grid>
        </>
      );
    case 2:
      return (
        <>
          {" "}
          <Grid
            xs={12}
            md={8}
            pr={2}
            className={styles.examForComponent}
            p={{ xs: "24px 14px", md: "40px 16px" }}
          >
            <ScheduleAppointment
              patientData={appointmentScheduleData.patientInfo}
              selectedSelf={selectedSelf}
              OnSubmit={(v) => {
                handleFormSubmit(v);
                OnsetActiveStep(4);
              }}
              OnSetSelectedSelf={(idx) => setSelectedSelf(idx)}
              setActiveStep={(idx) => OnsetActiveStep(idx)}
              OnClickSchedule={OnClickSchedule}
            />
          </Grid>
          <Grid md={4} pl={2} sx={{ display: { xs: "none", md: "block" } }}>
            <AppointmentLocation
              providerData={appointmentScheduleData.providerInfo}
              OnEditClicked={OnEditClicked}
            />
            <AppointmentDetails
              appointmentData={appointmentScheduleData.appointmentInfo}
              OnEditClicked={OnEditClicked}
            />
          </Grid>
        </>
      );
    case 3:
      return (
        <>
          {" "}
          <Grid
            xs={12}
            md={8}
            pr={2}
            className={styles.examForComponent}
            p={{ xs: "24px 14px", md: "40px 16px" }}
          >
            <AppointmentForm
              isForMyself={true}
              OnClickSchedule={OnClickSchedule}
              patientData={appointmentScheduleData.patientInfo}
              OnSubmit={(v) => {
                handleFormSubmit(v);
                OnsetActiveStep(4);
              }}
            />
          </Grid>
          <Grid md={4} pl={2} sx={{ display: { xs: "none", md: "block" } }}>
            <AppointmentLocation
              providerData={appointmentScheduleData.providerInfo}
              OnEditClicked={OnEditClicked}
            />
            <AppointmentDetails
              appointmentData={appointmentScheduleData.appointmentInfo}
              OnEditClicked={OnEditClicked}
            />
          </Grid>
        </>
      );
    default:
      return null;
  }
};
export default function ScheduleAppointmentPage() {
  const [activeStep, setActiveStep] = React.useState(1);
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const steps = [
    "Location",
    "Review",
    "Appointment Details",
    "Contact Info",
    "Confirm",
  ];

  const headerText = [
    "Location",
    "Review appointment details",
    "Provide basic information",
    "Contact Information",
    "Confirm",
  ];

  const appointmentScheduleData = useSelector((state) => {
    return state.appointment.appointmentSchedule;
  });

  const handleEditSchedule = () => {
    console.log("change schedule data");
    router.push("/patient/appointment");
  };

  const handleClickSchedule = () => {
    setActiveStep(4);
    setIsOpen(true);
  };

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    const cookies = new Cookies();
    const isLogin = cookies.get("authorized", { path: "/patient" }) === "true";
    setIsLoggedIn(isLogin);
  }, []);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const userData = useSelector((state) => state.user.userData);

  React.useEffect(() => {
    console.log({ isLoggedIn });
    if (isLoggedIn) {
      dispatch(
        editAppointmentScheduleData({
          key: "patientInfo",
          value: {
            name: userData.name,
            firstName: userData.firstName,
            lastName: userData.lastName,
            dob: userData.dob,
            phoneNumber: userData.mobile,

            email: userData.email,
            preferredCommunication: userData.preferredCommunication,
          },
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleSetActiveStep = (idx) => {
    if (isLoggedIn) {
      setActiveStep(4);
    } else {
      setActiveStep(idx);
    }
  };

  const modalConfirmSchedule = () => {
    return isDesktop ? (
      <ModalScheduling
        isLoggedIn={isLoggedIn}
        patientData={appointmentScheduleData.patientInfo}
        providerData={appointmentScheduleData.providerInfo}
        isOpen={isOpen}
        OnSetIsOpen={(idx) => setIsOpen(idx)}
      />
    ) : (
      <DrawerScheduling
        isLoggedIn={isLoggedIn}
        patientData={appointmentScheduleData.patientInfo}
        providerData={appointmentScheduleData.providerInfo}
        isOpen={isOpen}
        OnSetIsOpen={(idx) => setIsOpen(idx)}
      />
    );
  };

  return (
    <section style={{ paddingTop: "64px" }}>
      <BaseHeader />
      {isDesktop ? <AccountTitleHeading title={headerText[activeStep]} /> : ""}
      <StepperAppoinment activeStep={activeStep} steps={steps} />
      {activeStep === 2 ? (
        <Grid
          className={styles.mobileTopBar}
          xs={12}
          sx={{ display: { md: "none", xs: "block" } }}
        >
          <MobileTopBar label="51 West 51st street..." />
          <MobileTopBar label="Sat, Sep 11, 8:30 am EST" />
        </Grid>
      ) : null}
      <Grid
        width="100%"
        className={isDesktop ? styles.container : ""}
        p={{ xs: "24px 14px 0", md: "30px 40px 0" }}
        sx={{ justifyContent: "center" }}
      >
        <Box className={styles.pageWrapper}>
          <Button
            variant="contained"
            className={[styles.formButton, styles.outlined].join(" ")}
            sx={{
              borderRadius: "46px",
            }}
            onClick={() => {
              if (activeStep - 1 < 1) {
                handleEditSchedule();
              } else {
                setActiveStep(activeStep - 1);
              }
            }}
          >
            <ArrowBackIcon className={styles.backIcon} />
            &nbsp;Back
          </Button>
        </Box>
      </Grid>
      <Grid
        width="100%"
        container
        className={styles.container}
        sx={isDesktop ? { p: "24px 40px" } : { p: 0 }}
      >
        <div className={styles.pageWrapper}>
          <PageContent
            dispatch={dispatch}
            isLoggedIn={isLoggedIn}
            activeStep={activeStep}
            OnsetActiveStep={handleSetActiveStep}
            appointmentScheduleData={appointmentScheduleData}
            OnEditClicked={handleEditSchedule}
            OnClickSchedule={handleClickSchedule}
          />
        </div>
      </Grid>

      {activeStep === 4 ? modalConfirmSchedule() : null}
    </section>
  );
}

ScheduleAppointmentPage.getLayout = function getLayout(page) {
  return <Provider store={store}>{page}</Provider>;
};
