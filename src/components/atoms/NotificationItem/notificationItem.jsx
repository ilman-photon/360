import { Grid, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MessageIcon from "@mui/icons-material/Message";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import styles from "./notificationItem.module.scss";
import timeSince from "../../../utils/timeSince";
import PrescriptionIcon from "../../../assets/icons/PrescriptionIcon";
import TestTubeIcon from "../../../assets/icons/TestTubeIcon";
import GlassesIcon from "../../../assets/icons/GlassesIcon";
import LensIcon from "../../../assets/icons/LensIcon";
import MedicationIcon from "../../../assets/icons/MedicationIcon";

const NotificationItem = ({ data = {}, isRead = true }) => {
  const getIcon = () => {
    switch (data.type) {
      case "prescription-refill":
        return <PrescriptionIcon width={24} height={24} />;
      case "appointment":
        return <CalendarTodayIcon width={24} height={24} />;
      case "test-result":
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
      case "contact-lens":
        return <LensIcon width={24} height={24} />;
      case "glasses":
        return <GlassesIcon width={24} height={24} />;
      case "aspirin":
        return <MedicationIcon width={24} height={24} />;
      default:
        return "-";
    }
  };

  const getDescription = () => {
    switch (data.type) {
      case "prescription-refill":
        return (
          <>
            Your <b>prescription refill</b> is available now
          </>
        );
      case "appointment":
        return (
          <>
            You have an <b>eye test appointment</b> in 3 days.
          </>
        );
      case "test-result":
        return (
          <>
            You <b>lab test test results</b> are available now.
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
        return "-";
    }
  };

  const getTime = () => {
    return timeSince(new Date(data.createdAt));
  };

  return (
    <Grid
      container
      columns={12}
      alignItems={"center"}
      className={styles.container}
    >
      <Grid item xs={1}>
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "50%",
            width: 10,
            height: 10,
            visibility: isRead ? "hidden" : "",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <div className={styles.notificationTypeContainer}>{getIcon()}</div>
      </Grid>
      <Grid item xs={8} sx={{ pr: 1 }}>
        <Typography
          variant="headlineH4"
          sx={{ fontWeight: 400 }}
          className={"clipped clip-3"}
        >
          {getDescription()}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="headlineH4" sx={{ fontWeight: 400 }}>
          {getTime()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotificationItem;
