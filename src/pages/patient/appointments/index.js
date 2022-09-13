import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import UpcomingAppointment from "../../../components/organisms/UpcomingAppointment/upcomingAppointment";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import PastAppointment from "../../../components/organisms/PastAppointment/pastAppointment";
import styles from "./styles.module.scss";
import AccountTitleHeading from "../../../components/atoms/AccountTitleHeading/accountTitleHeading";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { resetFilterData, setFilterData } from "../../../store/appointment";
import { StyledButton } from "../../../components/atoms/Button/button";
import { colors } from "../../../styles/theme";
import { setUserAppointmentData } from "../../../store/user";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Appointments() {
  // const [appointments, setAppointments] = useState();
  const [modalConfirmReschedule, setModalConfirmReschedule] = useState(false);

  const appointments = useSelector((state) => state.user.userAppointmentData);

  const router = useRouter();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 992px)");

  const getAppointments = () => {
    const api = new Api();
    !appointments.length > 0 &&
      api
        .getAllAppointment()
        .then((response) => {
          dispatch(setUserAppointmentData(response.appointmentList));
          // setAppointments(response);
        })
        .catch(function () {
          //Handle error getAppointments
        });
  };

  useEffect(() => {
    console.log("apponzs", appointments.length);
    if (appointments.length === 0) {
      getAppointments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments]);

  const handleConfirmReschedule = ({
    appointmentInfo,
    providerInfo = { address: {} },
  }) => {
    const payload = {
      purposeOfVisit: appointmentInfo.appointmentType,
      date: new Date(appointmentInfo.date),
      insuranceCarrier: Array.isArray(appointmentInfo.insuranceCarrier)
        ? appointmentInfo.insuranceCarrier[0]
        : appointmentInfo.insuranceCarrier,
      location: providerInfo.address.city,
    };
    dispatch(setFilterData(payload));
    setModalConfirmReschedule(true);
  };

  const handleCancelReschedule = () => {
    dispatch(resetFilterData());
    setModalConfirmReschedule(false);
  };

  const OnConfirmRescheduleAppointment = () => {
    router.push("/patient/appointment?reschedule=true");
  };

  return (
    <>
      <Box className={styles.container}>
        <AccountTitleHeading
          title={"Appointments"}
          sx={{
            textAlign: "left",
            width: isMobile ? "100%" : "auto",
            display: "flex",
            padding: isMobile && "14px 10px",
          }}
        />
        {appointments && (
          <UpcomingAppointment
            data={appointments}
            onRescheduleClicked={handleConfirmReschedule}
          />
        )}
        {appointments && <PastAppointment data={appointments} />}
      </Box>

      {/* confirmation dialog */}
      <Dialog
        onClose={handleCancelReschedule}
        open={modalConfirmReschedule}
        sx={{
          ".MuiPaper-root": {
            minWidth: "500px",
          },
          ".MuiDialogActions-root": {
            padding: 2,
          },
        }}
      >
        <DialogTitle sx={{ color: colors.darkGreen, fontSize: "22px" }}>
          Are you sure you want to reschedule?
        </DialogTitle>
        <DialogActions>
          <Stack direction="row" alignItems="center" spacing={2}>
            <StyledButton
              size="small"
              mode="secondary"
              onClick={handleCancelReschedule}
              sx={{ fontSize: "14px", px: "20px", py: "11px" }}
            >
              Cancel
            </StyledButton>
            <StyledButton
              size="small"
              mode="primary"
              onClick={OnConfirmRescheduleAppointment}
              sx={{ fontSize: "14px", px: "20px", py: "11px" }}
            >
              Reschedule
            </StyledButton>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}

Appointments.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"appointments"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
