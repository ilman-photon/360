import * as React from "react";
import EyeCareLogo from "../../../assets/icons/eyeCareLogo.svg";
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

const pages = [
  "Appointments",
  "My Health Chart",
  "My Care Team",
  "Lab Results",
  "Billing",
];

export default function BaseHeader({ OnLogoutClicked }) {
  const [isUserLoged, setUserLoged] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const cookies = new Cookies();
    const isLogin = cookies.get("authorized", { path: "/patient" }) === "true";
    setUserLoged(isLogin);
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
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
            <EyeCareLogo sx={styles.logoStyled} />
            {/* Menu Desktop*/}
            <Box sx={styles.boxStyled}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={styles.bottonStyledDesktop}
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
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
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
                onClose={handleCloseNavMenu}
                sx={styles.menuMobile}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    variant="text"
                    sx={styles.menuItemMobile}
                    startIcon={<LogoutIcon />}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Menu>
            </Box>

            {/* profile menu */}
            <Box sx={styles.boxProfileMenuStyles}>
              {/* <Tooltip title="Open settings">
                <Button
                  variant="text"
                  sx={styles.boxButtonStyles}
                  startIcon={<Avatar />}
                  endIcon={<ExpandMoreIcon />}
                  onClick={handleOpenUserMenu}
                >
                  User Name
                </Button>
              </Tooltip> */}
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
                onClose={handleCloseUserMenu}
              >
                {
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button
                      variant="text"
                      sx={styles.buttonProfileMenu}
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
            <EyeCareLogo sx={styles.eyecareLogoToolbarStyled} />
          </Toolbar>
        )}
      </Container>
    </AppBar>
  );
}
