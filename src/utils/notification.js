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
    .split("Your")[1]
    .split("prescription is now available.")[0]
    .trim();
};

const getAppointmentType = (string) => {
  return string.split("You have an")[1].split("appointment")[0].trim();
};

export const getIcon = (data) => {
  const getPrescriptionIcon = (string) => {
    const type = getPrescriptionType(string);
    switch (type) {
      default:
        return <PrescriptionIcon width={24} height={24} />;
    }
  };
  switch (data.type) {
    case "prescription":
      return getPrescriptionIcon(data.text);
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
        Your <b>{getPrescriptionType(string)} prescription</b> is available now
      </>
    );
  };
  switch (data.type) {
    case "prescription":
      return buildPrescriptionNotificationString(data.text);
    case "prescription-refill":
      return (
        <>
          Your <b>prescription refill</b> is available now
        </>
      );
    case "appointment-first-reminder":
    case "appointment":
      return (
        <>
          You have an <b>{getAppointmentType(data.text)}</b> appointment in 3
          days.
        </>
      );
    case "appointment-second-reminder":
    case "appointment-one":
      return (
        <>
          You have an <b>{getAppointmentType(data.text)}</b> appointment
          tomorrow.
        </>
      );
    case "test-result":
    case "test/lab results":
      return (
        <>
          Your <b>lab test results</b> are available now.
        </>
      );
    case "message":
      return (
        <>
          You have received a <b>new message</b> from <b>John Roe, O.D.</b>
        </>
      );
    case "invoice":
      return (
        <>
          There’s a new <b>outstanding invoice</b>
        </>
      );
    case "appointment-summary":
      return (
        <>
          Your visit summary for your appointment on <b>Tuesday, May 15</b> is
          available now.
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
          Your <b>Aspirin prescription</b> is now available.
        </>
      );
    case "contacts":
    case "contact-lens":
      return (
        <>
          Your <b>Contact Lens</b> are available for pickup.
        </>
      );
    case "glasses":
      return (
        <>
          Your <b>Glasses</b> are available for pickup.
        </>
      );
    case "aspirin":
      return (
        <>
          Hi! It is time to take your medication: <b>Aspirin</b>
        </>
      );
    default:
      return <>{data.text}</>;
  }
};

export const getTime = (data) => {
  const date = data.createdAt || data._created;
  return timeSince(new Date(date));
};
