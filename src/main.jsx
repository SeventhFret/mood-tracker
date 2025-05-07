import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./index.css";
import App from "./App.jsx";

const theme = createTheme({
  primaryColor: "teal",
  fontSizes: {
    xs: rem(12),
    sm: rem(15),
    md: rem(18),
    lg: rem(20),
    xl: rem(24),
  },
  headings: {
    fontWeight: "600",

    sizes: {
      h1: {
        fontWeight: "900",
        fontSize: rem(40),
        color: "white",
        lineHeight: "1.4",
      },
      h2: { fontSize: rem(30), lineHeight: "1.5" },
      h4: { fontSize: rem(20), fontWeight: 700 },
      h6: { fontWeight: "900" },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
);
