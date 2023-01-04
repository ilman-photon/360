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
      aria-label={
        title == "Pay My Bill" ? "Intake Forms heading" : `${title} heading`
      }
      tabIndex={"0"}
    >
      {/* <div style={{maxWidth: "1536px"}}> */}
      <Typography className={styles.title} sx={sx} aria-hidden={true}>
        {title}
      </Typography>
      {/* </div> */}
    </div>
  );
};

export default AccountTitleHeading;
