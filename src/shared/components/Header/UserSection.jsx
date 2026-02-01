import { Link } from "react-router-dom";

const UserSection = () => {
  return (
    <div className="user-section">
      <nav className="header-nav">
        <Link to="/login" className="header-link">
          Đăng nhập
        </Link>
      </nav>
      <button className="header-menu-button">Xem Thêm</button>
    </div>
  );
};

export default UserSection;
