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
import Cookies from "universal-cookie";
import moment from "moment";
export default function Appointments() {
  const [modalErrorRequest, setModalErrorRequest] = useState(false);
  const [modalSuccessCancel, setModalSuccessCancel] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
          setIsRequested(true);
          dispatch(setUserAppointmentData(response.appointmentList));
        })
        .catch(function () {
          setIsRequested(true);
          setModalErrorRequest(true);
          //Handle error getAppointments
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
    if (!isRequested && appointments.length === 0) {
      getAppointments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments]);

  const onRescheduleClicked = ({
    appointmentInfo,
    providerInfo = { address: {} },
  }) => {
    if (appointmentInfo) {
      const filterData = {
        purposeOfVisit: appointmentInfo.appointmentType,
        date: new Date(appointmentInfo.date),
        insuranceCarrier: Array.isArray(appointmentInfo.insuranceCarrier)
          ? appointmentInfo.insuranceCarrier[0]
          : appointmentInfo.insuranceCarrier,
        location: providerInfo.address ? providerInfo.address.city : "-",
      };

      const parseDate = new moment(new Date(appointmentInfo.date)).format(
        "YYYY-MM-DD[T]hh:mm:ss"
      );
      const appointmentSchedule = {
        providerInfo: providerInfo,
        patientInfo: userData,
        appointmentInfo: {
          ...appointmentInfo,
          date: parseDate,
        },
      };
      dispatch(setFilterData(filterData));
      dispatch(setAppointmentSchedule(appointmentSchedule));

      router.push("/patient/appointments/1/reschedule");
    } else {
      router.push("/patient");
    }
  };

  const handleClose = () => {
    setModalCancel(false);
  };

  const handleCancelSchedule = (data) => {
    setModalCancel(false);
    const api = new Api();
    const cancelReason =
      data.cancelSchedule === "other" ? data.cancelOther : data.cancelSchedule;
    const postBody = {
      current: {
        state: "CONFIRMED",
        subState: "CREATED",
      },
      target: {
        state: "CANCELLED",
        subState: "NONE",
      },
      reason: cancelReason,
      code: 2,
    };
    api
      .cancelAppointment("5b449b02-fa41-43e0-bdec-e46e6bc7696b", postBody)
      .then(() => {
        setModalSuccessCancel(true);
      })
      .catch(() => {
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
