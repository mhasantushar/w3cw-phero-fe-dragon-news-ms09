import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import HomeCategPage from "../pages/HomeCategPage";
import AuthLayout from "../layouts/AuthLayout";
import AuthSignInPage from "../pages/AuthSignInPage";
import AuthSignOnPage from "../pages/AuthSignOnPage";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import PrivateRouter from "./PrivateRouter";

const DefaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // HydrateFallback:
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category/:categId",
        element: <HomeCategPage />,
        loader: () => fetch("../news.json"),
      },
    ],
  },
  {
    path: "/news/:nid",
    element: <PrivateRouter><NewsDetailsPage /></PrivateRouter>,
    loader: () => fetch("../news.json"),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <AuthSignInPage />,
      },
      {
        path: "/auth/signin",
        element: <AuthSignInPage />,
      },
      {
        path: "/auth/register",
        element: <AuthSignOnPage />,
      },
      {
        path: "/auth/signon",
        element: <AuthSignOnPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <h3>Error 404!</h3>,
  },
]);

export default DefaultRouter;
