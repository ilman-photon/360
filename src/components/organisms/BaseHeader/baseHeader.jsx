import * as React from "react";
import { styles } from "./style";
import { Button } from "@mui/material";
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
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import Image from "next/image";
import constants from "../../../utils/constants";
import AccountSidebar from "../../molecules/AccountSidebar/accountSidebar";
import AccountDrawer from "../../molecules/AccountDrawer/accountDrawer";

export default function BaseHeader({
  OnLogoutClicked = () => {
    // This is intended
  },
}) {
  const { HOME_TEST_ID } = constants.TEST_ID;
  const pages = [
    { page: "Appointments", testId: HOME_TEST_ID.appoinments },
    { page: "My Health Chart", testId: HOME_TEST_ID.myhealthchart },
    { page: "My Care Team", testId: HOME_TEST_ID.mycareteam },
    { page: "Lab Results", testId: HOME_TEST_ID.labresults },
    { page: "Billing", testId: HOME_TEST_ID.billing },
  ];
  const [isUserLoged, setUserLoged] = React.useState(false);
  const router = useRouter();
  const logo = "/logo.png";
  React.useEffect(() => {
    const cookies = new Cookies();
    const isLogin = cookies.get("authorized", { path: "/patient" }) === "true";
    setUserLoged(isLogin);
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        {isUserLoged ? (
          <Toolbar disableGutters>
            <Image
              src={logo}
              width="124px"
              height="36px"
              alt="logo"
              style={styles.logoStyled}
            ></Image>
            {/* Menu Desktop*/}
            <Box sx={styles.boxStyled}>
              {pages.map(({ page, testId }) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
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
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                data-testid="user-menu-nav-close"
                onClose={handleCloseNavMenu}
                sx={styles.menuMobile}
              >
                {pages.map(({ page, testId }) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    data-testid={testId}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    variant="text"
                    sx={styles.menuItemMobile}
                    data-testid={HOME_TEST_ID.logout}
                    startIcon={<LogoutIcon />}
                    onClick={() => {
                      OnLogoutClicked(router);
                    }}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Menu> */}
            </Box>
            <AccountDrawer
              data-testid="user-menu-nav-close"
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
                  User Name
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
                // transformOrigin={{
                //   vertical: 'top',
                //   horizontal: 'right',
                // }}
                open={Boolean(anchorElUser)}
                data-testid="user-menu-close"
                onClose={handleCloseUserMenu}
              >
                {
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button
                      variant="text"
                      sx={styles.buttonProfileMenu}
                      data-testid={HOME_TEST_ID.logout}
                      startIcon={<LogoutIcon />}
                      onClick={() => {
                        OnLogoutClicked(router);
                      }}
                    >
                      Logout
                    </Button>
                  </MenuItem>
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
              alt="logo"
              quality={100}
              style={styles.logoStyled}
            ></Image>
          </Toolbar>
        )}
      </Container>
    </AppBar>
  );
}
