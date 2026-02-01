import React from "react";
import logo from "../../../assets/FU NEWS 2.png";
import { Link } from "react-router-dom";

const LogoSection = () => {
  return (
    <div className="logo-section">
      <Link to="/">
        <img src={logo} alt="FU NEWS" />
      </Link>
    </div>
  );
};

export default LogoSection;
