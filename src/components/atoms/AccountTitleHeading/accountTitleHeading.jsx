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
        aria-live={"polite"}
        aria-label={`${title} heading`}
        tabIndex={"0"}
      >
        {title}
      </div>
    </div>
  );
};

export default AccountTitleHeading;
