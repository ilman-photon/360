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
  Typography,
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
import CustomModal from "../../../components/molecules/CustomModal/customModal";
import FormMessage from "../../../components/molecules/FormMessage/formMessage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { width } from "@mui/system";
export default function Appointments() {
  // const [appointments, setAppointments] = useState();
  const [modalConfirmReschedule, setModalConfirmReschedule] = useState(false);
  const [modalErrorRequest, setModalErrorRequest] = useState(false);
  const [modalSuccessCancel, setModalSuccessCancel] = useState(false);

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
          setModalErrorRequest(true);
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
            onCancelClicked={() => {
              setModalSuccessCancel(true);
            }}
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
            top: "87px",
            position: "absolute",
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
