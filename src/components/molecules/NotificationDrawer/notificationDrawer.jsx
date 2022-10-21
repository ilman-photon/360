import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { colors } from "../../../styles/theme";
import { useState } from "react";
import styled from "@emotion/styled";
import NotificationItem from "../../atoms/NotificationItem/notificationItem";

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  textTransform: "none",
  fontSize: "14px",
  "&.MuiTab-root.Mui-selected": {
    color: "#003B4A",
  },
}));

const NotificationDrawer = ({
  opened = false,
  loading = true,
  notifications = [],
  onDrawerClose = () => {
    // This is intentional
  },
  onMarkAllAsRead = () => {
    // This is intentional
  },
  onMarkAsRead = () => {
    // This is intentional
  },
}) => {
  const [activeTabs, setActiveTabs] = useState(0);
  return (
    <Drawer
      sx={{
        width: "100vw",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: { xs: "100vw", sm: "608px" },
          p: 2,
          boxSizing: "border-box",
        },
      }}
      // variant="persistent"
      anchor="right"
      open={opened}
    >
      {/* drawer header */}
      <Stack>
        <IconButton onClick={onDrawerClose} sx={{ ml: "auto", p: 0 }}>
          <CloseOutlinedIcon />
        </IconButton>
        <Typography variant="headlineH3" color={colors.darkGreen}>
          Notifications and alerts
        </Typography>
      </Stack>

      <Divider
        sx={{ my: "10px", border: "solid 1px", borderColor: colors.dark1 }}
      />

      {/* drawer content */}
      <Tabs
        value={activeTabs}
        onChange={(_evt, val) => {
          setActiveTabs(Number(val));
        }}
        textColor="inherit"
        variant="fullWidth"
        TabIndicatorProps={{
          style: {
            backgroundColor: colors.teal,
            height: "5px",
          },
        }}
      >
        <StyledTab value={0} label="New" />
        <StyledTab value={1} label="Read" />
      </Tabs>
      <Divider
        sx={{ mt: 0, mb: 2, border: "solid 1px", borderColor: colors.dark1 }}
      />

      {loading ? (
        [...Array(4)].map((_, i) => (
          <Skeleton
            data-testid="skeleton-loading"
            key={i}
            variant="rounded"
            width={"100%"}
            height={100}
            sx={{ mb: "10px" }}
          />
        ))
      ) : (
        <>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ mb: "10px" }}
          >
            <Typography
              variant="headlineH4"
              sx={{ color: colors.darkGreen, fontWeight: 700 }}
            >
              {activeTabs === 0 ? "New" : "Read"}
            </Typography>
            {activeTabs === 0 && (
              <Typography
                variant="bodyLinkRegular"
                sx={{ fontSize: "18px", cursor: "pointer" }}
                onClick={onMarkAllAsRead}
              >
                Mark all as read
              </Typography>
            )}
          </Stack>

          {notifications.length > 0 ? (
            <div
              style={{ flex: 1, overflow: "auto" }}
              className="hide-scrollbar"
            >
              <Stack spacing="10px">
                {notifications
                  .filter((v) => {
                    if (activeTabs === 0) return !v.isRead;
                    else return v.isRead;
                  })
                  .map((item, index) => {
                    return (
                      <NotificationItem
                        key={index}
                        isRead={item.isRead}
                        data={item}
                        onClick={() => onMarkAsRead(item.id)}
                      />
                    );
                  })}
              </Stack>
            </div>
          ) : (
            <Box sx={{ backgroundColor: "#f2f7f7", p: 1 }}>
              <Typography variant="headlineH4" sx={{ fontWeight: 400 }}>
                You have no {activeTabs === 0 ? "new" : "read"} notifications or
                alerts
              </Typography>
            </Box>
          )}
        </>
      )}
    </Drawer>
  );
};

export default NotificationDrawer;
