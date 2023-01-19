import { colors } from "../../../styles/theme";

export const styles = {
  examFor: {
    fontFamily: "Museo Sans, sans-serif",
    fontWeight: 500,
  },
  primaryText: {
    fontFamily: "Museo Sans",
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
    marginTop: "2px",
  },
  boldText: {
    fontWeight: "700",
  },
  continueButton: {
    fontFamily: "Museo Sans",
    fontSize: "16px",
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
  signInInfoLabel: {
    fontFamily: "Museo Sans",
    fontWeight: "400",
    fontSize: "18px",
    color: "#000000",
    fontStyle: "normal",
    letterSpacing: "0.0016em",
  },
  optionalInfoLabel: {
    fontFamily: "Museo Sans",
    fontWeight: "600",
    fontSize: "16px",
    color: "#000000",
    lineHeight: "1.167",
    letterSpacing: "-0.01562em",
    marginBottom: "8px",
  },
  link: {
    color: "#008294",
    cursor: "pointer",
    fontWeight: "400",
    paddingLeft: "8px",
    fontSize: "16px",
    fontFamily: "Museo Sans",
    marginTop: "1px",
  },
  linkText: {
    color: "#008294",
  },
  sigInInfoLabel: {
    fontFamily: "Museo Sans",
    fontWeight: "600",
  },
  passwordLabel: {
    fontFamily: "Museo Sans",
    fontSize: "16px",
    color: "#000000",
    fontWeight: "400",
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
    fontFamily: "Museo Sans",
    fontWeight: 500,
    fontSize: "16px",
  },
  scheduledText: {
    fontFamily: "Museo Sans, sans-serif",
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
    fontFamily: "Museo Sans, sans-serif",
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
    fontFamily: "Museo Sans",
    margin: "16px 8px 0",
    padding: 16,
    borderRadius: 4,
    color: "#366a70",
    backgroundColor: "#f2f7fd",
    wordBreak: "break-all",
  },

  nameProviderText: {
    fontFamily: "Museo Sans",
    fontSize: "16px",
    fontStyle: "normal",
    textTransform: "capitalize",
  },
  nomal400Text: {
    fontFamily: "Museo Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400px",
  },
  addressContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    marginTop: "2px",
  },

  dobHelperText: {
    fontFamily: "Museo Sans",
    fontWeight: 400,
    fontSize: "12px",
    color: "#49454F",
    marginLeft: "20px",
  },
};
