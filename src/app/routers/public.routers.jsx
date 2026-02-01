import React from "react";
import PublicLayout from "../layouts/PublicLayouts";
import LoginPage from "../../features/auth/Login/LoginPage";
import RegisterPage from "../../features/auth/Register/RegisterPage";
import HomePageContent from "../../features/public-site/pages/HomePageContent";
import ArticleDetails from "../../features/article/pages/ArticleDetails";

const publicRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ index: true, element: <HomePageContent /> }],
  },
  {
    path: "/article-details",
    element: <PublicLayout />,
    children: [{ index: true, element: <ArticleDetails /> }],
  },
];

export default publicRoutes;
