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
} from "../../../store/notification";
import Link from "next/link";
import EcommerceButton from "../../atoms/EcommerceButton/ecommerceButton";
import EcommerceButtonMobile from "../../atoms/EcommerceButton/ecommerceButtonMobile";

export default function BaseHeader({
  OnLogoutClicked = (routerInstance) => {
    logoutProps.OnLogoutClicked(routerInstance);
  },
  backTitle,
  onBackClicked,
  showNavbar = false,
}) {
  const { HOME_TEST_ID } = constants.TEST_ID;
  const [isUserLoged, setUserLoged] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const logo = "/eyecarelogo.png";
  const userData = useSelector((state) => state.user.userData);

  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const cookies = new Cookies();
    const isLogin =
      cookies.get("authorized", { path: "/patient" }) === "true" &&
      !!cookies.get("accessToken");
    setUserLoged(isLogin);

    const userStorageData =
      localStorage.getItem("userProfile") !== "undefined"
        ? JSON.parse(localStorage.getItem("userProfile"))
        : null;
    if (userStorageData) {
      dispatch(setUserData(userStorageData));
    }

    // notifications
    // fetch for every 3 minutes
    const notificationId = setInterval(() => {
      fetchUserNotifications();
    }, 180000);

    // fetch for first time
    fetchUserNotifications();

    // clear interval after unMount
    return () => clearInterval(notificationId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setUser(userData);
  }, [userData]);

  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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

  const fetchUserNotifications = () => {
    setIsNotificationLoading(true);
    dispatch(fetchNotifications());

    setIsNotificationLoading(false);
  };

  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead());
  };

  const handleNotificationItemClicked = (data) => {
    dispatch(markAsReadById(data.id));
    console.log("redirect to:", data.type);
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
          {isUserLoged ? (
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
                <EcommerceButton
                  wrapperStyle={{
                    margin: "12px 16px",
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  Shop for Contacts
                </EcommerceButton>

                {/* notification badge */}
                <IconButton
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
                  {notifications.some((v) => !v.isRead) ? (
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

                {/* Menu Mobile*/}
                <Box sx={styles.boxStyledMobile}>
                  <IconButton
                    size="large"
                    onClick={() => setOpenedProfileDrawer(true)}
                    data-testid={HOME_TEST_ID.header.userAvatar}
                  >
                    <Avatar
                      sx={{
                        background: "#003B4A",
                        alignSelf: "center",
                        width: "24px",
                        height: "24px",
                        mx: 2,
                      }}
                    />
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    data-testid="user-menu-nav-open"
                    onClick={() => {
                      setAnchorElNav(true);
                    }}
                    sx={{ p: 0 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>

                <ProfileDrawer
                  onClose={() => {
                    setOpenedProfileDrawer(false);
                  }}
                  opened={openedProfileDrawer}
                  onLogoutClicked={() => {
                    OnLogoutClicked(router);
                  }}
                />

                <MobileMenu
                  onClose={() => {
                    setAnchorElNav(false);
                  }}
                  open={anchorElNav}
                  onLogout={() => {
                    OnLogoutClicked(router);
                  }}
                ></MobileMenu>

                {/* profile menu */}
                <Box sx={styles.boxProfileMenuStyles}>
                  <Tooltip title="Username dropdown">
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
                    <MenuItem sx={{ mb: 1 }}>
                      <Button
                        variant="text"
                        sx={styles.buttonProfileMenu}
                        data-testid={HOME_TEST_ID.account}
                        onClick={() => {
                          router.push("/patient/account/profile-info");
                        }}
                      >
                        Account
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Button
                        variant="text"
                        sx={styles.buttonProfileMenu}
                        data-testid={HOME_TEST_ID.logout}
                        startIcon={<ExitToAppIcon />}
                        onClick={() => {
                          OnLogoutClicked(router);
                        }}
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
      {isUserLoged && <EcommerceButtonMobile />}
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
