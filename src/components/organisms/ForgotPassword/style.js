export const styles = {
  cardContentStyle: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
  },
  margin: {
    marginTop: "16px",
    marginLeft: "0px",
    marginRight: "0px",
    textAlign: "center",
  },
  marginText: {
    marginTop: "16px",
    marginLeft: "0px",
    marginRight: "0px",
    textAlign: "left",
  },
  postMessage: {
    marginTop: "16px",
    marginLeft: "0px",
    marginRight: "0px",
  },
  form: {
    display: "grid",
    marginTop: "8px",
  },
  link: {
    cursor: "pointer",
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
