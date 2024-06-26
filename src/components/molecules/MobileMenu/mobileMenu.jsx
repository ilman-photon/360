import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CarePlanIcon from "../../../assets/icons/CarePlanIcon";
import PrescriptionIcon from "../../../assets/icons/PrescriptionIcon";
import TestLabIcon from "../../../assets/icons/TestLabIcon";
import IntakeFormsIcon from "../../../assets/icons/IntakeFormsIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PayMyBillIcon from "../../../assets/icons/PayMyBillIcon";
import { colors } from "../../../styles/theme";
import { useRouter } from "next/router";
import Image from "next/image";
import { menus } from "../AdminNavbar/adminNavbar";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

export default function MobileMenu({
  isAdmin = false,
  open = false,
  onClose = () => {
    //This is intentional
  },
  onOpen = () => {
    //This is intentional
  },
  onLogout = () => {
    //This is intentional
  },
}) {
  const router = useRouter();
  const typographyStyle = {
    fontFamily: "Museo Sans, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26px",
    letterSpacing: "0.0016em",
    color: "#000000",
  };

  const iconStyle = {
    minWidth: "unset",
    marginRight: "12px",
    "& .MuiSvgIcon-root": {
      fontSize: "28px",
    },
  };

  const menu = !isAdmin
    ? [
        {
          label: "Dashboard",
          href: "/patient",
          icon: (
            <AutoAwesomeMosaicOutlinedIcon sx={{ fill: colors.darkGreen }} />
          ),
        },
        {
          label: "Appointments",
          icon: <CalendarTodayOutlinedIcon sx={{ fill: colors.darkGreen }} />,
          submenu: [
            {
              label: "Find a Doctor",
              href: "/patient/search-doctor",
            },
            {
              label: "Upcoming & Past Appointments",
              href: "/patient/appointments",
            },
          ],
        },
        {
          label: "Health Chart",
          submenu: [
            {
              label: "Care Plan",
              href: "/patient/account/medical-record?type=care-plan-overview",
              icon: <CarePlanIcon sx={{ fill: colors.darkGreen }} />,
            },
            {
              label: "Prescriptions",
              href: "/patient/prescription",
              icon: <PrescriptionIcon sx={{ fill: colors.darkGreen }} />,
            },
            {
              label: "Test & Lab Results",
              href: "/patient/account/medical-record?type=test-lab-result",
              icon: <TestLabIcon sx={{ fill: colors.darkGreen }} />,
            },
          ],
          icon: <CreateNewFolderOutlinedIcon sx={{ fill: colors.darkGreen }} />,
        },
        {
          label: "My Care Team",
          href: "/patient/my-care-team",
          icon: (
            <AutoAwesomeMosaicOutlinedIcon sx={{ fill: colors.darkGreen }} />
          ),
        },
        {
          label: "Pay My Bill",
          submenu: [
            {
              label: "Open Invoices",
              href: `/patient/pay-my-bill?activeTab=${0}`,
              icon: "",
            },
            {
              label: "Invoice History",
              href: `/patient/pay-my-bill?activeTab=${1}`,
              icon: "",
            },
          ],
          icon: <PayMyBillIcon sx={{ fill: colors.darkGreen }} />,
        },
        {
          label: "Messaging",
          href: "/patient/messaging",
          icon: <MessageOutlinedIcon sx={{ fill: colors.darkGreen }} />,
        },
        {
          label: "Documents",
          submenu: [
            {
              label: "Intake Forms",
              href: "/patient/intake-form",
              icon: <IntakeFormsIcon sx={{ fill: colors.darkGreen }} />,
            },
            {
              label: "Health Records",
              href: "/patient/health-record",
              icon: (
                <Box sx={{ lineHeight: "15px" }}>
                  <Image
                    alt=""
                    src={"/iconCarePlanRecord.png"}
                    width={24}
                    height={24}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              ),
            },
            {
              label: "Education Materials",
              href: "/patient/education-materials",
              icon: <SchoolOutlinedIcon sx={{ width: "16px" }} />,
            },
          ],
          icon: <DescriptionOutlinedIcon sx={{ fill: colors.darkGreen }} />,
        },
      ]
    : menus(true);

  const renderMenuList = () => (
    <Box
      sx={{
        width: "85vw",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
      }}
      role="presentation"
    >
      <IconButton
        sx={{
          alignSelf: "end",
          padding: "0 8px",
        }}
        onClick={onClose}
        data-testid="user-menu-nav-close"
        aria-label={"Close"}
      >
        <CloseOutlinedIcon />
      </IconButton>
      <List>
        {menu.map((item, index) => {
          const submenu = item.submenu ? item.submenu : [];
          return (
            <ListItem
              key={index}
              disablePadding
              sx={{
                borderBottom: "solid 0.5px #d4d4d4",
              }}
            >
              {item.href ? (
                <ListItemButton
                  onClick={async () => {
                    await router.push(item.href);
                    onClose();
                  }}
                >
                  <ListItemIcon sx={iconStyle}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      "& .MuiTypography-root": typographyStyle,
                    }}
                  />
                </ListItemButton>
              ) : (
                <Accordion
                  sx={{
                    "&.MuiPaper-root": {
                      boxShadow: "unset",
                      flex: 1,
                    },
                    "& .MuiAccordionSummary-root": {
                      padding: 0,
                    },
                    "& .MuiAccordionSummary-content ": {
                      margin: 0,
                    },
                    "& .Mui-expanded": {
                      margin: "0 !important",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ListItemButton>
                      <ListItemIcon sx={iconStyle}>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        sx={{
                          "& .MuiTypography-root": typographyStyle,
                        }}
                      />
                    </ListItemButton>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      padding: 0,
                      paddingLeft: "24px",
                      backgroundColor: "#EEF5F7",
                    }}
                  >
                    <List sx={{ padding: 0 }}>
                      {submenu.map((subItem, subIndex) => (
                        <ListItem disablePadding key={subIndex}>
                          <ListItemButton
                            onClick={async () => {
                              await router.push(subItem.href);
                              onClose();
                            }}
                          >
                            <ListItemText
                              primary={subItem.label}
                              sx={{
                                "& .MuiTypography-root": typographyStyle,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              )}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      sx={{
        width: "70%",
        ".MuiPaper-root": {
          justifyContent: "space-between",
        },
      }}
    >
      {renderMenuList()}
      <Box
        sx={{
          width: "100%",
          paddingBottom: "16px",
        }}
      >
        <Button
          sx={{
            color: "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 10px 8px 16px",
            width: "216px",
            height: "45px",
            border: "1px solid #000000",
            borderRadius: "28px",
            margin: "auto",
          }}
          onClick={onLogout}
        >
          LOG OUT
        </Button>
      </Box>
    </SwipeableDrawer>
  );
}
