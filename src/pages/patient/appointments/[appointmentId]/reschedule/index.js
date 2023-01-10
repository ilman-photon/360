import { Box, Stack } from "@mui/material";
import AppointmentLayout from "../../../../../components/templates/appointmentLayout";
import styles from "./styles.module.scss";
import AppointmentLocation from "../../../../../components/organisms/ScheduleAppointment/appointmentLocation";
import AppointmentDetails from "../../../../../components/organisms/ScheduleAppointment/appointmentDetails";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import store from "../../../../../store/store";
import React from "react";
import {
  editAppointmentScheduleData,
  fetchAppointmentById,
  setFilterData,
} from "../../../../../store/appointment";
import { fetchProviderById } from "../../../../../store/provider";

export default function RescheduleAppointments() {
  const router = useRouter();
  const dispatch = useDispatch();

  const appointmentScheduleData = useSelector((state) => {
    return state.appointment.appointmentSchedule;
  });

  const fetchProviderData = (id) => {
    dispatch(fetchProviderById({ providerId: id })).then(({ payload }) => {
      if (payload) {
        dispatch(
          editAppointmentScheduleData({
            key: "providerInfo",
            value: payload,
          })
        );
      } else {
        router.replace("/patient/appointments");
      }
    });
  };

  React.useEffect(() => {
    const appointmentInfo = appointmentScheduleData.appointmentInfo;
    const providerInfo = appointmentScheduleData.providerInfo;
    const filterData = {
      purposeOfVisit: appointmentInfo.appointmentType,
      date: new Date(appointmentInfo.date),
      insuranceCarrier: Array.isArray(appointmentInfo.insuranceCarrier)
        ? appointmentInfo.insuranceCarrier[0]
        : appointmentInfo.insuranceCarrier,
      location: providerInfo.address ? providerInfo.address.state : "-",
    };

    dispatch(setFilterData(filterData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointmentScheduleData.providerInfo.address]);

  React.useEffect(() => {
    // set appointment scheduleData patientInfo
    dispatch(
      editAppointmentScheduleData({
        key: "patientInfo",
        value: appointmentScheduleData.patientInfo,
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointmentScheduleData]);

  React.useEffect(() => {
    if (appointmentScheduleData.providerInfo._id) {
      fetchProviderData(appointmentScheduleData.providerInfo._id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointmentScheduleData.providerInfo._id]);

  React.useEffect(() => {
    if (router.query.appointmentId) {
      dispatch(
        fetchAppointmentById({ appointmentId: router.query.appointmentId })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  const OnEditClicked = () => {
    router.push("/patient/appointment?reschedule=true");
  };

  return (
    <div className={styles.reschedulePageContainer}>
      <div className={styles.backButtonWrapper}>
        <Box maxWidth={952} px={3} py={5} m="auto" backgroundColor="white">
          <Stack spacing={2}>
            <div className={styles.sectionTitle}>Reschedule Appointment</div>
            <AppointmentLocation
              providerData={appointmentScheduleData.providerInfo}
              OnEditClicked={OnEditClicked}
            />
            <AppointmentDetails
              appointmentData={appointmentScheduleData.appointmentInfo}
              OnEditClicked={OnEditClicked}
            />
          </Stack>
        </Box>
      </div>
    </div>
  );
}

RescheduleAppointments.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        currentActivePage={"Reschedule appointments"}
        backTitle="Back to appointments"
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
