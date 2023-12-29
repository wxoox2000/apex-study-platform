import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "modern-normalize";
import { createTheme, ThemeProvider } from "@mui/material";

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
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Redux/store.ts";
import { Provider } from "react-redux";

declare module "@mui/material/styles" {
  interface Theme {
    borderRadius: {
      sm: "4px";
      md: "8px";
      lg: "12px";
      xl: "16px";
      "2xl": "20px";
    },
    gradients: {
      lime_skyBlue: "linear-gradient(270deg, #90B6FF 49.92%, #DDFF95 122.79%)",
      blue_purple: "linear-gradient(92deg, #4BAFFF 1.97%, rgba(189, 33, 228, 0.64) 41.64%)",
      rose_cyan: "linear-gradient(270deg, #99FFF9 0%, #FFB7EB 56.12%)",
      peach: "linear-gradient(90deg, #FFAAB4 0.03%, rgba(255, 235, 165, 0.87) 102.59%)",
      darkBlue_purple: "linear-gradient(90deg, #7A5AF8 10%, #FF22E9 89.43%)",
      blue_steel: "linear-gradient(241deg, #9B8AFB 47.48%, #5022D4 80.73%, #7F49FF 100.87%)"
    }
  }
  interface ThemeOptions {
    borderRadius?: {
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      "2xl"?: string;
    },
    gradients?: {
      lime_skyBlue: string;
      blue_purple: string;
      rose_cyan: string;
      peach: string;
      darkBlue_purple: string;
      blue_steel: string;
    }
  }
  interface Palette {
    accent: {
      black: string;
      grey: string;
    };
  }

  interface PaletteOptions {
    accent?: {
      black: string;
      grey: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      dark: "#7A5AF8",
      main: "#98ABFB",
    },
    secondary: {
      main: "#DFC7FF",
      light: "#F8F7FF",
    },
    accent: {
      black: "#040404",
      grey: "#bbbbbb",
    },
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "20px",
  },
  gradients: {
    lime_skyBlue: "linear-gradient(270deg, #90B6FF 49.92%, #DDFF95 122.79%)",
    blue_purple: "linear-gradient(92deg, #4BAFFF 1.97%, rgba(189, 33, 228, 0.64) 41.64%)",
    rose_cyan: "linear-gradient(270deg, #99FFF9 0%, #FFB7EB 56.12%)",
    peach: "linear-gradient(90deg, #FFAAB4 0.03%, rgba(255, 235, 165, 0.87) 102.59%)",
    darkBlue_purple: "linear-gradient(90deg, #7A5AF8 10%, #FF22E9 89.43%)",
    blue_steel: "linear-gradient(241deg, #9B8AFB 47.48%, #5022D4 80.73%, #7F49FF 100.87%)"
  },
  typography: {
    fontFamily: ["orbitron", "ubuntu"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/apex-study-platform">
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
