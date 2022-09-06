import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import SidebarLink from "../../atoms/SidebarLink/sidebarLink";
import styles from "./accountSidebar.module.scss";

export const AccountSidebar = ({ ...props }, ref) => {
  const router = useRouter();
  const sidebarLinks = [
    { label: "Profile Information", href: "/patient/account/profile-info" },
    { label: "Financial Information", href: "#" },
    { label: "Toggle accounts", href: "#" },
    { label: "Merge accounts", href: "#" },
    { label: "Prescriptions", href: "#" },
    { label: "Insurance documents", href: "/patient/account/insurance-info" },
    { label: "Multi factor authentication", href: "#" },
  ];

  return (
    <>
      <Stack
        className={styles.sidebarWrapper}
        spacing={2}
        sx={{
          backgroundColor: "#f4f4f4",
        }}
      >
        {sidebarLinks.map((link, idx) => {
          return (
            <SidebarLink
              router={router}
              key={idx}
              href={link.href}
              className={styles.sidebarLink}
            >
              {link.label}
            </SidebarLink>
          );
        })}
      </Stack>
    </>
  );
};

export default AccountSidebar;
