import { Typography } from "@mui/material";
import React from "react";
import styles from "./accountTitleHeading.module.scss";

const AccountTitleHeading = ({ title, sx = {}, sxContainer = {} }) => {
  return (
    <div
      className={styles.titleHeadingWrapper}
      style={{
        position: "relative",
        ...sxContainer,
      }}
      aria-label={`${title} heading`}
      tabIndex={"0"}
    >
      <Typography className={styles.title} sx={sx} aria-hidden={true}>
        {title}
      </Typography>
    </div>
  );
};

export default AccountTitleHeading;
