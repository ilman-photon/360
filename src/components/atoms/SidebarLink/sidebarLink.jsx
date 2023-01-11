import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../styles/theme";
import styles from "./sidebarLink.module.scss";
import * as accountLayoutStyles from "../../templates/accountLayout.module.scss";

const SidebarLink = ({ router, href, children, icon }) => {
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
        width: accountLayoutStyles.widthSidebarLink,
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
            color: isCurrentPath ? colors.darkGreen : colors.grayscaleBlack,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: isCurrentPath ? colors.darkGreen : colors.iconGrey,
            }}
          >
            {icon}
          </div>
          {children}
        </Typography>
      </a>
    </Stack>
  );
};

export default SidebarLink;
