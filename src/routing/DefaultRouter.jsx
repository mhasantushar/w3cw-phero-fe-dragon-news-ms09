import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import HomeCategPage from "../pages/HomeCategPage";
import AuthLayout from "../layouts/AuthLayout";
import AuthSignInPage from "../pages/AuthSignInPage";
import AuthSignOnPage from "../pages/AuthSignOnPage";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import PrivateRouter from "./PrivateRouter";
import ShowLoadingCircle from "../compos/ShowLoadingCircle";
import ShowLoadingHash from "../compos/ShowLoadingHash";

const DefaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    HydrateFallbackElement: <ShowLoadingCircle />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category/:categId",
        element: <HomeCategPage />,
        loader: () => fetch("../news.json"),
        hydrateFallbackElement: <ShowLoadingHash />,
      },
    ],
  },
  {
    path: "/news/:nid",
    element: (
      <PrivateRouter>
        <NewsDetailsPage />
      </PrivateRouter>
    ),
    loader: () => fetch("../news.json"),
    hydrateFallbackElement: <ShowLoadingHash />,
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
