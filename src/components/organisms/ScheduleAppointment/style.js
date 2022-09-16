import { colors } from "../../../styles/theme";

export const styles = {
  primaryText: {
    color: "#003B4A",
    fontSize: "18px",
    fontWeight: "700",
  },
  switchButton: {
    border: "solid 1px #003B4A",
    padding: "40px",
    borderRadius: "8px",
    textAlign: "center",
    textTransform: "none",
  },
  detailText: {
    color: "#003B4A",
    fontSize: "16px",
  },
  boldText: {
    fontWeight: "700",
    fontSize: "18px",
  },
  continueButton: {
    height: "40px",
    alignSelf: "self-end",
    borderRadius: "46px",
    textTransform: "none",
    color: "#FFFFFF",
  },
  form: {
    display: "grid",
  },
  titleStyles: {
    paddingTop: "6px",
    marginLeft: "8px",
    marginRight: "8px",
    color: "#366A70",
    fontSize: "34px",
  },
  link: {
    color: "#008294",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "700",
    paddingLeft: "16px",
  },
  linkText: {
    color: "#008294",
  },
  boldLabel: {
    fontWeight: "700",
    fontSize: "1.2rem",
    color: "#191919",
  },
  passwordLabel: {
    fontSize: "1rem",
    color: "#191919",
  },
  divMargin: {
    marginTop: "32px",
    marginLeft: "8px",
    marginRight: "8px",
  },
  containedButton: {
    backgroundColor: "#2095a9",
    borderRadius: 46,
    color: "white",
    "&:hover": {
      backgroundColor: "#1c8696",
    },
    textTransform: "none",
  },
  divRight: {
    textAlign: "right",
    width: "100%",
  },
  editLink: {
    marginLeft: 4,
    color: "#008294",
    textDecorationLine: "underline",
    textTransform: "capitalize",
    fontSize: "18px",
  },
  scheduledText: {
    color: colors.darkGreen,
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: "8px 0px",
  },
  bottomParagraph: {
    color: "#366A70",
    textAlign: "center",
    margin: "24px",
    fontSize: "14px",
  },
  itemContainer: {
    border: "1px solid #dfdbdb",
    display: "flex",
    alignItems: "center",
    padding: "24px",
    flexDirection: "column",
  },

  getDirectionLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "9px",
  },

  getDirectionLinkText: {
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.0016em",
    color: "#008294 !important",
    cursor: "pointer",
    textDecorationColor: "inherit !important",
  },

  registeredUsernameWrapper: {
    margin: "16px 8px 0",
    padding: 16,
    borderRadius: 4,
    color: "#366a70",
    backgroundColor: "#f2f7fd",
    wordBreak: "break-all",
  },
};
