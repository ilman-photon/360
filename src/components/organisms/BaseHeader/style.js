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
  logoStyled: { mr: 1 },
  boxStyled: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "end",
  },
  bottonStyledDesktop: { my: 2, color: "black", display: "block" },
  boxStyledMobile: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: "flex-end",
  },
  menuMobile: {
    display: { xs: "block", md: "none" },
  },
  menuItemMobile: { color: "black" },
  boxProfileMenuStyles: { flexGrow: 0, display: { xs: "none", md: "flex" } },
  boxButtonStyles: { color: "black" },
  menuProfileMenu: { mt: "45px" },
  buttonProfileMenu: { color: "black" },
  eyecareLogoToolbarStyled: { mr: 1 },
};
