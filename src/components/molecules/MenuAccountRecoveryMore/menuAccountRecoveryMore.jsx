import { Check, Link, LockOpenOutlined } from "@mui/icons-material";
import { Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import QAIcon from "../../../assets/icons/QAIcon";
import ShareIcon from "../../../assets/icons/ShareIcon";

export default function MenuAccountRecoveryMore({
  anchorEl,
  userStatus,
  onClose,
  open,
  keepMounted,
  activeMenuData,
  onMoreClicked = () => {},
}) {
  const [menus, setMenus] = React.useState([]);

  React.useEffect(() => {
    switch (activeMenuData.status) {
      case "locked":
        setMenus([
          {
            id: "unlock-account",
            icon: (
              <LockOpenOutlined
                sx={{ width: 20, height: 20, color: "rgba(0,0,0,0.54)" }}
              />
            ),
            label: "Unlock",
            // dataTestId: "download-menu",
            // ariaLabel: "download option",
          },
          {
            id: "send-password-reset",
            icon: (
              <Link sx={{ width: 20, height: 20, color: "rgba(0,0,0,0.54)" }} />
            ),
            label: "Send password reset",
          },
          {
            id: "share-username",
            icon: (
              <ShareIcon
                sx={{
                  transform: "translateY(180deg)",
                }}
              />
            ),
            label: "Share Username",
          },
          {
            id: "view-security-questions",
            icon: <QAIcon />,
            label: "View Security Questions",
          },
        ]);
        break;
      case "unlocked":
        setMenus([
          {
            id: "send-password-reset",
            icon: (
              <Link sx={{ width: 20, height: 20, color: "rgba(0,0,0,0.54)" }} />
            ),
            label: "Send password reset",
          },
          {
            id: "share-username",
            icon: (
              <ShareIcon
                sx={{
                  transform: "translateY(180deg)",
                }}
              />
            ),
            label: "Share Username",
          },
          {
            id: "view-security-questions",
            icon: <QAIcon />,
            label: "View Security Questions",
          },
        ]);
        break;
      case "inactive":
        setMenus([
          {
            id: "activate-account",
            icon: (
              <Check
                sx={{ width: 20, height: 20, color: "rgba(0,0,0,0.54)" }}
              />
            ),
            label: "Activate",
          },
        ]);
        break;
      default:
        break;
    }
  }, [activeMenuData]);

  return (
    <Menu
      id="menu-account-recovery-more"
      anchorEl={anchorEl}
      keepMounted={keepMounted}
      onClose={onClose}
      open={open}
    >
      {menus.map((menu, menuIdx) => (
        <MenuItem
          key={`menu-${menuIdx}`}
          data-testid={`menu-more-${menu.id}`}
          onClick={() => onMoreClicked(menu.id, activeMenuData)}
          aria-label={`${menu.ariaLabel}`}
          aria-live="polite"
        >
          {menu.icon}
          <Typography
            textAlign="center"
            tabIndex={0}
            sx={{
              margin: "0 8px",
              fontFamily: "Libre Franklin",
              fontWeight: "500",
              fontSize: "14px",
            }}
            data-testid={menu.dataTestId}
          >
            {menu.label}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}
