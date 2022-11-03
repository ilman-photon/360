import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../styles/theme";
import styles from "./sidebarLink.module.scss";

const SidebarLink = ({ router, href, isLeftSideBar = false, children }) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  (function prefetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      sx={{
        background: isCurrentPath ? "#EFEFEF" : "transparent",
        width: "97%",
      }}
    >
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          borderColor: isCurrentPath ? colors.darkGreen : "transparent",
          my: 0,
          borderRightWidth: "5px",
        }}
      />
      <a href={href} onClick={handleClick} className={styles.sidebarLink}>
        <Typography
          variant="allVariants"
          sx={{
            color: isCurrentPath ? colors.darkGreen : "#757575",
            display: "flex",
            alignItems: "center",
          }}
        >
          {children}
        </Typography>
      </a>
    </Stack>
  );
};

export default SidebarLink;
