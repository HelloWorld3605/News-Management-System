import React from "react";
import PublicLayout from "../layouts/PublicLayouts";
import LoginPage from "../../features/auth/Login/LoginPage";
import RegisterPage from "../../features/auth/Register/RegisterPage";
import HomePageContent from "../../features/public-site/pages/HomePageContent";

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
];

export default publicRoutes;
