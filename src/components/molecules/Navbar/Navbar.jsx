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
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { patientTypography } from "../../../styles/theme";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const iconintakeFoms = "/iconintakeFoms.png";
const iconHealthRecord = "/iconCarePlanRecord.png";
const iconCarePlan = "/icon-carePlan.png";
const iconPrescription2 = "/icon-prescription2.png";
const iconTestLabResults = "/icon-testLabResults.png";
const iconPayBillInvoices = "/iconPayBillInvoices.png";
const iconInvoiceHistory = "/iconInvoiceHistory.png";
const iconDoctor = "/doctorMenu.png";
const iconAppointments = "/appointmentsMenu.png";

const pages = [{ href: "/patient", label: "Dashboard" }];

const myCareTeam = {
  href: "/patient/my-care-team",
  additional: "/patient/bio/",
  label: "My Care Team",
};

const messaging = { href: "/patient/messaging", label: "Messaging" };

const documents = [
  {
    icon: iconintakeFoms,
    href: "/patient/intake-form",
    label: "Intake Forms",
  },
  {
    label: "Health Records",
    href: "/patient/health-record",
    icon: iconHealthRecord,
  },
  {
    iconMui: <SchoolOutlinedIcon sx={{ width: "16px" }} />,
    href: "/patient/education-materials",
    label: "Education Materials",
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
    href: "/patient/prescription",
    label: "Prescriptions",
  },
  {
    icon: iconTestLabResults,
    href: "/patient/account/medical-record?type=test-lab-result",
    label: "Test & Lab Results",
  },
];

const payMyBill = [
  {
    icon: iconPayBillInvoices,
    href: `/patient/pay-my-bill?activeTab=${0}`,
    label: "View & Pay Open Invoices",
    width: "11px",
    height: "18px",
    margin: "0 10px 0 15px",
  },
  {
    icon: iconInvoiceHistory,
    href: `/patient/pay-my-bill?activeTab=${1}`,
    label: "Invoice History",
  },
];

const appointments = [
  {
    icon: iconDoctor,
    href: "/patient/search-doctor",
    label: "Find a Doctor",
  },
  {
    icon: iconAppointments,
    href: "/patient/appointments",
    label: "Upcoming & Past Appointments",
  },
];

const Navbar = ({ isDashboard = false }) => {
  const [anchorHealth, setAnchorHealth] = React.useState(null);
  const [anchorDocument, setAnchorDocument] = React.useState(null);
  const [anchorPayMyBill, setAnchorPayMyBill] = React.useState(null);
  const [anchorAppointments, setAnchorAppointments] = React.useState(null);

  const router = useRouter();

  const isDesktop = useMediaQuery("(min-width: 834px)");
  const isTablet = useMediaQuery("(max-width: 980px)");

  const isCurrentPath = (href) => {
    return (
      router.pathname === href ||
      (router.pathname.includes(href) && href !== "/patient")
    );
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

  const handleOpenPayMyBill = (event) => {
    setAnchorPayMyBill(event.currentTarget);
  };

  const handleOpenAppointments = (event) => {
    setAnchorAppointments(event.currentTarget);
  };

  const handleCloseMenu = (href) => {
    setAnchorHealth(null);
    setAnchorDocument(null);
    setAnchorAppointments(null);
    setAnchorPayMyBill(null);
    if (typeof href === "string") router.push(href);
  };

  function MenuItemLabel(item, itemIdx) {
    const width = item?.width ? item?.width : "16px";
    const height = item?.height ? item?.height : "16px";
    const margin = item?.margin ? item?.margin : "0 10px";
    return (
      <MenuItem
        key={itemIdx}
        onClick={() => handleCloseMenu(item.href)}
        aria-label={`${item.label} menu`}
      >
        {item.icon && (
          <Image
            alt=""
            src={item?.icon}
            width={width}
            height={height}
            margin={margin}
          />
        )}
        {item?.iconMui}
        <Typography
          textAlign="center"
          sx={{
            margin,
            fontFamily: "Museo Sans",
            fontWeight: "400",
            fontSize: isTablet ? "14px" : "16px",
          }}
        >
          {item.label}
        </Typography>
      </MenuItem>
    );
  }

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
          display: isDesktop ? "block" : "none",
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
                  md: "15px",
                  lg: "16px",
                },
              }}
            >
              {pages.map((page, pageIdx) => (
                <Button
                  key={pageIdx}
                  onClick={() => router.push(page.href)}
                  aria-label={page.label}
                  role={"menu"}
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
                    fontSize: isTablet ? "14px" : "16px",
                  }}
                >
                  {page.label}
                </Button>
              ))}

              <Box>
                <Button
                  onClick={handleOpenAppointments}
                  aria-label={`Appointments dropdown`}
                  role={"menu"}
                  sx={{
                    my: 2,
                    color: "white",
                    textTransform: "none",
                    display: "flex",
                    margin: "0 !important",
                    borderRadius: "2px 2px 0px 0px",
                    borderTop: "solid 4px transparent",
                    paddingBottom: "1px",
                    fontSize: isTablet ? "14px" : "16px",
                    borderBottom:
                      isCurrentPath("/patient/appointments") ||
                      isCurrentPath("/patient/search-doctor")
                        ? "solid 4px #D9D9D9"
                        : "solid 4px transparent",
                    // },
                  }}
                  endIcon={<ExpandMoreIcon />}
                >
                  Appointments
                </Button>
                <Menu
                  sx={{ mt: "40px" }}
                  id="menu-appbar"
                  anchorEl={anchorAppointments}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorAppointments)}
                  onClose={handleCloseMenu}
                >
                  {appointments.map((med, medIdx) =>
                    MenuItemLabel(med, medIdx)
                  )}
                </Menu>
              </Box>

              <Box>
                <Button
                  key={"Health Chart"}
                  onClick={handleOpenHealth}
                  aria-label={`Health Chart dropdown`}
                  role={"menu"}
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
                    fontSize: isTablet ? "14px" : "16px",
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
              <Button
                onClick={() => router.push(myCareTeam.href)}
                aria-label={`${myCareTeam.label} menu`}
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "none",
                  display: "block",
                  margin: "0 !important",
                  borderRadius: "2px 2px 0px 0px",
                  borderTop: "solid 4px transparent",
                  paddingBottom: "1px",
                  fontSize: isTablet ? "14px" : "16px",
                  borderBottom:
                    isCurrentPath(myCareTeam.href) ||
                    isCurrentPath(myCareTeam.additional)
                      ? "solid 4px #D9D9D9"
                      : "solid 4px transparent",
                }}
              >
                {myCareTeam.label}
              </Button>
              <Box>
                <Button
                  key={"PayMyBill"}
                  aria-label={`Pay My Bill menu`}
                  role={"menu"}
                  onClick={handleOpenPayMyBill}
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
                      isCurrentPath(pages.href) ||
                      isCurrentPath(pages.additional)
                        ? "solid 4px #D9D9D9"
                        : "solid 4px transparent",
                    fontSize: isTablet ? "14px" : "16px",
                  }}
                  endIcon={<ExpandMoreIcon />}
                >
                  Pay My Bill
                </Button>
                <Menu
                  sx={{ mt: "40px" }}
                  id="menu-appbar"
                  anchorEl={anchorPayMyBill}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorPayMyBill)}
                  onClose={handleCloseMenu}
                >
                  {payMyBill.map((bill, billIdx) =>
                    MenuItemLabel(bill, billIdx)
                  )}
                </Menu>
              </Box>
              <Button
                onClick={() => router.push(messaging.href)}
                aria-label={`${messaging.label} menu`}
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "none",
                  display: "block",
                  margin: "0 !important",
                  borderRadius: "2px 2px 0px 0px",
                  borderTop: "solid 4px transparent",
                  paddingBottom: "1px",
                  fontSize: isTablet ? "14px" : "16px",
                  borderBottom:
                    isCurrentPath(messaging.href) ||
                    isCurrentPath(messaging.additional)
                      ? "solid 4px #D9D9D9"
                      : "solid 4px transparent",
                }}
              >
                {messaging.label}
              </Button>

              <Box>
                <Button
                  key={"Documents"}
                  aria-label={`Documents dropdown`}
                  role={"menu"}
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
                    borderBottom:
                      isCurrentPath("/patient/education-materials") ||
                      isCurrentPath("/patient/account/documents")
                        ? "solid 4px #D9D9D9"
                        : "solid 4px transparent",
                    fontSize: isTablet ? "14px" : "16px",
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
