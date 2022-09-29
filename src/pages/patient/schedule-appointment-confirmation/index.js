import * as React from "react";
import Cookies from "universal-cookie";
import ModalConfirmContent from "../../../components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmContent";
import styles from "./styles.module.scss";
import BaseHeader from "../../../components/organisms/BaseHeader/baseHeader";

import { Grid, useMediaQuery } from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import { editAppointmentScheduleData } from "../../../store/appointment";
import { fetchUser } from "../../../store/user";

export const ModalConfirmSchedule = () => {
  return (
    <ModalConfirmContent
      OnSetIsOpen={(idx) => setIsOpen(idx)}
      isLoggedIn={isLoggedIn}
      patientData={appointmentScheduleData.patientInfo}
      providerData={appointmentScheduleData.providerInfo}
      appointmentData={appointmentScheduleData.appointmentInfo}
    />
  );
};

export default function ScheduleAppointmentConfirmationPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const dispatch = useDispatch();

  const appointmentScheduleData = useSelector((state) => {
    return state.appointment.appointmentSchedule;
  });

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

  return (
    <section style={{ paddingTop: "64px" }}>
      <BaseHeader />
      <Grid
        width="100%"
        container
        className={styles.container}
        sx={isDesktop ? { p: "24px 40px" } : { p: 0 }}
      >
        <div className={styles.pageWrapper}>
          <Grid
            className={styles.examForComponent}
            p={{ xs: "16px 14px", md: "24px 0 0" }}
            sx={{ width: { xs: "100%", md: "65%" } }}
          >
            <ModalConfirmContent
              isLoggedIn={isLoggedIn}
              patientData={appointmentScheduleData.patientInfo}
              providerData={appointmentScheduleData.providerInfo}
              appointmentData={appointmentScheduleData.appointmentInfo}
            />
          </Grid>
        </div>
      </Grid>
    </section>
  );
}

ScheduleAppointmentConfirmationPage.getLayout = function getLayout(page) {
  return <Provider store={store}>{page}</Provider>;
};
