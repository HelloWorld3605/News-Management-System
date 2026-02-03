import React, { useState } from "react";
import "./UserManagement.css";

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

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "black" }}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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

const ShieldIcon = ({ className, style }) => (
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
    className={className}
    style={style}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const UsersIcon = ({ className, style }) => (
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
    className={className}
    style={style}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BookOpenIcon = ({ className, style }) => (
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
    className={className}
    style={style}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const AdminIcon = ({ className, style }) => (
  <svg
    className={`svg-icon ${className}`}
    style={{
      ...style,
      width: "1.3em",
      height: "1.5em",
      verticalAlign: "middle",
      fill: "currentColor",
      overflow: "hidden",
    }}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M315.392 507.904c-81.92-40.96-137.216-122.88-137.216-221.184 0-135.168 110.592-245.76 245.76-245.76s245.76 110.592 245.76 245.76c0 133.12-104.448 241.664-237.568 245.76h-2.048c-202.752 0-368.64 165.888-368.64 368.64 0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48c0-186.368 124.928-344.064 294.912-393.216z m108.544-16.384c112.64 0 204.8-92.16 204.8-204.8s-92.16-204.8-204.8-204.8-204.8 92.16-204.8 204.8 92.16 204.8 204.8 204.8z m561.152 135.168l4.096 10.24-49.152 59.392c-8.192 10.24-8.192 26.624 0 36.864l49.152 57.344-4.096 10.24c-10.24 28.672-24.576 57.344-45.056 79.872l-8.192 8.192-75.776-12.288c-12.288-2.048-26.624 6.144-30.72 18.432l-26.624 73.728-10.24 2.048c-38.912 8.192-77.824 8.192-116.736 0l-12.288-2.048-24.576-71.68c-4.096-12.288-18.432-20.48-30.72-18.432l-77.824 12.288-8.192-8.192c-10.24-10.24-18.432-22.528-24.576-34.816-8.192-14.336-16.384-30.72-20.48-47.104l-4.096-10.24 51.2-57.344c8.192-10.24 8.192-26.624 0-34.816l-49.152-59.392 4.096-10.24c10.24-30.72 26.624-57.344 47.104-81.92l8.192-8.192 73.728 12.288c12.288 2.048 26.624-6.144 32.768-18.432l26.624-71.68 10.24-2.048c36.864-8.192 75.776-8.192 114.688 0l12.288 2.048 24.576 69.632c4.096 12.288 18.432 22.528 32.768 20.48l75.776-10.24 8.192 8.192c10.24 12.288 18.432 22.528 24.576 36.864 6.144 10.24 12.288 26.624 18.432 40.96z m-57.344-24.576c-4.096-8.192-8.192-14.336-14.336-22.528l-53.248 6.144c-32.768 4.096-65.536-16.384-75.776-47.104L768 491.52c-24.576-4.096-49.152-4.096-73.728 0l-18.432 49.152c-10.24 30.72-45.056 51.2-77.824 45.056l-51.2-8.192c-12.288 14.336-20.48 32.768-28.672 49.152l34.816 40.96c20.48 24.576 20.48 63.488 0 88.064l-34.816 40.96c4.096 10.24 8.192 18.432 14.336 28.672 4.096 8.192 8.192 14.336 14.336 20.48l55.296-8.192c32.768-4.096 65.536 16.384 75.776 47.104l16.384 49.152c24.576 4.096 51.2 4.096 75.776 0l18.432-51.2c10.24-30.72 45.056-51.2 75.776-45.056l51.2 8.192c10.24-14.336 20.48-30.72 26.624-49.152l-32.768-38.912c-20.48-24.576-22.528-63.488-2.048-88.064l34.816-40.96c-4.096-8.192-8.192-16.384-14.336-26.624z m-196.608 204.8c-51.2 0-92.16-40.96-92.16-92.16s40.96-92.16 92.16-92.16 92.16 40.96 92.16 92.16-43.008 92.16-92.16 92.16z m0-40.96c28.672 0 51.2-22.528 51.2-51.2s-22.528-51.2-51.2-51.2-51.2 22.528-51.2 51.2 22.528 51.2 51.2 51.2z" />
  </svg>
);

const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@fu.edu.vn",
    role: "Admin",
    status: "Active",
    articles: 24,
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@fu.edu.vn",
    role: "Editor",
    status: "Active",
    articles: 18,
  },
  {
    id: 3,
    name: "Lê Hoàng C",
    email: "lhoangc@fu.edu.vn",
    role: "Writer",
    status: "Active",
    articles: 12,
  },
  {
    id: 4,
    name: "Phạm Minh D",
    email: "pminmd@fu.edu.vn",
    role: "Contributor",
    status: "Active",
    articles: 8,
  },
  {
    id: 5,
    name: "Hoàng Thúy E",
    email: "hthuyе@fu.edu.vn",
    role: "Writer",
    status: "Inactive",
    articles: 5,
  },
  {
    id: 6,
    name: "Vũ Quang F",
    email: "vquangf@fu.edu.vn",
    role: "Contributor",
    status: "Active",
    articles: 3,
  },
  {
    id: 7,
    name: "Đặng Hương G",
    email: "dhg@fu.edu.vn",
    role: "Editor",
    status: "Active",
    articles: 15,
  },
  {
    id: 8,
    name: "Bùi Sơn H",
    email: "bsonh@fu.edu.vn",
    role: "Admin",
    status: "Active",
    articles: 22,
  },
];

const RoleBadge = ({ role }) => {
  let badgeClass = "um-badge um-badge-default";
  if (role === "Admin") badgeClass = "um-badge um-badge-admin";
  else if (role === "Editor") badgeClass = "um-badge um-badge-editor";
  else if (role === "Writer") badgeClass = "um-badge um-badge-writer";

  return <span className={badgeClass}>{role}</span>;
};

const StatusBadge = ({ status }) => {
  const badgeClass =
    status === "Active"
      ? "um-badge um-status-active"
      : "um-badge um-status-inactive";
  return <span className={badgeClass}>{status}</span>;
};

const UserManagement = () => {
  return (
    <div className="user-management-container">
      <div className="user-management-content">
        {/* Page Header */}
        <div className="um-page-header">
          <div>
            <h1 className="um-title">Trang Quản Lý Người Dùng</h1>
            <p className="um-subtitle">Quản lý người dùng và quyền hạn</p>
          </div>
          <button className="um-btn-add">
            <span style={{ marginRight: "8px", display: "flex" }}></span>+ Thêm
            User
          </button>
        </div>

        {/* Role Information */}
        <div className="um-card">
          <div className="um-card-header">
            <h3 className="um-card-title">Thông tin quyền hạn</h3>
            <p className="um-card-description">
              Các quyền hạn có sẵn trong hệ thống
            </p>
          </div>
          <div className="um-card-content">
            <div className="um-roles-grid">
              <div className="um-role-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <AdminIcon
                    className="text-red-600"
                    style={{ color: "#E7000B" }}
                  />
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>
                    Admin
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgb(107, 93, 81)",
                    margin: 0,
                  }}
                >
                  Toàn quyền truy cập vào tất cả các tính năng và quản lý người
                  dùng
                </p>
              </div>
              <div className="um-role-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <UsersIcon
                    className="text-blue-600"
                    style={{ color: "#2563eb" }}
                  />
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>
                    Staff
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgb(107, 93, 81)",
                    margin: 0,
                  }}
                >
                  Có thể tạo, chỉnh sửa và xuất bản bài viết
                </p>
              </div>
              <div className="um-role-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <BookOpenIcon
                    className="text-purple-600"
                    style={{ color: "#9333ea" }}
                  />
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>
                    Reader
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgb(107, 93, 81)",
                    margin: 0,
                  }}
                >
                  Chỉ có thể đọc bài viết
                </p>
              </div>
              {/* <div className="um-role-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <ShieldIcon
                    className="text-gray-600"
                    style={{ color: "#4b5563" }}
                  />
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>
                    Sớm ra mắt
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgb(107, 93, 81)",
                    margin: 0,
                  }}
                >
                  Sớm ra mắt
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="um-card">
          <div className="um-card-header">
            <h3 className="um-card-title">Danh sách người dùng</h3>
            <p className="um-card-description">
              Tổng {users.length} người dùng trong hệ thống
            </p>
          </div>
          <div className="um-card-content">
            <div className="um-table-container">
              <table className="um-table">
                <thead>
                  <tr>
                    <th>Người dùng</th>
                    <th>Email</th>
                    <th>Vai trò</th>
                    <th>Trạng thái</th>
                    <th className="text-center">Bài viết</th>
                    <th className="text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className="um-user-cell">
                          <div className="um-avatar-fallback">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <span className="um-user-name">{user.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="um-email-cell">
                          <MailIcon />
                          {user.email}
                        </div>
                      </td>
                      <td>
                        <RoleBadge role={user.role} />
                      </td>
                      <td>
                        <StatusBadge status={user.status} />
                      </td>
                      <td className="text-center">
                        <span style={{ fontWeight: 500 }}>{user.articles}</span>
                      </td>
                      <td>
                        <div className="um-actions">
                          <button className="um-action-btn edit">
                            <EditIcon />
                          </button>
                          <button className="um-action-btn delete">
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

        {/* Stats Grid */}
        <div className="um-stats-grid">
          <div className="um-card">
            <div className="um-card-header">
              <h3 className="um-card-title um-card-title-sm">
                Tổng số người dùng
              </h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">{users.length}</div>
              <p className="um-stat-label">Người dùng đã đăng ký</p>
            </div>
          </div>
          <div className="um-card">
            <div className="um-card-header">
              <h3 className="um-card-title um-card-title-sm">
                Người dùng hoạt động
              </h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">
                {users.filter((u) => u.status === "Active").length}
              </div>
              <p className="um-stat-label">Tài khoản hoạt động</p>
            </div>
          </div>
          <div className="um-card">
            <div className="um-card-header">
              <h3 className="um-card-title um-card-title-sm">
                Người dùng quản trị
              </h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">
                {users.filter((u) => u.role === "Admin").length}
              </div>
              <p className="um-stat-label">Người dùng quản trị</p>
            </div>
          </div>
          <div className="um-card">
            <div className="um-card-header">
              <h3 className="um-card-title um-card-title-sm">
                Tổng số bài viết
              </h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">
                {users.reduce((sum, u) => sum + u.articles, 0)}
              </div>
              <p className="um-stat-label">Tổng số bài viết</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
