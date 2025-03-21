import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
