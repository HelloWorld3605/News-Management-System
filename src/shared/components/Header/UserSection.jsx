import { Link } from "react-router-dom";

const UserSection = () => {
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
      <button className="header-notification-button" aria-label="Notifications">
        <ion-icon name="notifications-outline"></ion-icon>
      </button>
      <button className="header-menu-button">Xem Thêm</button>
    </div>
  );
};

export default UserSection;
