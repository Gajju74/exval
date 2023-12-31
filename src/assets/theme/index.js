import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit', 
          textDecoration: 'none',
          cursor: "pointer"
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0
        },
        a: {
          textDecoration: "none",
          color: "inherit"
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%"
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%"
        },
      }
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          color: "#eee"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          textTransform: "inherit",
          transition: 'background-color 0.3s ease',
        }
      }
    }
  },
  direction: "ltr",
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48
      },
      "@media (min-width:600px)": { minHeight: 64 }
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    color: "#2B2B2B",
    h1: {
      fontSize: "3.75rem",
      color: "#2B2B2B",
      fontWeight: 500,
      lineHeight: 1.4
    },
    h2: {
      fontSize: "3.75rem"
    },
    h3: {
      fontSize: "2.25rem"
    },
    h4: {
      fontSize: "2rem"
    },
    h5: {
      fontSize: "1.5rem"
    },
    h6: {
      fontSize: "1.2rem",
    },
    button: {
      fontSize: ".99rem"
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5
    },
    body2: {
      fontSize: "14px",
      lineHeight: "20px"
    },
    shape: { borderRadius: 0 }
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#33CC70",
      main: "#00AB55",
      dark: "#009357",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    secondary: {
      light: "#ffb74d",
      main: "#f9b934",
      dark: "#FF9800",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#rgba(0, 0, 0, 0.87)"
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: "#2B2B2B"
    },
    background: {
      paper: "#fff",
      default: "#fff"
    },
    action: {
      disabledOpacity: 0.38,
      focusOpacity: 0.12
    }
  }
});

export default responsiveFontSizes(theme);