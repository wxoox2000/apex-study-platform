import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "modern-normalize";
import { createTheme, ThemeProvider } from "@mui/material";
import { indigo, deepOrange, purple } from "@mui/material/colors";

import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

import "@fontsource/orbitron/400.css";
import "@fontsource/orbitron/500.css";
import "@fontsource/orbitron/600.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/800.css";
import { BrowserRouter } from "react-router-dom";

declare module "@mui/material/styles" {
  interface Theme {
    borderRadius: {
      sm: "4px";
      md: "8px";
      lg: "12px";
      xl: "16px";
      "2xl": "20px";
    };
  }
  interface ThemeOptions {
    borderRadius?: {
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      "2xl"?: string;
    };
  }
  interface Palette {
    accent: Palette["primary"];
  }

  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
      light: indigo[300],
      dark: indigo[700],
    },
    secondary: {
      main: deepOrange[400],
      light: deepOrange[200],
      dark: deepOrange[500],
    },
    accent: {
      main: purple[400],
      light: purple[200],
      dark: purple[500],
    },
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "20px",
  },
  typography: {
    fontFamily: ["orbitron", "ubuntu"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
