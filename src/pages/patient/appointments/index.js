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
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomModal from "../../../components/molecules/CustomModal/customModal";
import FormMessage from "../../../components/molecules/FormMessage/formMessage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colors } from "../../../styles/theme";
import ModalCancelScheduling from "../../../components/organisms/ScheduleAppointment/ModalCancelScheduling/modalCancelScheduling";
import Cookies from "universal-cookie";
import { addToCalendar } from "../../../utils/addToCalendar";
import { appointmentParser } from "../../../utils/appointmentsModel";
import { fetchAppointmentById } from "../../../store/appointment";
export default function Appointments() {
  const [modalErrorRequest, setModalErrorRequest] = useState(false);
  const [modalSuccessCancel, setModalSuccessCancel] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);
  const [isRequestedUpcoming, setIsRequestedUpcoming] = useState(false);
  const [isRequestedPast, setIsRequestedPast] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [upcomingAppointment, setUpcomingAppointment] = useState([]);
  const [pastAppointment, setPastAppointment] = useState([]);
  const [appointmentId, setAppointmentId] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 992px)");

  const appointmentStatus = useSelector((state) => {
    return state.appointment.appointmentSchedule.patientInfo.status;
  });

  const getAppointments = () => {
    const api = new Api();
    api
      .getUpcomingAppointment()
      .then((response) => {
        if (response.count !== 0) {
          const upcomingAppointment = [];
          response.entities.map((data) => {
            const mappedData = appointmentParser(data);
            upcomingAppointment.push(mappedData);
          });
          setUpcomingAppointment(upcomingAppointment);
        }
        setIsRequestedUpcoming(true);
      })
      .catch(function () {
        setIsRequestedUpcoming(true);
        setModalErrorRequest(true);
      });

    api
      .getPastAppointment()
      .then((response) => {
        if (response.count !== 0) {
          const pastAppointment = [];
          response.entities.map((data) => {
            const mappedData = appointmentParser(data);
            pastAppointment.push(mappedData);
          });
          setPastAppointment(pastAppointment);
        }
        setIsRequestedPast(true);
      })
      .catch(function () {
        setIsRequestedPast(true);
        setModalErrorRequest(true);
      });
  };

  useEffect(() => {
    const cookies = new Cookies();
    if (!cookies.get("authorized")) {
      router.push("/patient/login");
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [setIsAuthenticated, router]);

  useEffect(() => {
    if (!isRequestedPast && !isRequestedUpcoming) {
      getAppointments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upcomingAppointment, pastAppointment]);

  const onRescheduleClicked = ({ appointmentId }) => {
    if (appointmentId) {
      router.push(`/patient/appointments/${appointmentId}/reschedule`);
    }
  };

  const onCancelClicked = (data) => {
    setAppointmentId(data.appointmentId);
    dispatch(fetchAppointmentById({ appointmentId: data.appointmentId }));
    setModalCancel(true);
  };

  const handleClose = () => {
    setModalCancel(false);
  };

  const handleCancelSchedule = (data) => {
    const api = new Api();
    const cancelReason =
      data.cancelSchedule === "other" ? data.cancelOther : data.cancelSchedule;
    const postBody = {
      current: {
        state: appointmentStatus,
        subState: appointmentStatus,
      },
      target: {
        state: "CANCELLED",
        subState: "NONE",
      },
      reason: cancelReason,
      code: 2,
    };
    api
      .cancelAppointment(appointmentId, postBody)
      .then(() => {
        setModalSuccessCancel(true);
        setModalCancel(false);
      })
      .catch(() => {
        setModalCancel(false);
        //Handle error cancelAppointment
      });
  };

  return (
    <>
      {!isAuthenticated && (
        <Box ariaLabel={"Appointments page"} className={styles.container}>
          <AccountTitleHeading
            title={"Appointments"}
            isFixed={false}
            sx={
              isMobile && {
                padding: "27px 10px",
              }
            }
          />
          {isRequestedUpcoming && (
            <UpcomingAppointment
              data={upcomingAppointment}
              isMobile={isMobile}
              onRescheduleClicked={onRescheduleClicked}
              onCancelClicked={onCancelClicked}
              onAddToCalendarClicked={addToCalendar}
            />
          )}
          {isRequestedUpcoming && isRequestedPast && (
            <PastAppointment data={pastAppointment} />
          )}
        </Box>
      )}

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
