import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";
import DefaultRouter from "./routing/DefaultRouter.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={DefaultRouter} />
    </AuthProvider>

    <ToastContainer theme="colored" position="bottom-right" closeOnClick />
  </StrictMode>
);
