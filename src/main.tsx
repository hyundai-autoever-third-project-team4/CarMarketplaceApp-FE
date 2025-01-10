import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { RouteProvider } from "./app/router/index.tsx";
import theme from "./shared/styles/theme.ts";
import "./reset.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RouteProvider />
    </QueryClientProvider>
  </ThemeProvider>
);
