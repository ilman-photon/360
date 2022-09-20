import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import styles from "./styles.module.scss";

const pages = ["Dashboard", "Appointments"];
const expandablePages = ["Medical Record", "Documents"];
const settings = ["Intake forms", "Insurance", "Health Record"];

const Navbar = () => {
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

  const iconintakeFoms = "/iconintakeFoms.png";
  const iconCardinsuranceCard = "/iconCardinsuranceCard.png";
  const iconHealthRecord = "/iconHealthRecord.png";
  const iconcarePlan = "/icon-carePlan.png";
  const iconprescription2 = "/icon-prescription2.png";
  const icontestLabResults = "/icon-testLabResults.png";

  return (
    <AppBar
      position="static"
      sx={{
        background: "#007787",
        height: "43px",
        marginTop: "64px",
        zIndex: "2",
        position: "fixed",
        display: { xs: "none", sm: "block" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: "43px !important" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "none",
                  display: "block",
                  margin: "0 !important",
                }}
              >
                {page}
              </Button>
            ))}
            <Box>
              <Button
                key={"Medical Record"}
                onClick={handleOpenNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "none",
                  display: "flex",
                  margin: "0 !important",
                }}
                endIcon={<ExpandMoreIcon />}
              >
                Medical Record
              </Button>
              <Menu
                sx={{ mt: "40px" }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <MenuItem key={"Care Plan"} onClick={handleCloseNavMenu}>
                  <Image
                    alt=""
                    src={iconcarePlan}
                    width={"16px"}
                    height={"16px"}
                  />
                  <Typography
                    textAlign="center"
                    sx={{
                      margin: "0 10px",
                      fontFamily: "Libre Franklin",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Care Plan
                  </Typography>
                </MenuItem>

                <MenuItem key={"Prescriptions"} onClick={handleCloseNavMenu}>
                  <Image
                    alt=""
                    src={iconprescription2}
                    width={"16px"}
                    height={"16px"}
                  />
                  <Typography
                    textAlign="center"
                    sx={{
                      margin: "0 10px",
                      fontFamily: "Libre Franklin",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Prescriptions
                  </Typography>
                </MenuItem>

                <MenuItem
                  key={"Test & Lab Results"}
                  onClick={handleCloseNavMenu}
                >
                  <Image
                    alt=""
                    src={icontestLabResults}
                    width={"16px"}
                    height={"16px"}
                  />
                  <Typography
                    textAlign="center"
                    sx={{
                      margin: "0 10px",
                      fontFamily: "Libre Franklin",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Test & Lab Results
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box>
              <Button
                key={"Documents"}
                onClick={handleOpenUserMenu}
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "none",
                  display: "flex",
                  margin: "0 !important",
                }}
                endIcon={<ExpandMoreIcon />}
              >
                Documents
              </Button>
              <Menu
                sx={{ mt: "40px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={"Intake forms"} onClick={handleCloseUserMenu}>
                  <Image
                    alt=""
                    src={iconintakeFoms}
                    width={"16px"}
                    height={"16px"}
                  />
                  <Typography
                    textAlign="center"
                    sx={{
                      margin: "0 10px",
                      fontFamily: "Libre Franklin",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Intake forms
                  </Typography>
                </MenuItem>

                <MenuItem key={"Insurance"} onClick={handleCloseUserMenu}>
                  <Image
                    alt=""
                    src={iconCardinsuranceCard}
                    width={"16px"}
                    height={"16px"}
                  />
                  <Typography
                    textAlign="center"
                    sx={{
                      margin: "0 10px",
                      fontFamily: "Libre Franklin",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Insurance
                  </Typography>
                </MenuItem>

                <MenuItem key={"Health Record"} onClick={handleCloseUserMenu}>
                  <Image
                    alt=""
                    src={iconHealthRecord}
                    width={"13.33px"}
                    height={"10.67px"}
                  />
                  <Typography
                    textAlign="center"
                    sx={{
                      margin: "0 10px",
                      fontFamily: "Libre Franklin",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Health Record
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
