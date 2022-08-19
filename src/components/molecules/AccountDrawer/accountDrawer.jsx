import { Box, Button } from "@mui/material";
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

export const AccountDrawer = ({
  opened = false,
  onClose = () => {
    // This is intended
  },
  onLogoutClicked = () => {
    // This is intended
  },
  sidebarLinks = [
    { label: "Profile Information", href: "/patient/account/profile-info" },
    { label: "Financial Information", href: "#" },
    { label: "Toggle accounts", href: "#" },
    { label: "Merge accounts", href: "#" },
    { label: "Prescriptions", href: "#" },
    { label: "Insurance documents", href: "/patient/account/insurance-info" },
    { label: "Multi factor authentication", href: "#" },
  ],
}) => {
  const router = useRouter();

  const drawerContent = () => (
    <Box sx={{ width: "100%", padding: "16px" }} role="presentation">
      <>
        <List>
          <ListItemButton sx={{ background: "#F4F4F4" }}>
            <ListItemIcon sx={{ placeContent: "start" }}>
              <KeyboardArrowLeftIcon />
            </ListItemIcon>
            <ListItemText primary={"Account"} onClick={onClose} />
          </ListItemButton>

          {sidebarLinks.map((link, idx) => (
            <ListItem key={idx} className={styles.listItemDrawer}>
              <ListItemButton
                data-test-id="user-menu-nav-close"
                onClick={() => {
                  router.push(link.href);
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

          <ListItemButton className={styles.logoutButton}>
            <Button onClick={onLogoutClicked} variant="contained">
              LOG OUT
            </Button>
          </ListItemButton>
        </List>
      </>
    </Box>
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
