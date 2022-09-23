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
import { useSelector } from "react-redux";
import MobileNavMenu from "../../molecules/Navbar/MobileNavMenu";

export default function BaseHeader({
  OnLogoutClicked = (router) => {
    logoutProps.OnLogoutClicked(router);
  },
  backTitle,
  onBackClicked,
  isPrescription = false,
}) {
  const { HOME_TEST_ID } = constants.TEST_ID;
  const pages = [
    {
      page: "Appointments",
      testId: HOME_TEST_ID.appoinments,
      href: "/patient/appointments",
    },
  ];
  const [isUserLoged, setUserLoged] = React.useState(false);
  const router = useRouter();
  const logo = "/eyecarelogo.png";
  const userData = useSelector((state) => state.user.userData);
  React.useEffect(() => {
    const cookies = new Cookies();
    const isLogin =
      cookies.get("authorized", { path: "/patient" }) === "true" ||
      !!cookies.get("accessToken");
    setUserLoged(isLogin);
  }, []);

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

  const test = [
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
        position="fixed"
        sx={{
          backgroundColor: "white",
          "@media print": {
            boxShadow:
              "0px 1px 1px 0px rgb(0 0 0 / 20%), 0px 0px 1px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          },
          height: 64,
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
                tabindex={0}
                role={"img"}
              ></Image>
              {/* Menu Desktop*/}
              <Box sx={styles.boxStyled}>
                {pages.map(({ page, testId, href }) => (
                  <Button
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu({ href });
                    }}
                    sx={styles.bottonStyledDesktop}
                    data-testid={testId}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {/* Menu Mobile*/}
              <Box sx={styles.boxStyledMobile}>
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
                  filter={test}
                  isOpen={anchorElNav}
                  onClose={() => {
                    setAnchorElNav(false);
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
                <Tooltip title="Open settings">
                  <Button
                    variant="text"
                    sx={styles.boxButtonStyles}
                    startIcon={<Avatar />}
                    data-testid="user-menu-open"
                    endIcon={<ExpandMoreIcon />}
                    onClick={handleOpenUserMenu}
                  >
                    {userData.name}
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
                  {
                    <Stack spacing={2}>
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
                    </Stack>
                  }
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
                tabindex={0}
              ></Image>
            </Toolbar>
          )}
        </Container>
      </AppBar>
      {backTitle && (
        <SubNavigation onClick={onBackClicked} backTitle={backTitle} />
      )}
    </>
  );
}
