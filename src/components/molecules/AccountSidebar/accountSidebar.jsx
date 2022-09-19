import { Collapse, Fade, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import SidebarLink from "../../atoms/SidebarLink/sidebarLink";
import styles from "./accountSidebar.module.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { colors } from "../../../styles/theme";
import { useEffect } from "react";

export const AccountSidebar = ({ ...props }, ref) => {
  const [activeSidebarChild, setActiveSidebarChild] = useState(null);

  const router = useRouter();
  const sidebarLinks = [
    {
      label: "Profile Information",
      href: "/patient/account/profile-info",
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      label: "Care Plan",
      href: "#",
      icon: <AccountCircleOutlinedIcon />,
    },
    { label: "Prescriptions", href: "#", icon: <AccountCircleOutlinedIcon /> },
    {
      label: "Test & Lab Results",
      href: "#",
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
    {
      label: "Documents",
      child: [
        {
          label: "Intake Forms",
          href: "/patient/account/documents/intake-forms",
        },
        {
          label: "Insurance documents",
          href: "/patient/account/insurance-info",
        },
      ],
      icon: <DescriptionOutlinedIcon />,
    },
    // { label: "Insurance documents", href: "/patient/account/insurance-info" },
    {
      label: "Multi factor authentication",
      href: "#",
      icon: <LockOutlinedIcon />,
    },
  ];

  const toggleSidebarChild = (payload) => {
    if (activeSidebarChild !== payload) {
      setActiveSidebarChild(payload);
    } else {
      setActiveSidebarChild(null);
    }
  };

  useEffect(() => {
    setActiveSidebarChild(router.pathname.split("/")[3]);
  }, [router]);

  return (
    <div className={styles.sidebarWrapper}>
      <Stack className={styles.sidebarLinkWrapper} spacing={2}>
        {sidebarLinks.map((link, idx) => {
          return link.href ? (
            <Stack
              flexDirection="row"
              alignItems="center"
              color={colors.iconGrey}
            >
              {link.icon}
              <SidebarLink
                router={router}
                key={idx}
                href={link.href}
                child={link.child}
              >
                {link.label}
              </SidebarLink>
            </Stack>
          ) : (
            <Stack>
              <Stack
                flexDirection="row"
                alignItems="center"
                color={colors.iconGrey}
                sx={{ cursor: "pointer" }}
                onClick={() => toggleSidebarChild("documents")}
              >
                {link.icon}
                <Typography
                  variant="allVariants"
                  className={styles.sidebarLink}
                >
                  {link.label}
                </Typography>
                {activeSidebarChild === "documents" ? (
                  <KeyboardArrowDownOutlinedIcon
                    sx={{ width: 23, height: 23, ml: "auto" }}
                  />
                ) : (
                  <KeyboardArrowRightOutlinedIcon
                    sx={{ width: 23, height: 23, ml: "auto" }}
                  />
                )}
              </Stack>

              <Collapse
                in={activeSidebarChild === "documents"}
                unmountOnExit
                sx={{ ml: 2 }}
              >
                <Stack sx={{ ml: 2 }}>
                  {link.child.map((item, childIdx) => {
                    return (
                      <SidebarLink
                        router={router}
                        key={childIdx}
                        href={item.href}
                        child={item.child}
                      >
                        {item.label}
                      </SidebarLink>
                    );
                  })}
                </Stack>
              </Collapse>
            </Stack>
          );
        })}
      </Stack>
    </div>
  );
};

export default AccountSidebar;
