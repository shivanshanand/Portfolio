import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { inject } from "@vercel/analytics";
inject();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right" richColors closeButton duration={3000} />
    <App />
  </StrictMode>
);
