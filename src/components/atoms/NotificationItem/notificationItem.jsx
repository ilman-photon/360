import { Grid, Typography } from "@mui/material";
import { colors } from "../../../styles/theme";
import { getDescription, getIcon, getTime } from "../../../utils/notification";
import styles from "./notificationItem.module.scss";

const NotificationItem = ({
  data = {},
  isRead = true,
  onClick = () => {
    //this is intentional
  },
}) => {
  return (
    <Grid
      container
      columns={12}
      alignItems={"center"}
      className={styles.container}
      onClick={onClick}
      data-testid="notification-item"
    >
      <Grid item xs={1}>
        <div
          data-testid="notification-is-new"
          style={{
            backgroundColor: colors.darkGreen,
            borderRadius: "50%",
            width: 10,
            height: 10,
            visibility: isRead ? "hidden" : "",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <div
          className={styles.notificationTypeContainer}
          data-testid="notification-icon"
        >
          {getIcon(data)}
        </div>
      </Grid>
      <Grid item xs={8} sx={{ pr: 1 }}>
        <Typography
          variant="headlineH4"
          sx={{ fontWeight: 400 }}
          className={"clipped clip-3"}
          data-testid="notification-description"
        >
          {getDescription(data)}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography
          variant="headlineH4"
          sx={{ fontWeight: 400 }}
          data-testid="notification-date"
          value={data.createdAt}
        >
          {getTime(data)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotificationItem;
