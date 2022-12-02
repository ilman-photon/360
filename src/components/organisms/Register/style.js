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
    marginTop: 0,
  },
  titleStyles: {
    paddingTop: "6px",
    marginLeft: "8px",
    marginRight: "8px",
    color: "#003B4A",
    // fontSize: "1.25rem",
    fontSize: "32px",
    ["@media (max-width: 992px)"]: {
      fontSize: "26px",
    },
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
    textDecoration: "underline",
    textUnderlineOffset: "1.2px",
    textDecorationSkipInk: "none",
  },
  containedButton: {
    backgroundColor: colors.primaryButton,
    borderRadius: 7.5,
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    margin: "0px  8px",
    height: "46px",
    "&:hover": {
      backgroundColor: "#1c8696",
    },
    textTransform: "none",
  },
  registeredUsernameWrapper: {
    padding: "16px 10px",
    borderRadius: 4,
    color: "#366A70",
    backgroundColor: `#EDF5FE`,
    margin: 8,
    wordBreak: "break-word",
  },
  overideContainer: {
    "@media (min-width: 992px) and (max-height: 720px)": {
      position: "relative",
      transform: "scale(0.9)",
      marginRight: "75px !important",
      marginTop: "-100px",
      marginBottom: "unset !important",
      top: "10px",
    },

    "@media only screen and (min-width: 768px) and (max-width: 1024px)": {
      marginRight: "0 !important",
      alignSelf: "center !important",
    },

    "@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)":
      {
        marginRight: "0 !important",
        alignSelf: "center !important",
      },

    "@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)":
      {
        marginRight: "75px !important",
        alignSelf: "center !important",
      },
  },
};
