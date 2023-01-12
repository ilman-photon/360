import { Collapse, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SidebarLink from "../../atoms/SidebarLink/sidebarLink";
import styles from "./accountSidebar.module.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccountSecurityIcon from "../../../assets/icons/AccountSecurity";

export const AccountSidebar = () => {
  const [activeSidebarChild, setActiveSidebarChild] = useState(null);

  const router = useRouter();
  const sidebarLinks = [
    {
      label: "Profile Information",
      href: "/patient/account/profile-info",
      icon: <AccountCircleOutlinedIcon sx={{ margin: "5px" }} />,
    },
    // {
    //   label: "Care Plan",
    //   href: "#",
    //   icon: <AccountCircleOutlinedIcon />,
    // },
    // {
    //   label: "Prescriptions",
    //   href: "/patient/prescription",
    //   icon: <AccountCircleOutlinedIcon />,
    // },
    // {
    //   label: "Test & Lab Results",
    //   href: "#",
    //   icon: <AssignmentTurnedInOutlinedIcon />,
    // },
    // {
    //   label: "Documents",
    //   child: [
    //     {
    //       label: "Intake Forms",
    //       href: "/patient/account/documents/intake-forms",
    //     },
    //     {
    //       label: "Insurance documents",
    //       href: "/patient/account/insurance-info",
    //     },
    //   ],
    //   icon: <DescriptionOutlinedIcon />,
    // },
    {
      label: "Insurance documents",
      href: "/patient/account/insurance-info",
      icon: <DescriptionOutlinedIcon sx={{ margin: "5px" }} />,
    },
    {
      label: "Login & Security",
      href: "/patient/account/login-&-security",
      icon: <AccountSecurityIcon sx={{ margin: "5px" }} />,
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

  const KeyboardComponent =
    activeSidebarChild === "documents"
      ? KeyboardArrowDownOutlinedIcon
      : KeyboardArrowRightOutlinedIcon;

  return (
    <div className={styles.sidebarWrapper}>
      <Stack className={styles.sidebarLinkWrapper} spacing={2}>
        {sidebarLinks.map((link, idx) => {
          return link.href ? (
            <Stack
              key={idx}
              flexDirection="row"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <SidebarLink
                router={router}
                href={link.href}
                child={link.child}
                icon={link.icon}
              >
                <div>{link.label}</div>
              </SidebarLink>
            </Stack>
          ) : (
            <Stack key={idx}>
              <Stack
                flexDirection="row"
                alignItems="center"
                sx={{ cursor: "pointer" }}
                onClick={() => toggleSidebarChild("documents")}
              >
                <Typography
                  variant="allVariants"
                  className={styles.sidebarLink}
                >
                  {link.label}
                </Typography>
                <KeyboardComponent sx={{ width: 23, height: 23, ml: "auto" }} />
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
