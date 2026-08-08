import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5B4CFF",
    },

    secondary: {
      main: "#FF8A3D",
    },

    background: {
      default: "#FFF8F2",
      paper: "#ffffff",
    },

    text: {
      primary: "#1F2937",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",

    h1: {
      fontWeight: 800,
      fontSize: "4.5rem",
    },

    h2: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 18,
  },
});

export default theme;