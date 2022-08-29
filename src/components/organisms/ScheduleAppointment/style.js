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
  linkText: {
    color: "#008294",
    fontSize: "18px",
  },
  continueText: {
    height: "40px",
    alignSelf: "self-end",
    borderRadius: "46px",
    textTransform: "capitalize",
    color: "#FFFFFF",
  },
  form: {
    display: "grid",
    // marginTop: "8px",
  },
  titleStyles: {
    paddingTop: "6px",
    marginLeft: "8px",
    marginRight: "8px",
    color: "#366A70",
    // fontSize: "1.25rem",
    fontSize: "34px",
  },
  link: {
    color: "#003B4A",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
    paddingLeft: "16px",
  },
  boldLabel: {
    // marginTop: "16px",
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
  bottomParagraph: {
    color: "#366A70",
    textAlign: "center",
    fontSize: "14px",
  },
  loginLink: {
    color: "#3EAFBD",
    textDecoration: "underline",
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
  registeredUsernameWrapper: {
    padding: 16,
    borderRadius: 4,
    color: "#366A70",
    backgroundColor: `${colors.teal}0d`,
    margin: 8,
    wordBreak: "break-all",
  },
};
