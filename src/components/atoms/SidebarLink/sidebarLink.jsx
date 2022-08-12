import { withRouter } from "next/router";
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
    <a
      href={href}
      onClick={handleClick}
      className={styles.sidebarLink}
      style={{
        borderLeft: isCurrentPath ? "5px solid" : null,
        borderColor: colors.darkGreen,
      }}
    >
      {children}
    </a>
  );
};

export default withRouter(SidebarLink);
