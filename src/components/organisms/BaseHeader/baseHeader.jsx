import * as React from "react";
import { styles } from "./style";
import { Button, Stack, Typography } from "@mui/material";
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
import AccountDrawer from "../../molecules/AccountDrawer/accountDrawer";
import SubNavigation from "../../molecules/SubNavigation/subNavigation";
import { logoutProps } from "../../../utils/authetication";
import { useDispatch, useSelector } from "react-redux";
import MobileNavMenu from "../../molecules/Navbar/MobileNavMenu";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "../../../styles/theme";
import { setUserData } from "../../../store/user";
import Navbar from "../../molecules/Navbar/Navbar";

export default function BaseHeader({
  OnLogoutClicked = (routerInstance) => {
    logoutProps.OnLogoutClicked(routerInstance);
  },
  backTitle,
  onBackClicked,
  isPrescription = false,
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

    const userStorageData = JSON.parse(localStorage.getItem("userProfile"));
    if (userStorageData) {
      dispatch(setUserData(userStorageData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setUser(userData);
  }, [userData]);

  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const prescriptionMenus = [
    {
      name: "Dashboard",
      imgSrc: "/icon-carePlan.png",
    },
    {
      name: "Appointments",
      imgSrc: "/icon-carePlan.png",
    },
    {
      name: "Medical Report",
      imgSrc: "/iconHealthRecord.png",
    },
    {
      name: "Documents",
      imgSrc: "/iconintakeFoms.png",
    },
  ];

  return (
    <>
      <AppBar
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
            <Toolbar disableGutters>
              <Image
                src={logo}
                width={124}
                height={36}
                style={styles.logoStyled}
                aria-label={"Clarkson Eyecare logo"}
                title="Your Account"
                tabIndex={0}
                role={"img"}
              ></Image>
              {/* Menu Desktop*/}
              <Box sx={styles.boxStyled}>
                <IconButton
                  sx={{
                    display: "flex",
                    px: "20px",
                    py: "8px",
                    mr: 5,
                    backgroundColor: colors.teal15,
                    borderRadius: "30px",
                  }}
                >
                  <Image
                    src="/contact-shop-icon.png"
                    alt={"marketplace"}
                    width={16}
                    height={16}
                  />
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      lineHeight: "18px",
                      ml: 1,
                      mr: "12px",
                    }}
                  >
                    Shop for Contacts
                  </Typography>
                  <ArrowRightAltIcon />
                </IconButton>
              </Box>

              {/* Menu Mobile*/}
              <Box sx={styles.boxStyledMobile}>
                <Avatar
                  sx={{
                    background: "#003B4A",
                    alignSelf: "center",
                    width: "24px",
                    height: "24px",
                  }}
                />
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  data-testid="user-menu-nav-open"
                  onClick={() => {
                    setAnchorElNav(true);
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              {isPrescription ? (
                <MobileNavMenu
                  navMenu={prescriptionMenus}
                  isOpen={anchorElNav}
                  onClose={() => {
                    setAnchorElNav(false);
                  }}
                  onLogoutClicked={() => {
                    OnLogoutClicked(router);
                  }}
                />
              ) : (
                <AccountDrawer
                  onClose={() => {
                    setAnchorElNav(false);
                  }}
                  opened={anchorElNav}
                  onLogoutClicked={() => {
                    OnLogoutClicked(router);
                  }}
                />
              )}
              {/* profile menu */}
              <Box sx={styles.boxProfileMenuStyles}>
                <Tooltip title="Username dropdown">
                  <Button
                    variant="text"
                    sx={[styles.boxButtonStyles, styles.userText]}
                    startIcon={<Avatar sx={{ background: "#003B4A" }} />}
                    data-testid="user-menu-open"
                    endIcon={<ExpandMoreIcon />}
                    onClick={handleOpenUserMenu}
                  >
                    {user.name}
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
                  {/* <Stack spacing={2}> */}
                  <MenuItem>
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
                  {/* </Stack> */}
                </Menu>
              </Box>
            </Toolbar>
          ) : (
            <Toolbar disableGutters>
              <Image
                src={logo}
                width="124px"
                height="36px"
                role={"img"}
                quality={100}
                style={styles.logoStyled}
                aria-label={"Clarkson Eyecare logo"}
                tabIndex={0}
              ></Image>
            </Toolbar>
          )}
        </Container>
      </AppBar>
      {showNavbar && <Navbar />}
      {backTitle && (
        <SubNavigation onClick={onBackClicked} backTitle={backTitle} />
      )}
    </>
  );
}
