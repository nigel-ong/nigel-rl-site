import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { VideoModalProvider } from "./hooks/useVideoModal";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <VideoModalProvider>
          <Toaster />
          <App />
        </VideoModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);
