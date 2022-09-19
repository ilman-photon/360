import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import UpcomingAppointment from "../../../components/organisms/UpcomingAppointment/upcomingAppointment";
import { Typography, Box } from "@mui/material";
import PastAppointment from "../../../components/organisms/PastAppointment/pastAppointment";
import styles from "./styles.module.scss";
import AccountTitleHeading from "../../../components/atoms/AccountTitleHeading/accountTitleHeading";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  setAppointmentSchedule,
  setFilterData,
} from "../../../store/appointment";
import { setUserAppointmentData } from "../../../store/user";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomModal from "../../../components/molecules/CustomModal/customModal";
import FormMessage from "../../../components/molecules/FormMessage/formMessage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colors } from "../../../styles/theme";
import ModalCancelScheduling from "../../../components/organisms/ScheduleAppointment/ModalCancelScheduling/modalCancelScheduling";
export default function Appointments() {
  const [modalErrorRequest, setModalErrorRequest] = useState(false);
  const [modalSuccessCancel, setModalSuccessCancel] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);

  const appointments = useSelector((state) => state.user.userAppointmentData);
  const userData = useSelector((state) => state.user.userData);

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
        })
        .catch(function () {
          setModalErrorRequest(true);
          //Handle error getAppointments
        });
  };

  useEffect(() => {
    if (appointments.length === 0) {
      getAppointments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments]);

  const onRescheduleClicked = ({
    appointmentInfo,
    providerInfo = { address: {} },
  }) => {
    const filterData = {
      purposeOfVisit: appointmentInfo.appointmentType,
      date: new Date(appointmentInfo.date),
      insuranceCarrier: Array.isArray(appointmentInfo.insuranceCarrier)
        ? appointmentInfo.insuranceCarrier[0]
        : appointmentInfo.insuranceCarrier,
      location: providerInfo.address.city,
    };

    const appointmentSchedule = {
      providerInfo: providerInfo,
      patientInfo: userData,
      appointmentInfo: appointmentInfo,
    };
    dispatch(setFilterData(filterData));
    dispatch(setAppointmentSchedule(appointmentSchedule));

    router.push("/patient/appointments/1/reschedule");
  };

  const handleClose = () => {
    setModalCancel(false);
  };

  const handleCancelSchedule = (data) => {
    setModalCancel(false);
    setModalSuccessCancel(true);
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
            onRescheduleClicked={onRescheduleClicked}
            onCancelClicked={() => {
              setModalCancel(true);
            }}
          />
        )}
        {appointments && <PastAppointment data={appointments} />}
      </Box>

      <CustomModal
        buttonText={"OK"}
        onClickButton={() => {
          setModalErrorRequest(false);
        }}
        open={modalErrorRequest}
        sx={{
          "& .MuiPaper-root": {
            top: { xs: "0", md: "166px" },
            position: { xs: "relative", md: "absolute" },
          },
        }}
      >
        <Box marginBottom={"16px"}>
          <Typography
            sx={{
              color: colors.darkGreen,
              fontSize: "22px",
              marginBottom: "19px",
            }}
          >
            Something Went Wrong
          </Typography>
          <FormMessage>Please try again after sometime.</FormMessage>
        </Box>
      </CustomModal>

      <CustomModal
        buttonText={"OK"}
        onClickButton={() => {
          setModalSuccessCancel(false);
        }}
        open={modalSuccessCancel}
        sx={{
          "& .MuiPaper-root": {
            top: { xs: "0", md: "87px" },
            position: { xs: "relative", md: "absolute" },
          },
        }}
      >
        <Box display={"flex"} gap={"12px"}>
          <CheckCircleIcon sx={{ color: colors.green }}></CheckCircleIcon>
          <Typography sx={{ color: colors.darkGreen, fontSize: "22px" }}>
            You’ve successfully cancelled this appointment
          </Typography>
        </Box>
      </CustomModal>

      <ModalCancelScheduling
        isOpen={modalCancel}
        OnClickCancel={handleClose}
        OnCancelClicked={handleCancelSchedule}
      />
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
