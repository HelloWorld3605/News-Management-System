import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "../../shared/components/Header/PublicHeader";
import PublicFooter from "../../shared/components/PublicFooter/PublicFooter";

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <main>
         <Outlet />
      </main>
     
     <PublicFooter />
    </>
  );
};

export default PublicLayout;
