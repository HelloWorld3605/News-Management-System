import React from "react";
import LogoSection from "./LogoSection";
import SearchSection from "./SearchSection";
import UserSection from "./UserSection";
import "./Header.css";
const PublicHeader = () => {
  return (
    <header className="header responsive-wrapper">
      <div className="header-left">
        <LogoSection />
      </div>
      <div className="header-middle">
        <SearchSection />
      </div>
      <div className="header-right">
        <UserSection />
      </div>
    </header>
  );
};

export default PublicHeader;
