import React from "react";
import { Link } from "react-router-dom";
import "./PublicSideBar.css";

const sidebarItems = [
  { label: "Tuyển sinh", path: "/tuyen-sinh" },
  { label: "Tin tức – Thông báo", path: "/tin-tuc" },
  { label: "Sự kiện", path: "/su-kien" },
  { label: "Đào tạo – Học thuật", path: "/dao-tao" },
  { label: "Đời sống sinh viên", path: "/doi-song-sinh-vien" },
  { label: "Công nghệ – Đổi mới sáng tạo", path: "/cong-nghe" },
  { label: "Hướng nghiệp – Việc làm", path: "/viec-lam" },
  { label: "Thể thao", path: "/the-thao" },
];

const PublicSideBar = () => {
  return (
    <aside className="public-sidebar responsive-wrapper">
      <div className="public-sidebar-header">
        <h3>Thể loại</h3>
      </div>
      <ul className="public-sidebar-list">
        {sidebarItems.map((item, index) => (
          <li className="public-sidebar-item" key={index}>
            <Link to={item.path} className="public-sidebar-item-title">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PublicSideBar;
