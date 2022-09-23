import { colors } from "../../../styles/theme";

export const styles = {
  primaryText: {
    color: "#0095A9",
    fontSize: "18px",
    fontWeight: "600",
  },
  switchButton: {
    border: "1px solid #205A63",
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
  sigInInfoLabel: {
    fontFamily: "Libre Franklin",
    fontWeight: "600",
    fontSize: "18px",
    color: "#000000",
  },
  link: {
    color: "#008294",
    cursor: "pointer",
    fontWeight: "500",
    paddingLeft: "8px",
    fontSize: "16px",
  },
  linkText: {
    color: "#008294",
  },
  passwordLabel: {
    fontFamily: "Libre Franklin",
    fontSize: "16px",
    color: "#000000",
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
