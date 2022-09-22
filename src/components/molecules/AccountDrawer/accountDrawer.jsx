import { Box, Button, IconButton, Slide, Stack } from "@mui/material";
import SwipeableDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styles from "./accountDrawer.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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
      icon: <AutoAwesomeMosaicOutlinedIcon />,
    },
    {
      label: "Appointments",
      value: "appointments",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      label: "Medical Record",
      value: "medical",
      icon: <CreateNewFolderOutlinedIcon />,
    },
    {
      label: "Documents",
      value: "documents",
      icon: <DescriptionOutlinedIcon />,
    },
  ],
  linkObject = {
    dashboard: [],
    appointments: [],
    medical: [
      {
        label: "Care Plan",
        href: "/patient/account/medical-record/test-lab-result",
      },
      {
        label: "Prescriptions",
        href: "/patient/account/medical-record/test-lab-result",
      },
      {
        label: "Test & Lab Results",
        href: "/patient/account/medical-record/test-lab-result",
      },
    ],
    documents: [
      {
        label: "Intake Forms",
        href: "/patient/account/documents?type=intake-forms",
      },
      {
        label: "Insurance Documents",
        href: "/patient/account/documents?type=insurance-documents",
      },
      {
        label: "Health Record",
        href: "/patient/account/documents?type=health-record",
      },
    ],
  },
}) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [sidebarLinks, setSidebarLinks] = useState(null);

  const getMenuTitle = () => {
    if (activeMenu) {
      const found = menus.find((v) => v.value === activeMenu);
      if (found) return found.label;
    }
  };

  useEffect(() => {
    setSidebarLinks(linkObject[activeMenu]);
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
        <Slide direction="left" in={activeMenu} mountOnEnter unmountOnExit>
          <ListItemButton sx={{ background: "#F4F4F4" }}>
            <ListItemIcon sx={{ placeContent: "start" }}>
              <KeyboardArrowLeftIcon />
            </ListItemIcon>
            <ListItemText
              primary={getMenuTitle()}
              onClick={() => setActiveMenu(null)}
            />
          </ListItemButton>
        </Slide>

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
                      <ListItemText primary={link.label} />
                      <ListItemIcon sx={{ placeContent: "end" }}>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
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
