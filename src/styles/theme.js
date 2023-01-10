import { createTheme } from "@mui/material/styles";
import "@fontsource/libre-franklin";
import "@fontsource/roboto";

export const colors = {
  darkGreen: "#003B4A",
  darkGreen75: "#205A63",
  darkGreen50: "#366A70",
  darkGreen25: "#507A7D",
  green: "#168845",
  teal: "#0095A9", //'#E5EDF8',
  teal15: "#DDF1F3",
  teal75: "#3EAFBD",
  teal50: "#7FCAD3",
  teal25: "#BFE4E8",
  teal20: "#007787",
  peach: "#F2EAE6",
  peach75: "#F2EAE6",
  peach50: "#F9F5F3",
  peach25: "#FDFAF9",
  grey: "#191919",
  grey75: "#080707",
  black: "#242526",
  darkBlue: "#1C1F37",
  foundationGreen: "#04844B",
  foundationRed: "#C23934",
  foundationBlue: "#0E1941",
  foundationGrey: "#6B7789",
  error: "#B93632",
  errorField: "#f91e18",
  primaryButton: "#007e8f",
  link: "#008294",
  iconGrey: "#757575",
  dark1: "#d4d4d4",
  grayscaleBlack: "#292929",
  grayscaleGrey: "#fafafa",
  inputPlaceholder: "#6c6c6c",
  inputPlaceholderDark: "#303030",
  blackInactive: "#0000008a",
};

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//     button: {
//       background: string
//       color: string
//     }
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//     button?: {
//       background?: string;
//       color?: string;
//     },
//   }
// };

export const patientTypography = createTheme({
  typography: {
    fontFamily: "Museo Sans, sans-serif",
    fontWeight: "normal",
    fontSize: 16,
    h1: {
      fontFamily: "Museo Sans, sans-serif",
      color: "#003B4A",
      fontWeight: 500,
      fontSize: 46,
      lineHeight: "60px",
    },
    h2: {
      fontFamily: "Museo Sans, sans-serif",
      color: "#003B4A",
      fontWeight: 500,
      fontSize: 34,
      lineHeight: "44px",
      ["@media (max-width: 992px)"]: {
        fontSize: 26,
        lineHeight: "36px",
      },
    },
    h3: {
      fontFamily: "Museo Sans, sans-serif",
      color: "#003B4A",
      fontWeight: "bold",
      fontSize: 22,
      lineHeight: "32px",
    },
    h4: {
      fontFamily: "Museo Sans, sans-serif",
      color: "#003B4A",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "24px",
    },
    cutomH4: {
      fontFamily: "Roboto, sans-serif",
      color: "#003B4A",
      fontWeight: "600",
      fontSize: 18,
      lineHeight: "24px",
    },
    bodyLarge: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "26px",
    },
    bodyMedium: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
    },
    bodyRegular: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "24px",
      ["@media (max-width: 992px)"]: {
        fontSize: 16,
        lineHeight: "24px",
        fontWeight: 400,
      },
    },
    bodyRegularSemiBold: {
      fontFamily: "Museo Sans, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.0016em",
    },
    bodySmallRegular: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "22px",
    },
    bodySmallMedium: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 500,
      fontSize: 14,
    },
    smallMediumRoboto: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: 14,
    },
    bodySmallLightMedium: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 400,
      fontSize: 14,
    },
    bodyTinyRegular: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: "normal",
      fontSize: 12,
    },
    bodyTinyMedium: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 500,
      fontSize: 12,
    },
    bodyLink: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "20px",
      color: colors.link,
      textDecoration: "underline",
    },
    titleCard: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "32px",
      color: "#003B4A",
      ["@media (max-width: 768px)"]: {
        fontSize: 22,
      },
    },
    customBodyRegular: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "24px",
    },
    medication: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "26px",
      color: "#007E8F",
      textDecoration: "underline, sans-serif",
    },
    bodyLinkRegular: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "20px",
      color: "#008294",
      textDecoration: "underline",
    },
    allVariants: {
      color: "#292929",
    },
    bodySmallItalic: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      fontStyle: "italic",
    },
    lightError: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      color: "#B00020",
    },
    regularDarkGreen: {
      fontFamily: "Museo Sans, sans-serif",
      color: "#003B4A",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: "20px",
    },
    mediumDarkGreen: {
      fontFamily: "Museo Sans, sans-serif",
      color: "#003B4A",
      fontWeight: "500",
      fontSize: 16,
      lineHeight: "20px",
    },
    grayscaleBlack: {
      fontFamily: "Museo Sans, sans-serif",
      color: "#292929",
      fontWeight: "500",
      fontSize: 22,
      lineHeight: "30px",
    },
    mediumBlueNavy: {
      fontFamily: "Museo Sans, sans-serif",
      color: colors.foundationBlue,
      fontWeight: "500",
      fontSize: 16,
    },
    headlineH2: {
      fontFamily: "Museo Sans, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "44px",
    },
    headlineH3: {
      fontFamily: "Museo Sans, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "26px",
      lineHeight: "32px",
    },
    headlineH4: {
      fontFamily: "Museo Sans, sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "28px",
      color: "#003B4A",
    },
    titleScheduleMobile: {
      fontFamily: "Museo Sans, sans-serif",
      fontWeight: 500,
      fontSize: "26px",
    },
    cardLink: {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "44px",
    },
    controlButtonText: {
      fontWeight: 600,
      fontFamily: "Museo Sans, sans-serif",
      fontSize: 14,
      lineHeight: "18px",
      letterSpacing: "0.0016em",
    },
  },
});

export const providerTypography = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: 16,
    h1: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 24,
    },
    h2: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 20,
    },
    h3: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 16,
    },
    bodyLarge: {
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: 16,
    },
    bodySmallRegular: {
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: 16,
    },
    bodySmallMedium: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 16,
    },
    bodyTinyRegular: {
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: 16,
    },
    bodyTinyMedium: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 16,
    },
    allVariants: {
      color: "#292929",
    },
  },
});

export const primaryTheme = createTheme({
  typography: {
    fontFamily: "Museo Sans, sans-serif",
  },
  button: {
    background: colors.teal, // "linear-gradient(89.86deg, #0095A9 -3.29%, #00C6E0 102.48%)",
    color: "white",
  },
});

export const secondaryTheme = createTheme({
  typography: {
    fontFamily: "Museo Sans, sans-serif",
  },
  button: {
    background: "white",
    color: colors.teal,
    borderColor: "#205A63",
  },
});

export const patientButtonPrimary = createTheme({
  typography: {
    fontFamily: "Museo Sans, sans-serif",
  },
  button: {
    background: colors.primaryButton,
    color: "white",
  },
});
export const patientButtonSecondary = createTheme({
  typography: {
    fontFamily: "Museo Sans, sans-serif",
  },
  button: {
    background: "white",
    color: colors.primaryButton,
    borderColor: "#205A63",
  },
});
export const patientButtonError = createTheme({
  typography: {
    fontFamily: "Museo Sans, sans-serif",
  },
  button: {
    background: colors.error,
    color: "white",
  },
});
