import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import NewsLayout from "../layouts/NewsLayout";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/HomePage";
import CategNewsPage from "../pages/CategNewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category/:catid",
        element: <CategNewsPage />,
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [{}],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{}],
  },
  {
    path: "/*",
    element: <h3>Error 404!</h3>,
  },
]);

export default router;
