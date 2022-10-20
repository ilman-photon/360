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
import { ThemeProvider } from "@mui/material";
import { patientTypography } from "../../../styles/theme";

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

const pagesNext = [
  { href: "/patient/my-care-team", label: "My Care Team" },
  { href: "/patient/messaging", label: "Messaging" },
];

const documents = [
  {
    icon: iconintakeFoms,
    href: "/patient/account/documents?type=intake-forms",
    label: "Intake Forms",
  },
  // {
  //   icon: iconCardinsuranceCard,
  //   href: "/patient/account/documents?type=insurance-documents",
  //   label: "Insurance Documents",
  // },
  // {
  //   icon: iconHealthRecord,
  //   href: "/patient/account/documents?type=health-record",
  //   label: "Health Record",
  // },
];

const medical = [
  {
    icon: iconCarePlan,
    href: "/patient/account/medical-record?type=care-plan-overview",
    label: "Care Plan",
  },
  {
    icon: iconPrescription2,
    href: "/patient/prescription",
    label: "Prescriptions",
  },
  {
    icon: iconTestLabResults,
    href: "/patient/account/medical-record?type=test-lab-result",
    label: "Test & Lab Results",
  },
];

const Navbar = ({ isDashboard = false }) => {
  const [anchorHealth, setAnchorHealth] = React.useState(null);
  const [anchorDocument, setAnchorDocument] = React.useState(null);

  const router = useRouter();

  const isCurrentPath = (href) => {
    return router.pathname === href;
  };
  (function prefetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();

  const handleOpenHealth = (event) => {
    setAnchorHealth(event.currentTarget);
  };
  const handleOpenDocument = (event) => {
    setAnchorDocument(event.currentTarget);
  };

  const handleCloseMenu = (href) => {
    setAnchorHealth(null);
    setAnchorDocument(null);
    if (typeof href === "string") router.push(href);
  };

  const MenuItemLabel = (item, itemIdx) => {
    return (
      <MenuItem
        key={itemIdx}
        onClick={() => handleCloseMenu(item.href)}
        aria-label={`${item.label} menu`}
      >
        <Image alt="" src={item.icon} width={"16px"} height={"16px"} />
        <Typography
          textAlign="center"
          sx={{
            margin: "0 10px",
            fontFamily: "Libre Franklin",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          {item.label}
        </Typography>
      </MenuItem>
    );
  };

  return (
    <ThemeProvider theme={patientTypography}>
      <AppBar
        position="static"
        sx={{
          background: "#007787",
          height: "43px",
          marginTop: isDashboard ? "-16px" : "0px",
          zIndex: "3",
          position: "relative",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: "43px !important" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
                justifyContent: {
                  sm: "space-between",
                  md: "normal",
                },
                gap: {
                  md: "16px",
                },
              }}
            >
              {pages.map((page, pageIdx) => (
                <Button
                  key={pageIdx}
                  onClick={() => router.push(page.href)}
                  aria-label={`${page.label} menu`}
                  sx={{
                    my: 2,
                    color: "white",
                    textTransform: "none",
                    display: "block",
                    margin: "0 !important",
                    borderRadius: "2px 2px 0px 0px",
                    borderTop: "solid 4px transparent",
                    paddingBottom: "1px",
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
                  key={"Health Chart"}
                  onClick={handleOpenHealth}
                  aria-label={`Health Chart menu`}
                  sx={{
                    my: 2,
                    color: "white",
                    textTransform: "none",
                    display: "flex",
                    margin: "0 !important",
                    borderRadius: "2px 2px 0px 0px",
                    borderTop: "solid 4px transparent",
                    paddingBottom: "1px",
                    borderBottom:
                      isCurrentPath("/patient/account/medical-record") ||
                      isCurrentPath("/patient/prescription")
                        ? "solid 4px #D9D9D9"
                        : "solid 4px transparent",
                    // },
                  }}
                  endIcon={<ExpandMoreIcon />}
                >
                  Health Chart
                </Button>
                <Menu
                  sx={{ mt: "40px" }}
                  id="menu-appbar"
                  anchorEl={anchorHealth}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorHealth)}
                  onClose={handleCloseMenu}
                >
                  {medical.map((med, medIdx) => MenuItemLabel(med, medIdx))}
                </Menu>
              </Box>

              {pagesNext.map((page, pageIdx) => (
                <Button
                  key={pageIdx}
                  onClick={() => router.push(page.href)}
                  aria-label={`${page.label} menu`}
                  sx={{
                    my: 2,
                    color: "white",
                    textTransform: "none",
                    display: "block",
                    margin: "0 !important",
                    borderRadius: "2px 2px 0px 0px",
                    borderTop: "solid 4px transparent",
                    paddingBottom: "1px",
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
                  key={"Documents"}
                  aria-label={`Documents menu`}
                  onClick={handleOpenDocument}
                  sx={{
                    my: 2,
                    color: "white",
                    textTransform: "none",
                    display: "flex",
                    margin: "0 !important",
                    borderRadius: "2px 2px 0px 0px",
                    borderTop: "solid 4px transparent",
                    paddingBottom: "1px",
                    borderBottom: isCurrentPath("/patient/account/documents")
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
                  anchorEl={anchorDocument}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorDocument)}
                  onClose={handleCloseMenu}
                >
                  {documents.map((doc, docIdx) => MenuItemLabel(doc, docIdx))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
