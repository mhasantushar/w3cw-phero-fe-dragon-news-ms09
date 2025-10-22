import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";
import router from "./routing/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

    <ToastContainer theme="colored" position="bottom-right" closeOnClick />
  </StrictMode>
);
