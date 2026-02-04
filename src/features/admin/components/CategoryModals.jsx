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

export const CategoryModal = ({
  isOpen,
  onClose,
  onSubmit,
  category,
  title,
}) => {
  const [formData, setFormData] = useState({
    CategoryName: "",
    Slug: "",
    IsActive: 1,
  });

  useEffect(() => {
    if (category) {
      setFormData({
        CategoryName: category.CategoryName,
        Slug: category.Slug,
        IsActive: category.IsActive,
      });
    } else {
      setFormData({
        CategoryName: "",
        Slug: "",
        IsActive: 1,
      });
    }
  }, [category, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: name === "IsActive" ? parseInt(value) : value,
      };

      // Tự động tạo slug từ CategoryName nếu là danh mục mới hoặc slug rỗng
      if (name === "CategoryName" && (!category || !prev.Slug)) {
        updated.Slug = value
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[đĐ]/g, "d")
          .replace(/([^0-9a-z-\s])/g, "")
          .replace(/(\s+)/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-+|-+$/g, "");
      }
      return updated;
    });
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
              <label>Tên danh mục</label>
              <input
                type="text"
                name="CategoryName"
                value={formData.CategoryName}
                onChange={handleChange}
                required
                placeholder="Nhập tên danh mục ví dụ: Tuyển sinh, Thể thao..."
              />
            </div>
            <div className="form-group">
              <label>Slug (Đường dẫn tĩnh)</label>
              <input
                type="text"
                name="Slug"
                value={formData.Slug}
                onChange={handleChange}
                required
                placeholder="tuyen-sinh-2024"
              />
            </div>
            <CustomSelect
              label="Trạng thái hiển thị"
              name="IsActive"
              value={formData.IsActive}
              onChange={handleChange}
              options={[
                { value: 1, label: "Công khai (Hiện)" },
                { value: 0, label: "Nháp (Ẩn)" },
              ]}
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className="btn-submit">
              Lưu danh mục
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const CategoryDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  categoryName,
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
              Bạn có chắc chắn muốn xóa danh mục <strong>{categoryName}</strong>{" "}
              không?
            </p>
            <p>
              Hành động này sẽ đánh dấu danh mục là đã xóa và không hiển thị
              trên trang công khai. Bạn có thể khôi phục sau này trong thùng
              rác.
            </p>
          </div>
        </div>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Hủy bỏ
          </button>
          <button className="btn-delete" onClick={onConfirm}>
            Đồng ý xóa
          </button>
        </div>
      </div>
    </div>
  );
};
