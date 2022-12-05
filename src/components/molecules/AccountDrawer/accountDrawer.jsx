import { Button, IconButton, Slide, Stack } from "@mui/material";
import SwipeableDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./accountDrawer.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CarePlanIcon from "../../../assets/icons/CarePlanIcon";
import { colors } from "../../../styles/theme";
import PrescriptionIcon from "../../../assets/icons/PrescriptionIcon";
import TestLabIcon from "../../../assets/icons/TestLabIcon";
import IntakeFormsIcon from "../../../assets/icons/IntakeFormsIcon";

export const AccountDrawer = ({
  opened = false,
  onClose = () => {
    // This is intended
  },
  onLogoutClicked = () => {
    // This is intended
  },
  menus = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: <AutoAwesomeMosaicOutlinedIcon sx={{ fill: colors.darkGreen }} />,
    },
    {
      label: "Appointments",
      value: "appointments",
      icon: <CalendarTodayOutlinedIcon sx={{ fill: colors.darkGreen }} />,
    },
    {
      label: "Medical Record",
      value: "medical",
      icon: <CreateNewFolderOutlinedIcon sx={{ fill: colors.darkGreen }} />,
    },
    {
      label: "Documents",
      value: "documents",
      icon: <DescriptionOutlinedIcon sx={{ fill: colors.darkGreen }} />,
    },
  ],
  linkObject = {
    dashboard: [],
    appointments: [],
    medical: [
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
    documents: [
      {
        label: "Intake Forms",
        href: "/patient/account/documents?type=intake-forms",
        icon: <IntakeFormsIcon sx={{ fill: colors.darkGreen }} />,
      },
      // {
      //   label: "Insurance Documents",
      //   href: "/patient/account/documents/insurance-documents",
      // },
      // {
      //   label: "Health Record",
      //   href: "/patient/account/documents/health-record",
      // },
    ],
  },
}) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [sidebarLinks, setSidebarLinks] = useState(null);
  const [haveChildren, setHaveChildren] = useState(false);

  const getMenuTitle = () => {
    if (activeMenu) {
      const found = menus.find((v) => v.value === activeMenu);
      if (found) return found.label;
    }
  };

  useEffect(() => {
    if (activeMenu === "dashboard") {
      onClose();
      router.push("/patient");
      setHaveChildren(false);
    } else if (activeMenu === "appointments") {
      onClose();
      router.push("/patient/appointments");
      setHaveChildren(false);
    } else {
      setHaveChildren(true);
      setSidebarLinks(linkObject[activeMenu]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMenu]);

  const drawerContent = () => (
    <Stack
      sx={{ width: "100vw", padding: "16px", flex: 1 }}
      role="presentation"
    >
      <IconButton sx={{ alignSelf: "end" }} onClick={onClose}>
        <CloseOutlinedIcon />
      </IconButton>
      <List
        sx={{
          flex: 1,
          ".MuiListItem-root": { borderBottomWidth: 1, borderColor: "#F3F3F3" },
        }}
      >
        {haveChildren && (
          <Slide direction="left" in={!!activeMenu} mountOnEnter unmountOnExit>
            <ListItemButton sx={{ background: "#F4F4F4" }}>
              <ListItemIcon sx={{ placeContent: "start", minWidth: "unset" }}>
                <ArrowBackIosIcon sx={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText
                primary={getMenuTitle()}
                onClick={() => setActiveMenu(null)}
                sx={{
                  textAlign: "center",
                  ".css-10hburv-MuiTypography-root": {
                    fontWeight: "500",
                  },
                }}
                primaryTypographyProps={{
                  sx: { textAlign: "center", fontWeight: 600 },
                }}
              />
            </ListItemButton>
          </Slide>
        )}

        <Slide direction="left" in={!sidebarLinks} mountOnEnter unmountOnExit>
          <div>
            {!sidebarLinks &&
              menus.map((menu, idx) => (
                <ListItem
                  key={idx}
                  className={styles.listItemDrawer}
                  sx={{ borderBottomWidth: 1 }}
                >
                  <ListItemButton
                    data-testid="outer-menu-nav-close"
                    onClick={() => setActiveMenu(menu.value)}
                    color={colors}
                  >
                    <>
                      {menu.icon}
                      <ListItemText primary={menu.label} sx={{ ml: 1 }} />
                    </>
                  </ListItemButton>
                </ListItem>
              ))}
          </div>
        </Slide>

        <Slide direction="left" in={!!sidebarLinks} mountOnEnter unmountOnExit>
          <div>
            {sidebarLinks &&
              sidebarLinks.map((link, idx) => (
                <ListItem key={idx} className={styles.listItemDrawer}>
                  <ListItemButton
                    data-testid="user-menu-nav-close"
                    onClick={async () => {
                      await router.push(link.href);
                      onClose();
                    }}
                  >
                    <>
                      {link.icon}
                      <ListItemText primary={link.label} sx={{ ml: 1 }} />
                    </>
                  </ListItemButton>
                </ListItem>
              ))}
          </div>
        </Slide>
      </List>

      <Button
        sx={{
          color: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px 10px 8px 16px",
          width: "216px",
          height: "36px",
          border: "1px solid #000000",
          borderRadius: "28px",
          margin: "auto",
        }}
        onClick={onLogoutClicked}
      >
        LOG OUT
      </Button>
    </Stack>
  );

  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={opened}
        onClose={onClose}
        sx={{ width: "70%" }}
      >
        {drawerContent()}
      </SwipeableDrawer>
    </>
  );
};

export default AccountDrawer;
