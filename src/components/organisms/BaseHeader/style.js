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
    fontFamily: "Bw Nista Geometric DEMO",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "28px",
    textAlign: "right",
    color: "#003B4A",
  },
  boxStyledMobile: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: "flex-end",
    "@media print": {
      display: "none !important",
    },
  },
  menuMobile: {
    display: { xs: "block", md: "none" },
  },
  menuItemMobile: { color: "black" },
  boxProfileMenuStyles: { flexGrow: 0, display: { xs: "none", md: "flex" } },
  boxButtonStyles: { color: "black", textTransform: "none" },
  userText: {
    fontFamily: "Libre Franklin",
    fontWeight: "400",
    fontSize: "16px",
    color: "#191919",
  },
  menuProfileMenu: { mt: "45px" },
  buttonProfileMenu: { color: "black" },
  eyecareLogoToolbarStyled: { mr: 1 },
};
