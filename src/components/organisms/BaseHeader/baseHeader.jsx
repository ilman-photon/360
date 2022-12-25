import * as React from "react";
import { styles } from "./style";
import { Badge, Button, Stack, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import Image from "next/image";
import constants from "../../../utils/constants";
import ProfileDrawer from "../../molecules/ProfileDrawer/profileDrawer";
import SubNavigation from "../../molecules/SubNavigation/subNavigation";
import { logoutProps } from "../../../utils/authetication";
import { useDispatch, useSelector } from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { colors } from "../../../styles/theme";
import { setUserData } from "../../../store/user";
import Navbar from "../../molecules/Navbar/Navbar";
import MobileMenu from "../../molecules/MobileMenu/mobileMenu";
import NotificationDrawer from "../../molecules/NotificationDrawer/notificationDrawer";
import {
  fetchNotifications,
  markAllAsRead,
  markAsReadById,
  readNotificationItem,
} from "../../../store/notification";
import Link from "next/link";
import EcommerceButton from "../../atoms/EcommerceButton/ecommerceButton";
import EcommerceButtonMobile from "../../atoms/EcommerceButton/ecommerceButtonMobile";
import { StyledButton } from "../../atoms/Button/button";
import { stringAvatar } from "../../../utils/avatar";

export default function BaseHeader({
  OnLogoutClicked = (routerInstance, dispatch) => {
    logoutProps.OnLogoutClicked(routerInstance, dispatch);
  },
  backTitle,
  onBackClicked,
  showNavbar = false,
  isNotShowHeader = false,
  isAdmin = false,
}) {
  const { HOME_TEST_ID } = constants.TEST_ID;
  const [isUserLoged, setUserLoged] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const logo = "/eyecarelogo.png";
  const userData = useSelector((state) => state.user.userData);
  const iconLinkEcomm = "/icon-link-ecomm-mobile.png";
  const iconEyeContact = "/icon-eye-contacts.png";

  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const cookies = new Cookies();
    const isLogin =
      cookies.get("authorized", { path: "/patient" }) === "true" &&
      !!cookies.get("accessToken");
    setUserLoged(isLogin);

    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    setPatientId(userStorageData?.patientId);
    const userStorageProfile =
      localStorage.getItem("userProfile") !== "undefined"
        ? JSON.parse(localStorage.getItem("userProfile"))
        : null;
    if (userStorageProfile) {
      dispatch(setUserData(userStorageProfile));
    }

    // notifications
    let notificationId;
    if (userStorageData?.patientId) {
      // fetch for every 3 minutes
      notificationId = setInterval(() => {
        fetchUserNotifications(userStorageData?.patientId);
      }, 180000);

      // fetch for first time
      fetchUserNotifications(userStorageData?.patientId);
    }

    // clear interval after unMount
    return () => {
      if (notificationId) clearInterval(notificationId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setUser(userData);
  }, [userData]);

  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [patientId, setPatientId] = React.useState(null);
  const [notificationDrawerOpened, setNotificationDrawerOpened] =
    React.useState(false);
  const [isNotificationLoading, setIsNotificationLoading] =
    React.useState(false);

  const notifications = useSelector((state) => state.notification.list);
  const [openedProfileDrawer, setOpenedProfileDrawer] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = ({ href }) => {
    setAnchorElNav(null);
    href && router.push(href);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const fetchUserNotifications = async (patientId) => {
    setIsNotificationLoading(true);
    await dispatch(fetchNotifications({ patientId }));
    setIsNotificationLoading(false);
  };

  const handleMarkAllAsRead = async () => {
    const notificationIds = notifications.map((item) => item._id);
    const { payload } = await dispatch(
      readNotificationItem({ patientId, notificationIds: notificationIds })
    );
    if (payload.success) {
      // after effect to edit state of rawuserinsuranceData manually and rebuild
      dispatch(markAllAsRead());
    }
  };

  const getPathToPrescriptionPage = (tab) => {
    return `/patient/prescription?activeTab=${tab}`;
  };

  const actionNotificationRedirect = (data) => {
    const id = data.typeId;
    let path = "#";
    switch (data.type) {
      case "prescription":
      case "prescription-refill":
        path = "/patient/prescription";
        break;
      case "appointment-first-reminder":
      case "appointment":
      case "appointment-second-reminder":
      case "appointment-one":
        path = `/patient/appointments/detail-appointments/${id}`;
        break;
      case "test-result":
      case "test/lab results":
        path = "/patient/account/medical-record?type=test-lab-result";
        break;
      case "message":
        path = `/patient/message?conversationId=${id}`; // no test data yet
        break;
      case "invoice":
        path = `/patient/pay-my-bill/summary-detail/${id}`;
        break;
      case "appointment-summary":
        break;
      case "prescription-glasses":
      case "glasses":
        path = getPathToPrescriptionPage(0);
        break;
      case "prescription-contact":
      case "contact-lens":
        path = getPathToPrescriptionPage(1);
        break;
      case "prescription-aspirin":
      case "aspirin":
        path = getPathToPrescriptionPage(2);
        break;
    }
    router.push(path);
  };

  const actionNotificationRead = async (notificationId) => {
    const { payload } = await dispatch(
      readNotificationItem({ patientId, notificationIds: [notificationId] })
    );
    if (payload.success) {
      // after effect to edit state of rawuserinsuranceData manually and rebuild
      dispatch(markAsReadById(notificationId));
    }
  };

  const handleNotificationItemClicked = (data) => {
    const id = data.id || data._id;
    if (!data.isRead) {
      actionNotificationRead(id);
    }

    actionNotificationRedirect(data);
    setNotificationDrawerOpened(false);
  };

  return (
    <>
      <AppBar
        data-testid={HOME_TEST_ID.header.index}
        position="relative"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #E0E0E0",
          height: 64,
          zIndex: 10,
        }}
      >
        <Container maxWidth="xl">
          {isUserLoged && !isNotShowHeader ? (
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Link href={"/patient"} role={"none"} tabIndex={0}>
                <Image
                  src={logo}
                  width={124}
                  height={36}
                  style={styles.logoStyled}
                  aria-label={"Clarkson Eyecare logo"}
                  title="Your Account"
                  tabIndex={0}
                  role={"img"}
                  data-testid={HOME_TEST_ID.header.logo}
                ></Image>
              </Link>
              <Stack flexDirection="row" alignItems="center">
                {/* Menu Desktop*/}
                {!isAdmin && (
                  <>
                    <EcommerceButton
                      tabIndex={0}
                      aria-label="Shop for Contacts button"
                      wrapperStyle={{
                        margin: "12px 16px",
                        display: { xs: "none", sm: "flex" },
                      }}
                    >
                      Shop for Contacts
                    </EcommerceButton>
                    {/* Menu Desktop*/}
                    <StyledButton
                      mode={constants.PRIMARY}
                      size={constants.SMALL}
                      gradient={false}
                      data-testid={"Schedule Appointment"}
                      onClick={() => {
                        router.push("/patient/appointment");
                      }}
                      sx={{
                        display: {
                          xs: "none !important",
                          sm: "flex !important",
                        },
                        height: "40px !important",
                        fontFamily: "'Libre Franklin', sans-serif",
                        fontWeight: "400 !important",
                        fontSize: "14px",
                        boxShadow: "none !important",
                      }}
                    >
                      Schedule Appointment
                    </StyledButton>
                    {/* notification badge */}
                    <IconButton
                      tabIndex={0}
                      aria-label="Notifications button"
                      data-testid="notification-badge-icon"
                      sx={{
                        px: { xs: 2, sm: 3 },
                        width: { xs: 24, md: 40 },
                        height: { xs: 24, md: 40 },
                      }}
                      onClick={() => {
                        setNotificationDrawerOpened(true);
                      }}
                    >
                      {notifications && notifications.some((v) => !v.isRead) ? (
                        <Badge
                          color="error"
                          badgeContent={notifications.length > 0 ? " " : null}
                          overlap="circular"
                          sx={{
                            ".MuiBadge-badge": {
                              minWidth: 13.33,
                              height: 13.33,
                            },
                          }}
                        >
                          <NotificationsIcon sx={{ fill: colors.darkGreen }} />
                        </Badge>
                      ) : (
                        <NotificationsIcon sx={{ fill: colors.darkGreen }} />
                      )}
                    </IconButton>
                  </>
                )}

                {/* Menu Mobile*/}
                <Box sx={styles.boxStyledMobile}>
                  {!isAdmin && (
                    <IconButton
                      size="large"
                      onClick={() => setOpenedProfileDrawer(true)}
                      data-testid={HOME_TEST_ID.header.userAvatar}
                    >
                      <Avatar
                        aria-label="User account menu"
                        sx={{
                          background: "#003B4A",
                          alignSelf: "center",
                          width: "24px",
                          height: "24px",
                          mx: 2,
                        }}
                      />
                    </IconButton>
                  )}
                  <IconButton
                    size="large"
                    aria-label="menu icon"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    data-testid="user-menu-nav-open"
                    onClick={() => {
                      setAnchorElNav(true);
                    }}
                    sx={{ p: 0 }}
                  >
                    <MenuIcon tabIndex="0" aria-label="menu icon" />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "flex",
                      md: "none",
                    },
                  }}
                >
                  <Button
                    variant="text"
                    sx={styles.boxButtonStyles}
                    startIcon={
                      <Avatar
                        {...stringAvatar(user.name)}
                        sx={{ background: "#003B4A" }}
                      ></Avatar>
                    }
                    data-testid="user-menu-open"
                    endIcon={<ExpandMoreIcon />}
                    onClick={() => setOpenedProfileDrawer(true)}
                  />

                  <ProfileDrawer
                    onClose={() => {
                      setOpenedProfileDrawer(false);
                    }}
                    opened={openedProfileDrawer}
                    onLogoutClicked={() => {
                      OnLogoutClicked(router, dispatch);
                    }}
                  />
                </Box>

                <MobileMenu
                  onClose={() => {
                    setAnchorElNav(false);
                  }}
                  open={anchorElNav}
                  onLogout={() => {
                    OnLogoutClicked(router, dispatch);
                  }}
                  isAdmin={isAdmin}
                ></MobileMenu>

                {/* profile menu */}
                <Box sx={styles.boxProfileMenuStyles}>
                  <Tooltip
                    title="Username dropdown"
                    PopperProps={{
                      role: "alert",
                    }}
                    aria-label={`Information Icon - Username dropdown`}
                  >
                    <Button
                      variant="text"
                      sx={styles.boxButtonStyles}
                      startIcon={<Avatar sx={{ background: "#003B4A" }} />}
                      data-testid="user-menu-open"
                      endIcon={<ExpandMoreIcon />}
                      onClick={handleOpenUserMenu}
                    >
                      <Typography
                        sx={[
                          styles.userText,
                          {
                            display: {
                              xs: "none",
                              md: "block",
                            },
                          },
                        ]}
                      >
                        {user.name}
                      </Typography>
                    </Button>
                  </Tooltip>
                  <Menu
                    sx={styles.menuProfileMenu}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    keepMounted
                    open={Boolean(anchorElUser)}
                    data-testid="user-menu-close"
                    onClose={handleCloseUserMenu}
                  >
                    {!isAdmin && (
                      <MenuItem
                        sx={{ mb: 1 }}
                        onClick={() => {
                          router.push("/patient/account/profile-info");
                        }}
                      >
                        <Button
                          variant="text"
                          sx={styles.buttonProfileMenu}
                          data-testid={HOME_TEST_ID.account}
                        >
                          Account
                        </Button>
                      </MenuItem>
                    )}
                    <MenuItem
                      onClick={(e) => {
                        OnLogoutClicked(router, dispatch);
                        handleCloseNavMenu(e);
                      }}
                    >
                      <Button
                        variant="text"
                        sx={styles.buttonProfileMenu}
                        data-testid={HOME_TEST_ID.logout}
                        startIcon={<ExitToAppIcon />}
                      >
                        Logout
                      </Button>
                    </MenuItem>
                  </Menu>
                </Box>
              </Stack>
            </Toolbar>
          ) : (
            <Toolbar disableGutters>
              <Link href={"/patient"} role={"none"} tabIndex={0}>
                <Image
                  src={logo}
                  width="124px"
                  height="36px"
                  role={"img"}
                  quality={100}
                  style={styles.logoStyled}
                  aria-label={"Clarkson Eyecare logo"}
                  tabIndex={0}
                  data-testid={HOME_TEST_ID.header.logo}
                ></Image>
              </Link>
            </Toolbar>
          )}
        </Container>
      </AppBar>
      {isUserLoged && (
        <EcommerceButtonMobile
          menu={[
            {
              icon: <Image alt="" src={iconLinkEcomm} width={18} height={18} />,
              text: "Shop for Contacts",
              onClick: () => {
                window.open("https://www.clarksoneyecare.com/");
              },
            },
            {
              icon: (
                <Image alt="" src={iconEyeContact} width={18} height={18} />
              ),
              text: "Schedule Appointment",
              onClick: () => {
                router.push("/patient/appointment");
              },
            },
          ]}
        />
      )}
      {showNavbar && isUserLoged && <Navbar />}
      {backTitle && (
        <SubNavigation onClick={onBackClicked} backTitle={backTitle} />
      )}

      {/* notification drawer */}
      <NotificationDrawer
        opened={notificationDrawerOpened}
        loading={isNotificationLoading}
        onDrawerClose={() => setNotificationDrawerOpened(false)}
        onMarkAllAsRead={handleMarkAllAsRead}
        onItemClicked={handleNotificationItemClicked}
        notifications={notifications}
      />
    </>
  );
}
