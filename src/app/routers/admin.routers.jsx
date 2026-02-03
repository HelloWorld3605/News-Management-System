import React from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayouts";
import DashBoardManagement from "../../features/admin/pages/DashBoardManagement/DashBoardManagement";
import UserManagement from "../../features/admin/pages/UserManagement/UserManagement";
import CategoriesManagement from "../../features/admin/pages/CategoriesManagement/CategoriesManagement";
import NewsArticleManagement from "../../features/admin/pages/NewsArticleManagement";
import TagsManagement from "../../features/admin/pages/TagsManagement";
import ArticleContentManagement from "../../features/admin/pages/ArticleContentManagement";
import NewsTagsManagement from "../../features/admin/pages/NewsTagsManagement";
import CommentsManagement from "../../features/admin/pages/CommentsManagement";

const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <DashBoardManagement /> },
      { path: "users", element: <UserManagement /> },
      { path: "categories", element: <CategoriesManagement /> },
      { path: "news-articles", element: <NewsArticleManagement /> },
      { path: "tags", element: <TagsManagement /> },
      { path: "article-contents", element: <ArticleContentManagement /> },
      { path: "news-tags", element: <NewsTagsManagement /> },
      { path: "comments", element: <CommentsManagement /> },
    ],
  },
];

export default adminRoutes;
