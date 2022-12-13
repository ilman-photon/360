import { Box, Button, IconButton, Slide, Stack } from "@mui/material";
import SwipeableDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "../AccountDrawer/accountDrawer.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { colors } from "../../../styles/theme";

const ProfileDrawer = ({
  opened = false,
  onClose = () => {
    // This is intended
  },
  onLogoutClicked = () => {
    // This is intended
  },
  menus = [
    {
      label: "Home",
      value: "home",
      icon: <HomeOutlinedIcon sx={{ fill: "#0000008a" }} />,
    },
    {
      label: "Account",
      value: "account",
      icon: <AccountCircleOutlinedIcon sx={{ fill: "#0000008a" }} />,
    },
  ],
  linkObject = {
    home: [],
    account: [
      {
        label: "Profile Information",
        href: "/patient/account/profile-info",
      },
      {
        label: "Insurance documents",
        href: "/patient/account/insurance-info",
      },
      {
        label: "Login & Security",
        href: "/patient/account/login-&-security",
      },
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
    setHaveChildren(false);
    switch (activeMenu) {
      case "home":
        navigateTo("/patient");
        break;
      default:
        setHaveChildren(true);
        setSidebarLinks(linkObject[activeMenu]);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMenu]);

  const navigateTo = async (href) => {
    await router.push(href);
    onClose();
  };

  const drawerContent = () => (
    <Stack sx={{ width: "85vw", flex: 1 }} role="presentation">
      <IconButton sx={{ alignSelf: "end" }} onClick={onClose}>
        <CloseOutlinedIcon />
      </IconButton>
      <List
        sx={{
          flex: 1,
          ".MuiListItem-root": {
            borderBottomWidth: 1,
            borderColor: "#F3F3F3",
            px: 0,
            m: 2,
            width: "auto",
          },
        }}
      >
        {haveChildren && (
          <Slide direction="left" in={!!activeMenu} mountOnEnter unmountOnExit>
            <ListItemButton
              sx={{ background: "#F4F4F4 !important" }}
              onClick={() => setActiveMenu(null)}
            >
              <ListItemIcon sx={{ placeContent: "start", minWidth: "unset" }}>
                <ArrowBackIosIcon sx={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText
                primary={getMenuTitle()}
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
                  <ListItemButton onClick={() => navigateTo(link.href)}>
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

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
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
          onClick={onLogoutClicked}
        >
          LOG OUT
        </Button>
      </Box>
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

export default ProfileDrawer;
