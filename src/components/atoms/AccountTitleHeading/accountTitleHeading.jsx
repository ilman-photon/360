import React from "react";
import styles from "./accountTitleHeading.module.scss";

const AccountTitleHeading = ({ title, sx = {} }) => {
  return (
    <div className={styles.titleHeadingWrapper}>
      <div
        className={styles.title}
        style={{
          ...sx,
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default AccountTitleHeading;
