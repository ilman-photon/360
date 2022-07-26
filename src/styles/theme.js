import { createTheme } from '@mui/material/styles';
import "@fontsource/libre-franklin"
import "@fontsource/roboto"

export const colors = {
  darkGreen: '#003B4A',
  darkGreen75: '#205A63',
  darkGreen50: '#366A70',
  darkGreen25: '#507A7D',
  teal: '#0095A9', //'#E5EDF8',
  teal75: '#3EAFBD',
  teal50: '#7FCAD3',
  teal25: '#BFE$E8',
  peach: '#F2EAE6',
  peach75: '#F2EAE6',
  peach50: '#F9F5F3',
  peach25: '#FDFAF9',
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
  typography:{
    fontFamily: "Libre Franklin",
    fontWeight: "normal",
    fontSize: 16,
    h1: {
      fontFamily: "Bw Nista Geometric DEMO",
      color:"#003B4A",
      fontWeight: 500,
      fontSize: 46, 
      lineHeight:"60px"
    },
    h2:{
      fontFamily: 'Bw Nista Geometric DEMO',
      color:"#003B4A",
      fontWeight: 500,
      fontSize: 34, 
      lineHeight:"44px"
    },
    h3:{
      fontFamily: 'Bw Nista Geometric DEMO',
      color:"#003B4A",
      fontWeight: "bold",
      fontSize: 22, 
      lineHeight:"32px"
    },
    h4:{
      fontFamily: 'Bw Nista Geometric DEMO',
      color:"#003B4A",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight:"24px"
    },
    bodyLarge:{
      fontFamily: 'Libre Franklin',
      fontWeight: "bold",
      fontSize: 18, 
      lineHeight:"26px"
    },
    bodyMedium:{
      fontFamily: 'Libre Franklin',
      fontWeight: 400,
      fontSize: 16,
      lineHeight:"24px"
    },
    bodyRegular:{
      fontFamily: 'Libre Franklin',
      fontWeight: "bold",
      fontSize: 16,
      lineHeight:"24px"
    },
    bodySmallRegular:{
      fontFamily: 'Libre Franklin',
      fontWeight: "bold",
      fontSize: 14, 
      lineHeight:"22px"
    },
    bodySmallMedium:{
      fontFamily: 'Libre Franklin',
      fontWeight: 500,
      fontSize: 14,
    },
    bodyTinyRegular:{
      fontFamily: 'Libre Franklin',
      fontWeight: "normal",
      fontSize: 12, 
    },
    bodyTinyMedium:{
      fontFamily: 'Libre Franklin',
      fontWeight: 500,
      fontSize: 12,
    },
    allVariants: {
      color: "#292929"
    }
  }
});

export const providerTypography = createTheme({
  typography:{
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: 16,
    h1: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 24, 
    },
    h2:{
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 20, 
    },
    h3:{
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 16, 
    },
    bodyLarge:{
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: 16, 
    },
    bodySmallRegular:{
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: 16, 
    },
    bodySmallMedium:{
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: 16,
    },
    bodyTinyRegular:{
      fontFamily: 'Roboto',
      fontWeight: "normal",
      fontSize: 16, 
    },
    bodyTinyMedium:{
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: 16,
    },
    allVariants: {
      color: "#292929"
    }
  }
});

export const primaryTheme = createTheme({
  typography:{
    fontFamily: "Libre Franklin",
  },
  button: {
    background: colors.teal, // "linear-gradient(89.86deg, #0095A9 -3.29%, #00C6E0 102.48%)",
    color: 'white'
  }
});

export const secondaryTheme = createTheme({
  typography:{
    fontFamily: "Libre Franklin",
  },
  button: {
    background: 'white',
    color: colors.teal,
    borderColor: "#205A63",
  },
});

export const patientButtonPrimary = createTheme({
  typography:{
    fontFamily: "Libre Franklin",
  },
  button: {
    background: colors.teal,
    color: 'white'
  },
});
export const patientButtonSecondary = createTheme({
  typography:{
    fontFamily: "Libre Franklin",
  },
  button: {
    background: 'white',
    color: colors.teal,
    borderColor: "#205A63",
  },
});
export const providerButtonPrimary = createTheme({
  typography:{
    fontFamily: "Roboto",
  },
  button: {
    background: "darkGray",
    color: 'white'
  },
});
export const providerButtonSecondary = createTheme({
  typography:{
    fontFamily: "Roboto",
  },
  button: {
    background: 'white',
    color: "darkGray",
    borderColor: "darkGray",
  },
});