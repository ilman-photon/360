import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/router";

const iconintakeFoms = "/iconintakeFoms.png";
const iconCardinsuranceCard = "/iconCardinsuranceCard.png";
const iconHealthRecord = "/iconHealthRecord.png";
const iconCarePlan = "/icon-carePlan.png";
const iconPrescription2 = "/icon-prescription2.png";
const iconTestLabResults = "/icon-testLabResults.png";

const pages = [
  { href: "/patient", label: "Dashboard" },
  { href: "/patient/appointments", label: "Appointments" },
];
const expandablePages = ["Medical Record", "Documents"];
const settings = ["Intake forms", "Insurance", "Health Record"];

const documents = [
  {
    icon: iconintakeFoms,
    href: "/patient/account/documents?type=intake-forms",
    label: "Intake Forms",
  },
  {
    icon: iconCardinsuranceCard,
    href: "/patient/account/documents?type=insurance-documents",
    label: "Insurance Documents",
  },
  {
    icon: iconHealthRecord,
    href: "/patient/account/documents?type=health-record",
    label: "Health Record",
  },
];

const medical = [
  {
    icon: iconCarePlan,
    href: "/patient/account/medical-record?type=care-plan-overview",
    label: "Care Plan",
  },
  {
    icon: iconPrescription2,
    href: "/patient/account/medical-record?type=care-plan-overview",
    label: "Prescriptions",
  },
  {
    icon: iconTestLabResults,
    href: "/patient/account/medical-record?type=test-lab-result",
    label: "Test & Lab Results",
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const router = useRouter();

  const isCurrentPath = (href) => {
    return router.pathname.includes(href);
  };
  (function prefetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (href) => {
    setAnchorElUser(null);
    if (typeof href === "string") router.push(href);
  };

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
            {pages.map((page, pageIdx) => (
              <Button
                key={pageIdx}
                onClick={() => router.push(page.href)}
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "none",
                  display: "block",
                  margin: "0 !important",
                  borderRadius: "2px 2px 0px 0px",
                  borderTop: "solid 4px transparent",
                  borderBottom: isCurrentPath(page.href)
                    ? "solid 4px #D9D9D9"
                    : "solid 4px transparent",
                }}
              >
                {page.label}
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
                  borderRadius: "2px 2px 0px 0px",
                  borderTop: "solid 4px transparent",
                  borderBottom: isCurrentPath("medical-record")
                    ? "solid 4px #D9D9D9"
                    : "solid 4px transparent",
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
                {medical.map((doc, docIdx) => {
                  return (
                    <MenuItem
                      key={docIdx}
                      onClick={() => handleCloseUserMenu(doc.href)}
                    >
                      <Image
                        alt=""
                        src={doc.icon}
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
                        {doc.label}
                      </Typography>
                    </MenuItem>
                  );
                })}
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
                  borderRadius: "2px 2px 0px 0px",
                  borderTop: "solid 4px transparent",
                  borderBottom: isCurrentPath("documents")
                    ? "solid 4px #D9D9D9"
                    : "solid 4px transparent",
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
                {documents.map((doc, docIdx) => {
                  return (
                    <MenuItem
                      key={docIdx}
                      onClick={() => handleCloseUserMenu(doc.href)}
                    >
                      <Image
                        alt=""
                        src={doc.icon}
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
                        {doc.label}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
