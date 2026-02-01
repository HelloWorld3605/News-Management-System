import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "../../shared/components/Header/PublicHeader";
import PublicFooter from "../../shared/components/PublicFooter/PublicFooter";
import PublicArrowUp from "../../shared/components/ArrowUpTop/PublicArrowUp";

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <main>
        <Outlet />
      </main>

      <PublicFooter />
      <PublicArrowUp />
    </>
  );
};

export default PublicLayout;
