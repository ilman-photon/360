import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MessageIcon from "@mui/icons-material/Message";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import timeSince from "./timeSince";
import PrescriptionIcon from "../assets/icons/PrescriptionIcon";
import TestTubeIcon from "../assets/icons/TestTubeIcon";
import GlassesIcon from "../assets/icons/GlassesIcon";
import LensIcon from "../assets/icons/LensIcon";
import MedicationIcon from "../assets/icons/MedicationIcon";
import AlarmIcon from "../assets/icons/AlarmIcon";

export const getPrescriptionType = (string) => {
  return string
    ?.split("Your")[1]
    .split("prescription is now available.")[0]
    .trim();
};

export const getTestLabType = (string) => {
  return (
    string
      ?.split("Your")[1]
      .split("test results are available now.")[0]
      .trim() || "<test/ lab name>"
  );
};

export const getProviderName = (string) => {
  return (
    string?.split("You have received a new message from")[1] ||
    "<Provider name>"
  );
};

const getAppointmentType = (string) => {
  return string?.split("You have an")[1]?.split("appointment")[0]?.trim();
};

const getAppointmentTime = (string) => {
  return string?.split("You have an")[1]?.split("appointment")[1]?.trim();
};

export const getIcon = (data) => {
  switch (data.type) {
    case "prescription":
      return <PrescriptionIcon width={24} height={24} />;
    case "prescription-refill":
      return <PrescriptionIcon width={24} height={24} />;
    case "appointment-first-reminder":
    case "appointment-second-reminder":
    case "appointment":
      return <CalendarTodayIcon width={24} height={24} />;
    case "test-result":
    case "test/lab results":
      return <TestTubeIcon width={24} height={24} />;
    case "message":
      return <MessageIcon width={24} height={24} />;
    case "invoice":
      return <AttachMoneyIcon width={24} height={24} />;
    case "appointment-summary":
      return <CalendarTodayIcon width={24} height={24} />;
    case "prescription-glasses":
      return <GlassesIcon width={24} height={24} />;
    case "prescription-contact":
      return <LensIcon width={24} height={24} />;
    case "prescription-aspirin":
      return <MedicationIcon width={24} height={24} />;
    case "contacts":
    case "contact-lens":
      return <LensIcon width={24} height={24} />;
    case "glasses":
      return <GlassesIcon width={24} height={24} />;
    case "aspirin":
      return <AlarmIcon width={24} height={24} />;
    default:
      return <>-</>;
  }
};

export const getDescription = (data) => {
  const buildPrescriptionNotificationString = (string) => {
    return (
      <>
        Your <b>{getPrescriptionType(string)} prescription</b> is now available
        for pick up.
      </>
    );
  };

  const buildAppointmentNotificationString = (string) => {
    const appointmentTime = getAppointmentTime(string);
    let appointmentTimeText = appointmentTime;
    if (appointmentTime === "tomorrow.") {
      appointmentTimeText = "in the next 24 hours.";
    }
    return (
      <>
        Remember: You have an <b>{getAppointmentType(string)}</b> appointment{" "}
        {appointmentTimeText}
      </>
    );
  };

  switch (data.type) {
    case "prescription":
      return buildPrescriptionNotificationString(data.text);
    case "prescription-refill":
      return (
        <>
          Your requested <b>prescription refill</b> is now available
        </>
      );
    case "appointment-first-reminder":
    case "appointment":
      return buildAppointmentNotificationString(data.text);
    case "appointment-second-reminder":
    case "appointment-one":
      return (
        <>
          Remember{":"} You have an <b>{getAppointmentType(data.text)}</b>{" "}
          appointment {getAppointmentTime(data.text)}
        </>
      );
    case "test-result":
    case "test/lab results":
      return (
        <>
          Your <b>{getTestLabType(data.text)}</b> are available now.
        </>
      );
    case "message":
      return (
        <>
          Please note, you have received a <b>new message</b> from{" "}
          <b>{getProviderName(data.text)}</b>
        </>
      );
    case "invoice":
      return (
        <>
          A new <b>outstanding invoice</b> is available for review.
        </>
      );
    case "appointment-summary":
      return (
        <>
          Your visit summary for your appointment on{" "}
          <b>{"<appointment date>"}</b> is available now.
        </>
      );
    case "prescription-glasses":
      return (
        <>
          You have your <b>glasses prescription</b> available now.
        </>
      );
    case "prescription-contact":
      return (
        <>
          You have your <b>contact lens prescription</b> available now.
        </>
      );
    case "prescription-aspirin":
      return (
        <>
          Your <b>Aspirin prescription</b> is now available for pick up.
        </>
      );
    case "contacts":
    case "contact-lens":
      return (
        <>
          Your <b>Contact Lens</b> are available for pickup at{" "}
          <b>Location, Address. House of Operation</b>.
        </>
      );
    case "glasses":
      return (
        <>
          Your <b>Glasses</b> are available for pickup at{" "}
          <b>Location, Address. House of Operation</b>.
        </>
      );
    case "aspirin":
      return (
        <>
          This is your friendly reminder that is time to take your medication:{" "}
          <b>Aspirin</b>. If you have already taken your prescribed dosage by
          the provider then please disregard this reminder. Thank you.
        </>
      );
    default:
      return <>-</>;
  }
};

export const getTime = (data) => {
  const date = data.createdAt || data._created;
  return timeSince(new Date(date));
};
