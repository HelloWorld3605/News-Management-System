import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "../../../assets/AdminIcons";
import "./Modals.css";

const CustomSelect = ({ label, name, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  const updateCoords = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      updateCoords();
      window.addEventListener("resize", updateCoords);
      // Đóng dropdown khi cuộn trang hoặc cuộn modal
      const handleScroll = (e) => {
        if (e.target.classList && e.target.classList.contains("modal-body")) {
          setIsOpen(false);
        }
      };
      document.addEventListener("scroll", handleScroll, true);
      return () => {
        window.removeEventListener("resize", updateCoords);
        document.removeEventListener("scroll", handleScroll, true);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        !event.target.closest(".custom-select-portal-options")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div
      className={`form-group custom-select-group ${isOpen ? "open" : ""}`}
      ref={containerRef}
    >
      <label>{label}</label>
      <div
        ref={triggerRef}
        className={`custom-select-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : "Chọn..."}</span>
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {isOpen &&
        createPortal(
          <div
            className="custom-select-portal-options custom-select-options"
            style={{
              position: "fixed",
              top: coords.top - window.scrollY + 4,
              left: coords.left - window.scrollX,
              width: coords.width,
              zIndex: 9999,
            }}
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                className={`custom-select-option ${
                  value === opt.value ? "selected" : ""
                }`}
                onClick={() => {
                  onChange({ target: { name, value: opt.value } });
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};

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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            <XIcon />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form-wrapper">
          <div className="modal-body">
            <div className="form-group">
              <label>Tên người dùng</label>
              <input
                type="text"
                name="AccountName"
                value={formData.AccountName}
                onChange={handleChange}
                required
                placeholder="Nhập tên người dùng..."
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
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                type="password"
                name="AccountPassword"
                value={formData.AccountPassword || ""}
                onChange={handleChange}
                required={!user}
                placeholder={
                  user
                    ? "Phần này bỏ trống nếu không đổi..."
                    : "Nhập mật khẩu..."
                }
              />
            </div>

            <CustomSelect
              label="Vai trò"
              name="AccountRole"
              value={formData.AccountRole}
              onChange={handleChange}
              options={[
                { value: "ADMIN", label: "Admin" },
                { value: "STAFF", label: "Staff" },
                { value: "READER", label: "Reader" },
              ]}
            />

            <CustomSelect
              label="Trạng thái"
              name="IsActive"
              value={formData.IsActive}
              onChange={handleChange}
              options={[
                { value: 1, label: "Hoạt động" },
                { value: 0, label: "Không hoạt động" },
              ]}
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className="btn-submit">
              Lưu thay đổi
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
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container delete-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Xác nhận xóa</h2>
          <button className="close-btn" onClick={onClose}>
            <XIcon />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <p>
              Bạn có chắc chắn muốn xóa người dùng <strong>{userName}</strong>{" "}
              không?
            </p>
            <p>
              Hành động này sẽ tạm thời ẩn người dùng khỏi danh sách nhưng dữ
              liệu vẫn tồn tại trong hệ thống.
            </p>
          </div>
        </div>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Hủy bỏ
          </button>
          <button className="btn-delete" onClick={onConfirm}>
            Xóa người dùng
          </button>
        </div>
      </div>
    </div>
  );
};
