import React, { useState, useEffect } from "react";
import "./Modals.css";

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
            <label>Tên danh mục</label>
            <input
              type="text"
              name="CategoryName"
              value={formData.CategoryName}
              onChange={handleChange}
              required
              placeholder="Nhập tên danh mục..."
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
              placeholder="tuyen-sinh"
            />
          </div>
          <div className="form-group">
            <label>Trạng thái</label>
            <select
              name="IsActive"
              value={formData.IsActive}
              onChange={handleChange}
            >
              <option value={1}>Công khai</option>
              <option value={0}>Ẩn</option>
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

export const CategoryDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  categoryName,
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
            Bạn có chắc chắn muốn xóa danh mục <strong>{categoryName}</strong>{" "}
            không?
          </p>
          <p>
            Hành động này sẽ đánh dấu danh mục là đã xóa và không hiển thị trên
            trang công khai.
          </p>
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
