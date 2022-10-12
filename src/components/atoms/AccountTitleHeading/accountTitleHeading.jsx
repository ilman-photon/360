import React from "react";
import styles from "./accountTitleHeading.module.scss";

const AccountTitleHeading = ({
  title,
  sx = {},
  isFixed = true,
  sxContainer = {},
}) => {
  return (
    <div
      className={styles.titleHeadingWrapper}
      style={{
        position: isFixed ? "fixed" : "relative",
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
