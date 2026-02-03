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

const ShieldIcon = ({ className }) => (
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
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
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
            <h1 className="um-title">Users Management</h1>
            <p className="um-subtitle">Manage system users and permissions</p>
          </div>
          <button className="um-btn-add">
            <span style={{ marginRight: "8px", display: "flex" }}>
              <PlusIcon />
            </span>
            Add User
          </button>
        </div>

        {/* Role Information */}
        <div className="um-card">
          <div className="um-card-header">
            <h3 className="um-card-title">User Roles</h3>
            <p className="um-card-description">Available roles in the system</p>
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
                  <ShieldIcon
                    className="text-red-600"
                    style={{ color: "#dc2626" }}
                  />
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>
                    Admin
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#64748b",
                    margin: 0,
                  }}
                >
                  Full access to all features and user management
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
                  <ShieldIcon
                    className="text-blue-600"
                    style={{ color: "#2563eb" }}
                  />
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>
                    Editor
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#64748b",
                    margin: 0,
                  }}
                >
                  Can create, edit, and publish articles
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
                  <ShieldIcon
                    className="text-purple-600"
                    style={{ color: "#9333ea" }}
                  />
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>
                    Writer
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#64748b",
                    margin: 0,
                  }}
                >
                  Can create and edit articles, needs approval to publish
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
                  <ShieldIcon
                    className="text-gray-600"
                    style={{ color: "#4b5563" }}
                  />
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>
                    Contributor
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#64748b",
                    margin: 0,
                  }}
                >
                  Can create articles, requires review before publishing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="um-card">
          <div className="um-card-header">
            <h3 className="um-card-title">All Users</h3>
            <p className="um-card-description">
              Total {users.length} users in the system
            </p>
          </div>
          <div className="um-card-content">
            <div className="um-table-container">
              <table className="um-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th className="text-center">Articles</th>
                    <th className="text-right">Actions</th>
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
            <div className="um-card-header" style={{ paddingBottom: "0.5rem" }}>
              <h3 className="um-card-title um-card-title-sm">Total Users</h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">{users.length}</div>
              <p className="um-stat-label">Registered users</p>
            </div>
          </div>
          <div className="um-card">
            <div className="um-card-header" style={{ paddingBottom: "0.5rem" }}>
              <h3 className="um-card-title um-card-title-sm">Active Users</h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">
                {users.filter((u) => u.status === "Active").length}
              </div>
              <p className="um-stat-label">Active accounts</p>
            </div>
          </div>
          <div className="um-card">
            <div className="um-card-header" style={{ paddingBottom: "0.5rem" }}>
              <h3 className="um-card-title um-card-title-sm">Admin Users</h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">
                {users.filter((u) => u.role === "Admin").length}
              </div>
              <p className="um-stat-label">Administrative users</p>
            </div>
          </div>
          <div className="um-card">
            <div className="um-card-header" style={{ paddingBottom: "0.5rem" }}>
              <h3 className="um-card-title um-card-title-sm">Total Articles</h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">
                {users.reduce((sum, u) => sum + u.articles, 0)}
              </div>
              <p className="um-stat-label">By all users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
