import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const iconIntakeForms = "/iconintakeFoms.png";

export const menus = (isMobile = false) => {
  const menu = [
    {
      href: "/patient/admin/locked-accounts",
      label: "Locked Accounts",
    },
    {
      href: "/patient/admin/account-recovery",
      label: "Account Recovery",
    },
  ];

  if (!isMobile) {
    menu.push({
      label: "Documents",
      submenu: [
        {
          icon: iconIntakeForms,
          href: "/patient/intake-form",
          label: "Forms Customization",
        },
      ],
    });
  }

  return menu;
};

const AdminNavbar = () => {
  const [anchorChildren, setAnchorChildren] = React.useState(null);

  const router = useRouter();

  const isCurrentPath = (href) => {
    return (
      router.pathname === href ||
      (router.pathname.includes(href) && href !== "/patient")
    );
  };
  (function prefetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();

  const MenuItemLabel = (item, itemIdx) => {
    return (
      <MenuItem
        key={itemIdx}
        onClick={() => {
          setAnchorChildren(null);
          router.push(item.href);
        }}
        aria-label={`${item.label} menu`}
      >
        <Image alt="" src={item.icon} width={"16px"} height={"16px"} />
        <Typography
          textAlign="center"
          sx={{
            margin: "0 10px",
            fontFamily: "Museo Sans",
            fontWeight: "400",
            fontSize: {
              sm: "14px",
              md: "16px",
            },
          }}
        >
          {item.label}
        </Typography>
      </MenuItem>
    );
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#007787",
        height: "43px",
        // marginTop: 0,
        // zIndex: "3",
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
              justifyContent: "normal",
              gap: {
                md: "16px",
              },
            }}
          >
            {menus().map((menu, menuIdx) =>
              menu.submenu ? (
                <div key={menuIdx}>
                  <Button
                    href={menu.href}
                    onClick={(event) => setAnchorChildren(event.currentTarget)}
                    aria-label={`${menu.label} menu`}
                    sx={{
                      my: 2,
                      color: "white",
                      textTransform: "none",
                      display: "flex",
                      margin: "0 !important",
                      borderRadius: "2px 2px 0px 0px",
                      borderTop: "solid 4px transparent",
                      paddingBottom: "1px",
                      borderBottom: isCurrentPath(menu.href)
                        ? "solid 4px #D9D9D9"
                        : "solid 4px transparent",
                      fontSize: {
                        sm: "14px",
                        md: "16px",
                      },
                    }}
                    endIcon={<ExpandMoreIcon />}
                  >
                    {menu.label}
                  </Button>

                  {/* children menus */}
                  <Menu
                    sx={{ mt: "40px" }}
                    id="menu-appbar"
                    anchorEl={anchorChildren}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorChildren)}
                    onClose={() => setAnchorChildren(null)}
                  >
                    {menu.submenu.map((doc, docIdx) =>
                      MenuItemLabel(doc, docIdx)
                    )}
                  </Menu>
                </div>
              ) : (
                <Button
                  key={menuIdx}
                  href={menu.href}
                  onClick={() => router.push(menu.href)}
                  aria-label={`${menu.label} menu`}
                  sx={{
                    my: 2,
                    color: "white",
                    textTransform: "none",
                    display: "block",
                    margin: "0 !important",
                    borderRadius: "2px 2px 0px 0px",
                    borderTop: "solid 4px transparent",
                    paddingBottom: "1px",
                    borderBottom: isCurrentPath(menu.href)
                      ? "solid 4px #D9D9D9"
                      : "solid 4px transparent",
                    fontSize: {
                      sm: "14px",
                      md: "16px",
                    },
                  }}
                >
                  {menu.label}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AdminNavbar;
