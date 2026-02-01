import React from "react";
import LogoSection from "./LogoSection";
import SearchSection from "./SearchSection";
import UserSection from "./UserSection";
import "./Header.css";
const PublicHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-fixed-wrapper ${isScrolled ? "is-scrolled" : ""}`}>
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
    </div>
  );
};

export default PublicHeader;
