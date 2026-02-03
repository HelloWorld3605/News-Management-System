import React, { useState, useEffect } from "react";
import "./Modals.css";

export const UserModal = ({ isOpen, onClose, onSubmit, user, title }) => {
  const [formData, setFormData] = useState({
    AccountName: "",
    AccountEmail: "",
    AccountPassword: "",
    AccountRole: "READER",
    IsActive: 1,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        AccountName: user.AccountName,
        AccountEmail: user.AccountEmail,
        AccountPassword: user.AccountPassword,
        AccountRole: user.AccountRole,
        IsActive: user.IsActive,
      });
    } else {
      setFormData({
        AccountName: "",
        AccountEmail: "",
        AccountPassword: "",
        AccountRole: "READER",
        IsActive: 1,
      });
    }
  }, [user, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "IsActive" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Tên người dùng</label>
            <input
              type="text"
              name="AccountName"
              value={formData.AccountName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="AccountEmail"
              value={formData.AccountEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="AccountPassword"
              value={formData.AccountPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Vai trò</label>
            <select
              name="AccountRole"
              value={formData.AccountRole}
              onChange={handleChange}
            >
              <option value="ADMIN">Admin</option>
              <option value="STAFF">Staff</option>
              <option value="READER">Reader</option>
            </select>
          </div>
          <div className="form-group">
            <label>Trạng thái</label>
            <select
              name="IsActive"
              value={formData.IsActive}
              onChange={handleChange}
            >
              <option value={1}>Hoạt động</option>
              <option value={0}>Không hoạt động</option>
            </select>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className="btn-submit">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const DeleteConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  userName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container delete-modal">
        <div className="modal-header">
          <h2>Xác nhận xóa</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <p>
            Bạn có chắc chắn muốn xóa người dùng <strong>{userName}</strong>{" "}
            không?
          </p>
          <p>Hành động này không thể hoàn tác.</p>
        </div>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Hủy
          </button>
          <button className="btn-delete" onClick={onConfirm}>
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};
