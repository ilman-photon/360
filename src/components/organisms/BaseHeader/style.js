export const styles = {
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderBottom: "solid 1px black",
  },
  appWrapper: {
    backgroundColor: "white",
    position: "fixed",
  },
  containerWrapper: {
    maxWidth: "xl",
  },
  logoStyled: { mr: 1, cursor: "pointer" },
  boxStyled: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
  },
  bottonStyledDesktop: {
    my: 2,
    display: "block",
    textTransform: "none",
    fontFamily: "Museo Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "28px",
    textAlign: "right",
    color: "#003B4A",
  },
  boxStyledMobile: {
    display: "none !important",
    justifyContent: "flex-end",
    "@media (max-width: 833px)": {
      display: "flex !important",
    },
  },
  menuMobile: {
    display: { xs: "block", md: "none" },
  },
  menuItemMobile: { color: "black" },
  boxProfileMenuStyles: {
    flexGrow: 0,
    display: "flex",
    "@media (max-width: 899px)": {
      display: "none",
    },
  },
  boxButtonStyles: { color: "black", textTransform: "none" },
  userText: {
    fontWeight: "700 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#191919 !important",
  },
  menuProfileMenu: { mt: "45px" },
  buttonProfileMenu: { color: "black", textTransform: "none" },
  eyecareLogoToolbarStyled: { mr: 1 },
};
