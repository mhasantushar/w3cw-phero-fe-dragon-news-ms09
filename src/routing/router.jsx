import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import NewsLayout from "../layouts/NewsLayout";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/HomePage";
import HomeCategPage from "../pages/HomeCategPage";

// const newsDetailsURL = 'https://raw.githubusercontent.com/mhasantushar/w3educ-bin/refs/heads/main/json/w3cw-phero-fe-dragon-news-ms09/news.json'

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
        path: "/category/:categId",
        element: <HomeCategPage />,
        loader: ()=> fetch('../news.json')
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
