import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AuthStateContext,
  AuthActionContext,
} from "../../../../app/provider/AuthProvider";
import "./AdminHeader.css";

const AdminHeader = () => {
  const { user, isAdmin } = useContext(AuthStateContext);
  const { logout } = useContext(AuthActionContext);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <h2 className="admin-page-title">Dashboard</h2>
      </div>
      <div className="admin-header-right">
        <Link to="/" className="admin-home-link" title="Back to Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="admin-home-text">Trang Chủ</span>
        </Link>

        {isAdmin && user ? (
          <div className="admin-user-group" ref={dropdownRef}>
            <div
              className={`admin-user-info ${showDropdown ? "active" : ""}`}
              onClick={toggleDropdown}
            >
              <span className="admin-user-name">{user.AccountName}</span>
              <span className="admin-user-role">({user.AccountRole})</span>
            </div>

            {showDropdown && (
              <div className="admin-dropdown-menu">
                <button
                  onClick={() => {
                    logout();
                    setShowDropdown(false);
                  }}
                  className="admin-dropdown-item admin-dropdown-logout-btn"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="admin-user-placeholder">
            
            <button className="admin-user-avatar">A</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
