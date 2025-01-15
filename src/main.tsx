import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { RouteProvider } from "./app/router/index.tsx";
import theme from "./shared/styles/theme.ts";
import { NavermapsProvider } from "react-naver-maps";
import "./reset.css";
import "swiper/css";
import "swiper/css/pagination";

const NAVERMAP_KEY = import.meta.env.VITE_NAVERMAP_KEY;
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <NavermapsProvider ncpClientId={NAVERMAP_KEY}>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouteProvider />
      </QueryClientProvider>
    </ThemeProvider>
  </NavermapsProvider>
);
