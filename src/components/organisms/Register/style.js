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
    color: "#366A70",
    fontSize: "1.25rem",
  },
  passwordLabel: {
    marginLeft: "8px",
    marginRight: "8px",
    paddingTop: "6px",
    paddingBottom: "6px",
    fontSize: "1rem",
  },
  divMargin: {
    marginLeft: "8px",
    marginRight: "8px",
    paddingBottom: "6px",
    marginBottom: "16px",
  },
  bottomParagraph: {
    color: "#366A70",
    fontSize: "12px",
    textAlign: "center",
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
  },
  registeredUsernameWrapper: {
    padding: 16,
    borderRadius: 4,
    color: "#366A70",
    backgroundColor: `${colors.teal}0d`,
    margin: 8,
  },
};
