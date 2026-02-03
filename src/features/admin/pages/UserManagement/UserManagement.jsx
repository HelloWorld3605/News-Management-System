import React, { useState, useEffect } from "react";
import userService from "../../../../shared/services/userService";
import {
  PlusIcon,
  MailIcon,
  EditIcon,
  TrashIcon,
  ShieldIcon,
  UsersIcon,
  BookOpenIcon,
  AdminIcon,
} from "../../../../assets/AdminIcons";
import { UserModal, DeleteConfirmModal } from "../../components/UserModals";
import "./UserManagement.css";

const RoleBadge = ({ role }) => {
  let badgeClass = "um-badge um-badge-default";
  if (role === "ADMIN") badgeClass = "um-badge um-badge-admin";
  else if (role === "STAFF") badgeClass = "um-badge um-badge-staff";
  else if (role === "READER") badgeClass = "um-badge um-badge-reader";

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
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await userService.getAll();
      const allUsers = response.data;
      // Only show users that are not soft-deleted
      setUsers(allUsers.filter((u) => u.isDeleted !== true));
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (formData) => {
    try {
      const newAccountID =
        users.length > 0
          ? Math.max(...users.map((u) => u.AccountID || 0)) + 1
          : 1;

      const userData = {
        ...formData,
        AccountID: newAccountID,
        isDeleted: false,
        id: newAccountID.toString(), // Ensure id is a string for json-server
      };

      await userService.create(userData);
      fetchUsers();
      setIsAddOpen(false);
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };

  const handleUpdateUser = async (formData) => {
    try {
      if (selectedUser) {
        // Use .id (string) for json-server routing
        await userService.update(selectedUser.id, formData);
        fetchUsers();
        setIsEditOpen(false);
        setSelectedUser(null);
      }
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      if (selectedUser) {
        // Soft delete: Update isDeleted to true
        // Use .id for identification
        await userService.update(selectedUser.id, {
          ...selectedUser,
          isDeleted: true,
        });
        fetchUsers();
        setIsDeleteOpen(false);
        setSelectedUser(null);
      }
    } catch (error) {
      console.error("Failed to soft delete user", error);
    }
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditOpen(true);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setIsDeleteOpen(true);
  };

  return (
    <div className="user-management-container">
      <div className="user-management-content">
        {/* Page Header */}
        <div className="um-page-header">
          <div>
            <h1 className="um-title">Trang Quản Lý Người Dùng</h1>
            <p className="um-subtitle">Quản lý người dùng và quyền hạn</p>
          </div>
          <button className="um-btn-add" onClick={() => setIsAddOpen(true)}>
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
                  Có thể tạo, chỉnh sửa, xuất bản bài viết, có thể quản lý bình
                  luận
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
                  Có thể đọc bài viết và bình luận vào bài viết
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
                    Guest
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

                    <th className="text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.AccountID}>
                      <td>
                        <div className="um-user-cell">
                          <div className="um-avatar-fallback">
                            {user.AccountName.split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <span className="um-user-name">
                            {user.AccountName}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="um-email-cell">
                          <MailIcon />
                          {user.AccountEmail}
                        </div>
                      </td>
                      <td>
                        <RoleBadge role={user.AccountRole} />
                      </td>
                      <td>
                        <StatusBadge
                          status={user.IsActive === 1 ? "Active" : "Inactive"}
                        />
                      </td>

                      <td>
                        <div className="um-actions">
                          <button
                            className="um-action-btn edit"
                            onClick={() => openEditModal(user)}
                          >
                            <EditIcon />
                          </button>
                          <button
                            className="um-action-btn delete"
                            onClick={() => openDeleteModal(user)}
                          >
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
                {users.filter((u) => u.IsActive === 1).length}
              </div>
              <p className="um-stat-label">Tài khoản hoạt động</p>
            </div>
          </div>
          <div className="um-card">
            <div className="um-card-header">
              <h3 className="um-card-title um-card-title-sm">
                Tổng số người dùng quản trị viên
              </h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">
                {users.filter((u) => u.AccountRole === "ADMIN").length}
              </div>
              <p className="um-stat-label">Người dùng quản trị viên</p>
            </div>
          </div>
          <div className="um-card">
            <div className="um-card-header">
              <h3 className="um-card-title um-card-title-sm">
                Tổng số nhân viên
              </h3>
            </div>
            <div className="um-card-content">
              <div className="um-stat-value">
                {users.filter((u) => u.AccountRole === "STAFF").length}
              </div>
              <p className="um-stat-label">Nhân viên</p>
            </div>
          </div>
        </div>
      </div>
      <UserModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleCreateUser}
        title="Thêm người dùng mới"
      />

      <UserModal
        isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedUser(null);
        }}
        onSubmit={handleUpdateUser}
        user={selectedUser}
        title="Chỉnh sửa người dùng"
      />

      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => {
          setIsDeleteOpen(false);
          setSelectedUser(null);
        }}
        onConfirm={handleDeleteUser}
        userName={selectedUser?.AccountName}
      />
    </div>
  );
};

export default UserManagement;
