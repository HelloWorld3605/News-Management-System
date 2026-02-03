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

  // User Dropdown State
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Notification Dropdown State
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);
  const notifDropdownRef = useRef(null);
  const [activeTab, setActiveTab] = useState("notification"); // notification, comments, viewed

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close User Dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      // Close Notification Dropdown
      if (
        notifDropdownRef.current &&
        !notifDropdownRef.current.contains(event.target)
      ) {
        setShowNotifDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
    setShowNotifDropdown(false); // Close other
  };

  const toggleNotifDropdown = () => {
    setShowNotifDropdown((prev) => !prev);
    setShowDropdown(false); // Close other
  };

  const renderNotificationContent = () => {
    switch (activeTab) {
      case "notification":
        return (
          <div className="notification-empty">
            <p>Chưa có thông báo mới.</p>
          </div>
        );
      case "comments":
        return (
          <div className="notification-empty">
            <p>Chưa có ý kiến nào.</p>
          </div>
        );
      case "viewed":
        return (
          <ul className="notification-list">
            <li className="notification-item">
              <h4>Hành trình trở thành thủ khoa</h4>
              <span className="time">2 giờ trước</span>
            </li>
            <li className="notification-item">
              <h4>Tranh cãi sinh viên dùng tool</h4>
              <span className="time">5 giờ trước</span>
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

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
    <div className="user-section">
      {/* User Info Group */}
      <div className="user-section-group" ref={dropdownRef}>
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
      </div>

      {/* Notification Group */}
      <div className="user-section-group" ref={notifDropdownRef}>
        <button
          className="header-notification-button"
          aria-label="Notifications"
          onClick={toggleNotifDropdown}
        >
          <ion-icon name="notifications-outline"></ion-icon>
        </button>

        {showNotifDropdown && (
          <div className="user-dropdown-menu notification-dropdown">
            <div className="notification-header">
              <button
                className={`notification-tab ${activeTab === "notification" ? "active" : ""}`}
                onClick={() => setActiveTab("notification")}
              >
                Thông báo
              </button>
              <button
                className={`notification-tab ${activeTab === "comments" ? "active" : ""}`}
                onClick={() => setActiveTab("comments")}
              >
                Ý kiến
              </button>
              <button
                className={`notification-tab ${activeTab === "viewed" ? "active" : ""}`}
                onClick={() => setActiveTab("viewed")}
              >
                Tin đã xem
              </button>
            </div>
            <div className="notification-content">
              {renderNotificationContent()}
            </div>
          </div>
        )}
      </div>

      <button className="header-menu-button">Xem Thêm</button>
    </div>
  );
};

export default UserSection;
