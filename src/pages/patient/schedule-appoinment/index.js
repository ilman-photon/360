import * as React from "react";
import ScheduleAppointment from "../../../components/organisms/ScheduleAppointment/scheduleAppointment";
import AppointmentLocation from "../../../components/organisms/ScheduleAppointment/appointmentLocation";
import AppointmentDetails from "../../../components/organisms/ScheduleAppointment/appointmentDetails";
import AppointmentForm from "../../../components/organisms/ScheduleAppointment/appointmentForm";
import StepperAppoinment from "../../../components/molecules/StepperAppoinment/stepperAppoinment";
import AccountTitleHeading from "../../../components/atoms/AccountTitleHeading/accountTitleHeading";

import BaseHeader from "../../../components/organisms/BaseHeader/baseHeader";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LabelWithIcon } from "../../../components/atoms/LabelWithIcon/labelWithIcon";

import { Button, Grid, Box, Divider, useMediaQuery } from "@mui/material";
import { Provider } from "react-redux";
import store from "../../../store/store";
import styles from "./styles.module.scss";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setDummyAppointmentSchedule } from "../../../store/appointment";
import { useRouter } from "next/router";

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
  appointmentScheduleData = {},
  OnsetActiveStep = () => {
    // This is intentional
  },
  OnEditClicked = () => {
    // This is intentional
  },
}) => {
  const [selectedSelf, setSelectedSelf] = React.useState(1);
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  switch (activeStep) {
    case 1:
      return (
        <>
          <Grid
            xs={12}
            className={styles.examForComponent}
            p={{ xs: "24px 14px", md: "40px 16px" }}
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
            <Box sx={{ p: "16px 0", float: "right" }}>
              <Button
                variant="contained"
                className={styles.continueText}
                sx={{
                  width: { xs: "100%", md: "222px" },
                  background: "#0095A9",
                  borderRadius: "46px",
                }}
                onClick={() => OnsetActiveStep(2)}
              >
                {t("continue")}
              </Button>
            </Box>
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
              selectedSelf={selectedSelf}
              OnSetSelectedSelf={(idx) => setSelectedSelf(idx)}
              setActiveStep={(idx) => OnsetActiveStep(idx)}
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
            <AppointmentForm isForMyself={true} />
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

  const router = useRouter();

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

  const appointmentScheduleData = useSelector(
    (state) => state.appointment.appointmentSchedule
  );

  const handleEditSchedule = () => {
    console.log("change schedule data");
    router.push("/patient/appointment");
  };

  // dummy data set, delete later
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setDummyAppointmentSchedule());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        className={isDesktop ? styles.container : ""}
        p={{ xs: "24px 14px 0", md: "30px 240px 0" }}
      >
        <Button
          variant="contained"
          className={[styles.formButton, styles.outlined].join(" ")}
          sx={{
            borderRadius: "46px",
          }}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          <ArrowBackIcon className={styles.backIcon} />
          &nbsp;Back
        </Button>
      </Grid>
      <Grid
        container
        className={styles.container}
        sx={isDesktop ? { p: "24px 240px" } : { p: 0 }}
      >
        <PageContent
          activeStep={activeStep}
          OnsetActiveStep={(idx) => setActiveStep(idx)}
          appointmentScheduleData={appointmentScheduleData}
          OnEditClicked={handleEditSchedule}
        />
      </Grid>
    </section>
  );
}

ScheduleAppointmentPage.getLayout = function getLayout(page) {
  return <Provider store={store}>{page}</Provider>;
};
