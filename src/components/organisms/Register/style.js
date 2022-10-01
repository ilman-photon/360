import { colors } from "../../../styles/theme";

export const styles = {
  container: {
    width: 350,
    padding: "1rem 1rem ",
    backgroundColor: "white",
    alignSelf: "center",
    margin: "auto",
    borderRadius: "5px",
  },
  form: {
    display: "grid",
    marginTop: "8px",
  },
  titleStyles: {
    paddingTop: "6px",
    marginLeft: "8px",
    marginRight: "8px",
    color: "#003B4A",
    // fontSize: "1.25rem",
    fontSize: "26px",
  },
  passwordLabel: {
    margin: "8px",
    fontSize: "1rem",
    color: "#191919",
  },
  divMargin: {
    marginTop: "8px",
    marginLeft: "8px",
    marginRight: "8px",
    paddingBottom: "6px",
    marginBottom: "16px",
  },
  bottomParagraph: {
    color: "#003B4A",
    textAlign: "center",
    fontSize: "14px",
    maxWidth: "85%",
    alignSelf: "center",
  },
  loginLink: {
    color: colors.link,
    // textDecoration: "underline",
    borderBottom: "1.5px solid",
  },
  containedButton: {
    backgroundColor: colors.primaryButton,
    borderRadius: 7.5,
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    margin: "0px  8px",
    "&:hover": {
      backgroundColor: "#1c8696",
    },
    textTransform: "none",
  },
  registeredUsernameWrapper: {
    padding: 16,
    borderRadius: 4,
    color: "#366A70",
    backgroundColor: `#EDF5FE`,
    margin: 8,
    wordBreak: "break-word",
  },
};
