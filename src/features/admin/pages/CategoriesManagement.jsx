import React, { useState } from "react";
import "./CategoriesManagement.css";

// SVG Icons
const PlusIcon = () => (
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
    style={{ color: "rgb(139, 111, 71)" }}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);

const categoriesData = [
  {
    CategoryID: 1,
    CategoryName: "Tuyển sinh",
    Slug: "tuyen-sinh",
    IsActive: 1,
  },
  {
    CategoryID: 2,
    CategoryName: "Tin tức – Thông báo",
    Slug: "tin-tuc",
    IsActive: 1,
  },
  {
    CategoryID: 3,
    CategoryName: "Sự kiện",
    Slug: "su-kien",
    IsActive: 1,
  },
  {
    CategoryID: 4,
    CategoryName: "Đào tạo – Học thuật",
    Slug: "dao-tao",
    IsActive: 1,
  },
  {
    CategoryID: 5,
    CategoryName: "Đời sống sinh viên",
    Slug: "doi-song-sinh-vien",
    IsActive: 1,
  },
  {
    CategoryID: 6,
    CategoryName: "Công nghệ – Đổi mới sáng tạo",
    Slug: "cong-nghe",
    IsActive: 1,
  },
  {
    CategoryID: 7,
    CategoryName: "Hướng nghiệp – Việc làm",
    Slug: "viec-lam",
    IsActive: 1,
  },
  {
    CategoryID: 8,
    CategoryName: "Thể thao",
    Slug: "the-thao",
    IsActive: 1,
  },
];

const StatusBadge = ({ isActive }) => {
  const badgeClass = isActive
    ? "cm-badge cm-status-active"
    : "cm-badge cm-status-inactive";
  return <span className={badgeClass}>{isActive ? "Active" : "Inactive"}</span>;
};

const CategoriesManagement = () => {
  const [categories, setCategories] = useState(categoriesData);

  return (
    <div className="categories-management-container">
      <div className="categories-management-content">
        {/* Page Header */}
        <div className="cm-page-header">
          <div>
            <h1 className="cm-title">Trang Quản Lý Danh Mục</h1>
            <p className="cm-subtitle">
              Quản lý các danh mục bài viết trong hệ thống
            </p>
          </div>
          <button className="cm-btn-add">
            <span style={{ marginRight: "8px", display: "flex" }}></span>+ Thêm
            Danh Mục
          </button>
        </div>

        {/* Stats Grid */}
        <div className="cm-stats-grid">
          <div className="cm-card">
            <div className="cm-card-header">
              <h3 className="cm-card-title cm-card-title-sm">
                Tổng số danh mục
              </h3>
            </div>
            <div className="cm-card-content">
              <div className="cm-stat-value">{categories.length}</div>
              <p className="cm-stat-label">Danh mục hiện có</p>
            </div>
          </div>
          <div className="cm-card">
            <div className="cm-card-header">
              <h3 className="cm-card-title cm-card-title-sm">
                Danh mục hoạt động
              </h3>
            </div>
            <div className="cm-card-content">
              <div className="cm-stat-value">
                {categories.filter((c) => c.IsActive).length}
              </div>
              <p className="cm-stat-label">Đang hiển thị</p>
            </div>
          </div>
          <div className="cm-card">
            <div className="cm-card-header">
              <h3 className="cm-card-title cm-card-title-sm">Danh mục ẩn</h3>
            </div>
            <div className="cm-card-content">
              <div className="cm-stat-value">
                {categories.filter((c) => !c.IsActive).length}
              </div>
              <p className="cm-stat-label">Đang ẩn</p>
            </div>
          </div>
          {/* Placeholder for layout consistency if 4 columns are used */}
          <div className="cm-card">
            <div className="cm-card-header">
              <h3 className="cm-card-title cm-card-title-sm">Danh mục mới</h3>
            </div>
            <div className="cm-card-content">
              <div className="cm-stat-value">0</div>
              <p className="cm-stat-label">Trong tháng này</p>
            </div>
          </div>
        </div>

        {/* Categories Table */}
        <div className="cm-card">
          <div className="cm-card-header">
            <h3 className="cm-card-title">Tất cả thể loại</h3>
            <p className="cm-card-description">
              Danh sách {categories.length} danh mục trong hệ thống
            </p>
          </div>
          <div className="cm-card-content">
            <div className="cm-table-container">
              <table className="cm-table">
                <thead>
                  <tr>
                    <th>Tiêu đề</th>
                    <th>Slug</th>
                    <th>Trạng thái</th>
                    <th className="text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.CategoryID}>
                      <td>
                        <div className="cm-user-cell">
                          <span className="cm-user-name">
                            {category.CategoryName}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div
                          className="cm-user-name"
                          style={{ fontWeight: 400 }}
                        >
                          {category.Slug}
                        </div>
                      </td>
                      <td>
                        <StatusBadge isActive={category.IsActive} />
                      </td>
                      <td>
                        <div className="cm-actions">
                          <button className="cm-action-btn edit">
                            <EditIcon />
                          </button>
                          <button className="cm-action-btn delete">
                            <TrashIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesManagement;
