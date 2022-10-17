import { Grid, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import styles from "./notificationItem.module.scss";
import timeSince from "../../../utils/timeSince";

const NotificationItem = ({ data = {}, isRead = true }) => {
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
      default:
        return (
          <>
            You <b>lab test test results</b> are available now.
          </>
        );
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
        <div className={styles.notificationTypeContainer}>
          <CalendarTodayIcon width={24} height={24} />
        </div>
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
