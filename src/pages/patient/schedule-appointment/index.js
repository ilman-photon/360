import * as React from "react";
import Cookies from "universal-cookie";
import ScheduleAppointment from "../../../components/organisms/ScheduleAppointment/scheduleAppointment";
import AppointmentLocation from "../../../components/organisms/ScheduleAppointment/appointmentLocation";
import AppointmentDetails from "../../../components/organisms/ScheduleAppointment/appointmentDetails";
import AppointmentForm from "../../../components/organisms/ScheduleAppointment/appointmentForm";
import ModalConfirmation from "../../../components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmation";

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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  DEFAULT_PATIENT_INFO_DATA,
  DEFAULT_USER_SCHEDULE_APPOINTMENT_DATA,
  editAppointmentScheduleData,
  rescheduleAppointment,
  resetAppointmentSchedule,
  resetFilterData,
} from "../../../store/appointment";
import { fetchUser } from "../../../store/user";
import { Api } from "../../api/api";
import MESSAGES from "../../../utils/responseCodes";
import { setFormMessage, resetFormMessage } from "../../../store";
import { TEST_ID } from "../../../utils/constants";
import { StyledButton } from "../../../components/atoms/Button/button";
import { colors } from "../../../styles/theme";
import { useLeavePageConfirm } from "../../../../hooks/useCallbackPrompt";
import {
  mmddyyDateFormat,
  hourDateFormat,
  formatRescheduleDate,
} from "../../../utils/dateFormatter";
import { addToCalendar } from "../../../utils/addToCalendar";
import Head from "next/head";
import { loginProps } from "../login";
const MobileTopBar = (data) => {
  return (
    <Box className={styles.mobileMenuBar}>
      <LabelWithIcon
        error={false}
        label={data.label}
        sx={styles.mobileTextBar}
        primaryColor={true}
      />
      <Button
        variant="text"
        className={styles.editButton}
        onClick={data.onEditClicked}
      >
        <div
          type="link"
          style={{
            marginLeft: 4,
            color: "#008294",
            textDecoration: "underline",
            textTransform: "capitalize",
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
  isReschedule = false,
  dispatch,
  isSubmitLoading,
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
  guestRegister = () => {
    // This is intentional
  },
  formMessage = null,
}) => {
  const [selectedSelf, setSelectedSelf] = React.useState(null);
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });
  const cookies = new Cookies();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const getScheduleButtonText = () => {
    if (isLoggedIn) {
      if (isReschedule) {
        return "Reschedule Appointment";
      } else {
        return t("scheduleAppoinment");
      }
    } else return t("continue");
  };

  const handleFormSubmit = (payload) => {
    dispatch(
      editAppointmentScheduleData({
        key: "patientInfo",
        value: payload,
      })
    );

    guestRegister(payload);
  };

  switch (activeStep) {
    case 1:
      return (
        <>
          <Box
            className={styles.examForComponent}
            p={{ xs: "24px 14px", md: "40px 16px" }}
            sx={{ width: { xs: "100%", md: "952px" } }}
            data-testId="container-step-1"
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
                data-testid={TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.step2Button}
                variant="contained"
                className={styles.continueButton}
                sx={{
                  width: { xs: "100%", md: "222px" },
                  background: "#0095A9",
                  borderRadius: "46px",
                  backgroundColor: "#007E8F",
                }}
                onClick={() => OnsetActiveStep(2)}
              >
                {getScheduleButtonText()}
              </Button>
            </Stack>
          </Box>
        </>
      );
    case 2:
      return (
        <>
          <Grid
            xs={12}
            sm={6}
            lg={8}
            pr={2}
            className={[styles.examForComponent, styles.width50]}
            data-testId="container-step-2"
            p={{ xs: "24px 14px", md: "40px 16px" }}
          >
            <ScheduleAppointment
              patientData={appointmentScheduleData.patientInfo}
              selectedSelf={selectedSelf}
              OnSubmit={(v) => {
                handleFormSubmit(v);
              }}
              OnSetSelectedSelf={(idx) => setSelectedSelf(idx)}
              setActiveStep={(idx) => OnsetActiveStep(idx)}
              formMessage={formMessage}
              isSubmitLoading={isSubmitLoading}
            />
          </Grid>
          <Grid
            sm={6}
            lg={4}
            pl={2}
            sx={{ display: isDesktop ? "block" : "none" }}
            className={[styles.width50, styles.width50]}
          >
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
          <Grid
            xs={12}
            sm={6}
            lg={8}
            pr={2}
            className={[styles.examForComponent, styles.width50]}
            p={{ xs: "24px 14px", md: "40px 16px" }}
          >
            <AppointmentForm
              isForMyself={true}
              patientData={appointmentScheduleData.patientInfo}
              OnSubmitClicked={(v) => {
                handleFormSubmit(v);
                OnClickSchedule(v);
              }}
              OnClickSignIn={() => {
                cookies.set("dashboardState", true, { path: "/patient" });
              }}
              formMessage={formMessage}
              isSubmitLoading={isSubmitLoading}
            />
          </Grid>
          <Grid
            sm={6}
            lg={4}
            pl={2}
            sx={{ display: isDesktop ? "block" : "none" }}
            className={styles.width50}
          >
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

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}

export function handleCreateAppointment(
  isGuestUser = true,
  patientDob = "",
  guestId = "",
  appointmentScheduleData = DEFAULT_USER_SCHEDULE_APPOINTMENT_DATA,
  callbackSuccess = () => {
    //this is intentional
  },
  loginPropsData = {},
  router = null
) {
  const cookies = new Cookies();
  const dateNow = new Date();
  const insurancePayers =
    appointmentScheduleData.appointmentInfo.insuranceCarrier?.id || "";
  const userDataStorage = JSON.parse(localStorage.getItem("userData"));
  const postBody = [
    {
      appointmentDate: mmddyyDateFormat(
        appointmentScheduleData.appointmentInfo.date
      ),
      appointmentLength: 1,
      office: {
        _id: appointmentScheduleData.providerInfo.office.id,
      },
      providerTemplate: {
        _id: appointmentScheduleData.providerInfo.providerTemplateId,
      },
      provider: {
        _id: appointmentScheduleData.providerInfo.providerId,
      },
      appointmentTime: hourDateFormat(
        appointmentScheduleData.appointmentInfo.date
      ),
      appointmentType: {
        code: appointmentScheduleData.appointmentInfo.appointmentType,
      },
      patient: {
        _id: guestId || userDataStorage?.patientId,
      },
      patientDob: patientDob
        ? mmddyyDateFormat(patientDob)
        : mmddyyDateFormat(appointmentScheduleData.patientInfo.dob),
      confirmationDetail: {
        confirmationDate: mmddyyDateFormat(dateNow),
        confirmationTime: hourDateFormat(dateNow),
        confirmationBy: guestId || userDataStorage?.patientId,
      },
      insurancePayers: insurancePayers ? [{ _id: insurancePayers || "" }] : [],
      allowCreate: true,
    },
  ];
  const api = new Api();
  api
    .createAppointment(postBody)
    .then(() => {
      if (isGuestUser && router) {
        router.push("/patient/schedule-appointment-confirmation");
      } else {
        const isLogin = cookies.get("authorized");
        if (!isLogin && loginProps) {
          cookies.set("showModalConfirmation", true, { path: "/patient" });
          loginProps.OnLoginClicked(
            loginPropsData.postBody,
            loginPropsData.router,
            loginPropsData.callBack,
            loginPropsData.dispatch
          );
        } else {
          callbackSuccess();
        }
      }
    })
    .catch((_error) => {
      // Handle error
    });
}

export default function ScheduleAppointmentPage() {
  const [activeStep, setActiveStep] = React.useState(1);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isModalRegistered, setIsModalRegistered] = React.useState(false);
  const [isReschedule, setIsReschedule] = React.useState(false);
  const [modalConfirmReschedule, setModalConfirmReschedule] =
    React.useState(false);

  const [isSubmitLoading, setIsSubmitLoading] = React.useState(false);

  useLeavePageConfirm({ message: "Change that you made might not be saved." });

  const router = useRouter();
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const api = new Api();

  React.useEffect(() => {
    if (activeStep === 2 || activeStep === 3) {
      dispatch(
        editAppointmentScheduleData({
          key: "patientInfo",
          value: DEFAULT_PATIENT_INFO_DATA,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  const steps = [
    "Location",
    "Review",
    "Appointment Details",
    "Contact Info",
    "Confirm",
  ];

  const loginSteps = ["Location", "Review", "Confirm"];

  const headerText = [
    "Location",
    "Review Appointment Details",
    "Provide Basic Information",
    "Contact Information",
    "Confirm",
  ];

  const appointmentScheduleData = useSelector((state) => {
    return state.appointment.appointmentSchedule;
  });
  const formMessage = useSelector((state) => state.index.formMessage);

  React.useEffect(() => {
    if (router.query.reschedule) {
      setIsReschedule(true);
    }
    if (!appointmentScheduleData.appointmentInfo.appointmentType) {
      router.push("/patient/appointment");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const handleEditSchedule = () => {
    router.push({ pathname: "/patient/appointment", query: router.query });
  };

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const formMessageComp = React.useRef(null);

  React.useEffect(() => {
    if (formMessageComp.current) {
      formMessageComp.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  React.useEffect(() => {
    const cookies = new Cookies();
    const isLogin = cookies.get("authorized", { path: "/patient" }) === "true";
    setIsLoggedIn(isLogin);
  }, [appointmentScheduleData]);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const userData = useSelector((state) => state.user.userData);

  React.useEffect(() => {
    if (isLoggedIn && !appointmentScheduleData.patientInfo._id) {
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

  function onSuccessCreateAppointment() {
    setIsModalRegistered(true);
    setActiveStep(4);
    setIsOpen(true);
  }

  function getPatientId(postBody, patientDob, isGuest, password) {
    api
      .getPatientId(postBody)
      .then((response) => {
        dispatch(fetchUser());
        const loginPropsData = {
          postBody: {
            username: postBody.username,
            password: password,
          },
          router: router,
          callBack: () => {
            cookies.set("prevPage", "create-account", { path: "/patient" });
          },
          dispatch: dispatch,
        };
        handleCreateAppointment(
          isGuest,
          patientDob,
          response.ecpPatientId,
          appointmentScheduleData,
          onSuccessCreateAppointment,
          loginPropsData,
          router
        );
      })
      .catch((err) => {
        console.error(err, "getPatientId error");
      });
  }

  const handleGuestRegister = async function (data) {
    setIsSubmitLoading(true);
    const postBody = {
      firstName: data.firstName,
      lastName: data.lastName,
      dob: mmddyyDateFormat(data.dob),
      email: data.email,
      mobileNumber: data.mobile,
      password: data.password,
      preferredCommunication: data.preferredCommunication,
      userType: data.password && data.password !== "" ? "R" : "G",
    };
    dispatch(resetFormMessage());

    try {
      if (!postBody.email) {
        delete postBody.email;
      } else if (!postBody.mobileNumber) {
        delete postBody.mobileNumber;
      }
      await api
        .getResponse("/ecp/patient/userregistration", postBody, "post")
        .then(() => {
          getPatientId(
            {
              username:
                postBody.email || postBody.mobileNumber.replace(/[^\d\+]/g, ""),
            },
            mmddyyDateFormat(data.dob),
            postBody.password.length == 0,
            postBody.password
          );
        });
    } catch (err) {
      if (err.ResponseCode) {
        const errorMessage = MESSAGES[err.ResponseCode || 3500];

        dispatch(
          setFormMessage({
            success: false,
            title: errorMessage.title,
            content: errorMessage.content,
            isBackToLogin: errorMessage.isBackToLogin,
          })
        );
      }
      setIsSubmitLoading(false);
    }
  };

  const handleSetActiveStep = (idx) => {
    if (isLoggedIn) {
      if (isReschedule) {
        setModalConfirmReschedule(true);
      } else {
        handleCreateAppointment(
          false,
          false,
          false,
          appointmentScheduleData,
          onSuccessCreateAppointment
        );
      }
    } else {
      setActiveStep(idx);
      dispatch(resetFormMessage());
    }
  };

  const handleOkClicked = async () => {
    if (isReschedule) {
      await router.push("/patient/appointments");
    } else {
      await router.push("/patient");
    }
    dispatch(resetAppointmentSchedule());
    dispatch(resetFilterData());
  };

  const handleCancelReschedule = () => {
    setModalConfirmReschedule(false);
  };

  const OnConfirmRescheduleAppointment = () => {
    dispatch(
      rescheduleAppointment({
        appointmentId: appointmentScheduleData.appointmentInfo.id,
        payload: appointmentScheduleData,
        providerId: appointmentScheduleData.providerInfo.id,
      })
    ).then(({ payload }) => {
      if (payload.success) {
        setActiveStep(4);
        setIsOpen(true);
      }

      setModalConfirmReschedule(false);
    });
  };

  const ModalConfirmSchedule = () => {
    return (
      <ModalConfirmation
        isLoggedIn={isLoggedIn}
        isReschedule={isReschedule}
        patientData={appointmentScheduleData.patientInfo}
        providerData={appointmentScheduleData.providerInfo}
        appointmentData={appointmentScheduleData.appointmentInfo}
        isOpen={isOpen}
        OnOkClicked={handleOkClicked}
        isDesktop={isDesktop}
        onAddToCalendarClicked={addToCalendar}
        isModalRegistered={isModalRegistered}
      />
    );
  };

  return (
    <section>
      <Head>
        <title>{headerText[activeStep]} page</title>
      </Head>

      <BaseHeader />
      {isDesktop ? <AccountTitleHeading title={headerText[activeStep]} /> : ""}
      <StepperAppoinment
        activeStep={activeStep}
        steps={isLoggedIn ? loginSteps : steps}
        ariaLabelText="Review stage in progress bar"
      />
      {activeStep === 2 || activeStep === 3 ? (
        <Grid
          className={styles.mobileTopBar}
          xs={12}
          sx={{ display: isDesktop ? "none" : "block" }}
        >
          <MobileTopBar
            label="51 West 51st street..."
            onEditClicked={handleEditSchedule}
          />
          <MobileTopBar
            label="Sat, Sep 11, 8:30 am EST"
            onEditClicked={handleEditSchedule}
          />
        </Grid>
      ) : null}
      <Grid
        width="100%"
        className={isDesktop ? styles.container : ""}
        p={{ xs: "24px 14px 0", md: "30px 40px 0" }}
        sx={{ justifyContent: "center" }}
        aria-live="polite"
        aria-label={`${headerText[activeStep]} page`}
        ref={formMessageComp}
      >
        <Box className={styles.pageWrapper}>
          <Button
            variant="contained"
            className={[styles.formButton, styles.outlined].join(" ")}
            sx={{
              borderRadius: "46px",
            }}
            data-testId="back-button-test"
            onClick={() => {
              if (activeStep - 1 < 1 || activeStep > 3) {
                handleEditSchedule();
              } else {
                setActiveStep(activeStep - 1);
              }
            }}
            aria-label={"Back"}
            aria-hidden={"false"}
          >
            <ArrowBackIcon className={styles.backIcon} aria-hidden={"false"} />
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
            isReschedule={isReschedule}
            activeStep={activeStep}
            OnsetActiveStep={handleSetActiveStep}
            appointmentScheduleData={appointmentScheduleData}
            OnEditClicked={handleEditSchedule}
            guestRegister={handleGuestRegister}
            formMessage={formMessage}
            isSubmitLoading={isSubmitLoading}
          />
        </div>
      </Grid>

      {activeStep === 4 ? <ModalConfirmSchedule /> : null}

      {/* confirmation dialog */}
      <Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role={"alertdialog"}
        onClose={handleCancelReschedule}
        open={modalConfirmReschedule}
        aria-label={"Are you sure you want to reschedule?"}
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "90%", sm: "500px" },
            maxWidth: { sm: "623px !important" },
          },
          ".MuiDialogActions-root": {
            padding: 2,
          },
        }}
      >
        {!isDesktop && (
          <DialogTitle
            aria-label="Are you sure you want to reschedule?"
            sx={{ padding: 0 }}
            aria-hidden={true}
          />
        )}
        <DialogContent>
          <DialogContentText
            role={"polite"}
            id="alert-dialog-description"
            sx={{ color: colors.darkGreen, fontSize: "22px", fontWeight: 300 }}
          >
            Please confirm that you would like to reschedule your appointment on{" "}
            {formatRescheduleDate(appointmentScheduleData.appointmentInfo.date)}
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Stack direction="row" alignItems="center" spacing={"10px"}>
            <StyledButton
              isModalButton
              size="small"
              mode="secondary"
              data-testid={
                TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
                  .DIALOG_CONFIRMATION_RESCHEDULE.confirmBtn
              }
              onClick={handleCancelReschedule}
              sx={{ fontSize: "14px", px: "20px", py: "11px", height: "40px" }}
            >
              Deny
            </StyledButton>
            <StyledButton
              isModalButton
              size="small"
              mode="primary"
              data-testid={
                TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
                  .DIALOG_CONFIRMATION_RESCHEDULE.denyBtn
              }
              onClick={OnConfirmRescheduleAppointment}
              sx={{ fontSize: "14px", px: "20px", py: "11px", height: "40px" }}
            >
              Reschedule
            </StyledButton>
          </Stack>
        </DialogActions>
      </Dialog>
    </section>
  );
}

ScheduleAppointmentPage.getLayout = function getLayout(page) {
  return <Provider store={store}>{page}</Provider>;
};
