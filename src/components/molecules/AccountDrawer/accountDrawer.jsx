import { Box } from "@mui/material";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { ThemeProvider, Button } from "@mui/material";

import styles from "./accountDrawer.module.scss";

export const AccountDrawer = ({
  onClose = () => {
    // This is intended
  },
}) => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isAccountDrawer, setIsAccountDrawer] = useState(false);

  const sidebarLinks = [
    { label: "Profile Information", href: "/patient/account/profile-info" },
    { label: "Financial Information", href: "#" },
    { label: "Toggle accounts", href: "#" },
    { label: "Merge accounts", href: "#" },
    { label: "Prescriptions", href: "#" },
    { label: "Insurance documents", href: "/patient/account/insurance-info" },
    { label: "Multi factor authentication", href: "#" },
  ];

  const MuiDrawer = styled(Drawer)(() => ({
    "& .MuiDrawer-paper": {
      width: "85%",
    },
  }));

  const list = () => (
    <Box
      sx={{ width: "100%", padding: "16px" }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      {isAccountDrawer ? (
        <>
          <List>
            <ListItemButton sx={{ background: "#F4F4F4" }} disablePadding>
              <ListItemIcon sx={{ placeContent: "start" }}>
                <KeyboardArrowLeftIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Account"}
                onClick={() => setIsAccountDrawer(false)}
                disablePadding
              />
            </ListItemButton>
            {sidebarLinks.map((list) => (
              <ListItem
                key={list}
                disablePadding
                className={styles.listItemDrawer}
              >
                <ListItemButton href={list.href}>
                  <ListItemText primary={list.label} disablePadding />
                  <ListItemIcon sx={{ placeContent: "end" }}>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <>
          <ListItemButton sx={{ placeContent: "end" }}>
            <CloseIcon onClick={onClose} />
          </ListItemButton>
          <List>
            <ListItem
              key={"Home"}
              disablePadding
              className={styles.listItemDrawer}
            >
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem
              key={"Account"}
              disablePadding
              className={styles.listItemDrawer}
              onClick={() => setIsAccountDrawer(true)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={"Account"} />
              </ListItemButton>
            </ListItem>
          </List>

          <ListItemButton className={styles.logoutButton}>
            <Button
              // onClick={handleCancel}
              variant="contained"
              className={[styles.formButton, styles.outlined].join(" ")}
            >
              LOG OUT
            </Button>
          </ListItemButton>
        </>
      )}
    </Box>
  );

  return (
    <>
      <MuiDrawer
        anchor="right"
        open={true}
        onClose={onClose}
        sx={{ width: "85%" }}
      >
        {list()}
      </MuiDrawer>
    </>
  );
};

export default AccountDrawer;
