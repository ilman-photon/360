import React from "react";
import styles from "./accountTitleHeading.module.scss";

const AccountTitleHeading = ({
  title,
  sx = {},
  sxContainer = {},
}) => {
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
      <div
        className={styles.title}
        style={{
          ...sx,
        }}
        aria-hidden={true}
      >
        {title}
      </div>
    </div>
  );
};

export default AccountTitleHeading;
