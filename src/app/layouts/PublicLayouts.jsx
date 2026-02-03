import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "../../shared/components/Header/PublicHeader";
import PublicFooter from "../../shared/components/PublicFooter/PublicFooter";
import PublicArrowUp from "../../shared/components/ArrowUpTop/PublicArrowUp";
import PublicSideBar from "../../shared/components/SideBar/PublicSideBar";
import ScrollToTop from "../../shared/utils/ScrollToTop";

const PublicLayout = () => {
  return (
    <>
      <ScrollToTop />
      <PublicHeader />
      <PublicSideBar />
      <main>
        <Outlet />
      </main>
      <PublicFooter />
      <PublicArrowUp />
    </>
  );
};

export default PublicLayout;
