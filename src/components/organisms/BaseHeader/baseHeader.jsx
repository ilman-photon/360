import * as React from "react";
import { styles } from "./style";
import { Button, Stack } from "@mui/material";
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

export default function BaseHeader({
  OnLogoutClicked = (router) => {
    logoutProps.OnLogoutClicked(router);
  },
  backTitle,
  onBackClicked,
}) {
  const { HOME_TEST_ID } = constants.TEST_ID;
  const pages = [
    {
      page: "Appointments",
      testId: HOME_TEST_ID.appoinments,
      href: "/patient/appointments",
    },
    // { page: "My Health Chart", testId: HOME_TEST_ID.myhealthchart },
    // { page: "My Care Team", testId: HOME_TEST_ID.mycareteam },
    // { page: "Lab Results", testId: HOME_TEST_ID.labresults },
    // { page: "Billing", testId: HOME_TEST_ID.billing },
  ];
  const [isUserLoged, setUserLoged] = React.useState(false);
  const router = useRouter();
  const logo = "/eyecarelogo.png";
  const userData = useSelector((state) => state.user.userData);
  React.useEffect(() => {
    const cookies = new Cookies();
    const isLogin = cookies.get("authorized", { path: "/patient" }) === "true";
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

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          {isUserLoged ? (
            <Toolbar disableGutters>
              <Image
                src={logo}
                width="124px"
                height="36px"
                style={styles.logoStyled}
                aria-label={"Clarkson Eyecare logo"}
                title="Your Account"
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
              <AccountDrawer
                onClose={() => {
                  setAnchorElNav(false);
                }}
                opened={anchorElNav}
                onLogoutClicked={() => {
                  OnLogoutClicked(router);
                }}
              />
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
                quality={100}
                style={styles.logoStyled}
                aria-label={"Clarkson Eyecare logo"}
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
