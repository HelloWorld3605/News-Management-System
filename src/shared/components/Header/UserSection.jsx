import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import {
  AuthStateContext,
  AuthActionContext,
} from "../../../app/provider/AuthProvider";

const UserSection = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin } = useContext(AuthStateContext);
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

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  // ======================
  // CHƯA ĐĂNG NHẬP
  // ======================
  if (!isAuthenticated) {
    return (
      <div className="user-section">
        <nav className="header-nav">
          <Link to="/login" className="header-link">
            Đăng nhập
          </Link>
          <Link to="/register" className="header-link">
            Đăng ký
          </Link>
        </nav>

        <button
          className="header-notification-button"
          aria-label="Notifications"
        >
          <ion-icon name="notifications-outline"></ion-icon>
        </button>

        <button className="header-menu-button">Xem Thêm</button>
      </div>
    );
  }

  // ======================
  // ĐÃ ĐĂNG NHẬP
  // ======================
  return (
    <div className="user-section" ref={dropdownRef}>
      <div
        className={`header-user-info ${showDropdown ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        <span className="user-name">{user.AccountName}</span>
        <span className="user-role">({user.AccountRole})</span>
      </div>

      {showDropdown && (
        <div className="user-dropdown-menu">
          {isAdmin && (
            <Link
              to="/admin/dashboard"
              className="dropdown-item"
              onClick={() => setShowDropdown(false)}
            >
              Trang quản trị
            </Link>
          )}
          <Link
            to="/settings"
            className="dropdown-item"
            onClick={() => setShowDropdown(false)}
          >
            Cài đặt
          </Link>
          <div className="dropdown-divider"></div>
          <button
            onClick={() => {
              logout();
              setShowDropdown(false);
            }}
            className="dropdown-item dropdown-logout-btn"
          >
            Đăng xuất
          </button>
        </div>
      )}

      <button className="header-notification-button" aria-label="Notifications">
        <ion-icon name="notifications-outline"></ion-icon>
      </button>

      <button className="header-menu-button">Xem Thêm</button>
    </div>
  );
};

export default UserSection;
