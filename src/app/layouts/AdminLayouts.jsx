import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../shared/utils/ScrollToTop";
import AdminSideBar from "../../features/admin/components/AdminSideBar/AdminSideBar";
import AdminHeader from "../../features/admin/components/AdminHeader/AdminHeader";
import PublicArrowUp from "../../shared/components/ArrowUpTop/PublicArrowUp";
import "./AdminLayouts.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <ScrollToTop />
      <AdminSideBar />
      <div className="admin-main-content">
        <AdminHeader />
        <main className="admin-page-content">
          <Outlet />
        </main>
      </div>
      <PublicArrowUp />
    </div>
  );
};

export default AdminLayout;
