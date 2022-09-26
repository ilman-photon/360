import React from "react";
import styles from "./accountTitleHeading.module.scss";

const AccountTitleHeading = ({ title, sx = {}, sxContainer = {} }) => {
  return (
    <div className={styles.titleHeadingWrapper} style={{ ...sxContainer }}>
      <div
        className={styles.title}
        style={{
          ...sx,
        }}
        aria-label={`${title} heading`}
        tabIndex={"0"}
      >
        {title}
      </div>
    </div>
  );
};

export default AccountTitleHeading;
