import React from "react";
import { colors } from "../../../styles/theme";
import styles from "./accountTitleHeading.module.scss";

const AccountTitleHeading = ({ title }) => {
  return (
    <div className={styles.titleHeadingWrapper}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default AccountTitleHeading;
