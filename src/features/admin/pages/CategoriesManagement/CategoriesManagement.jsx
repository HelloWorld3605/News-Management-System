import React, { useState, useEffect } from "react";
import categoryService from "../../../../shared/services/categoryService";
import { PlusIcon, EditIcon, TrashIcon } from "../../../../assets/AdminIcons";
import {
  CategoryModal,
  CategoryDeleteModal,
} from "../../components/CategoryModals";
import Pagination from "../../../../shared/components/Pagination/Pagination";
import "./CategoriesManagement.css";

const StatusBadge = ({ isActive }) => {
  // Assuming IsActive is 1 for active and 0 for inactive
  const badgeClass =
    isActive === 1
      ? "cm-badge cm-status-active"
      : "cm-badge cm-status-inactive";
  return (
    <span className={badgeClass}>{isActive === 1 ? "Active" : "Hidden"}</span>
  );
};

const CategoriesManagement = () => {
  const [categories, setCategories] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchCategories = async () => {
    try {
      const response = await categoryService.getAll();
      setCategories(response.data.filter((cat) => cat.isDeleted !== true));
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreateCategory = async (formData) => {
    try {
      const newCategoryID =
        categories.length > 0
          ? Math.max(...categories.map((c) => c.CategoryID || 0)) + 1
          : 1;

      const payload = {
        ...formData,
        CategoryID: newCategoryID,
        isDeleted: false,
        id: newCategoryID.toString(),
      };

      await categoryService.create(payload);
      fetchCategories();
      setIsAddOpen(false);
    } catch (error) {
      console.error("Failed to create category", error);
    }
  };

  const handleUpdateCategory = async (formData) => {
    try {
      if (selectedCategory) {
        await categoryService.update(selectedCategory.id, {
          ...selectedCategory,
          ...formData,
        });
        fetchCategories();
        setIsEditOpen(false);
        setSelectedCategory(null);
      }
    } catch (error) {
      console.error("Failed to update category", error);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      if (selectedCategory) {
        // Soft delete
        await categoryService.update(selectedCategory.id, {
          ...selectedCategory,
          isDeleted: true,
        });
        fetchCategories();
        setIsDeleteOpen(false);
        setSelectedCategory(null);
      }
    } catch (error) {
      console.error("Failed to soft delete category", error);
    }
  };

  const openEditModal = (category) => {
    setSelectedCategory(category);
    setIsEditOpen(true);
  };

  const openDeleteModal = (category) => {
    setSelectedCategory(category);
    setIsDeleteOpen(true);
  };

  // Calculate pagination
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          <button className="cm-btn-add" onClick={() => setIsAddOpen(true)}>
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
                {categories.filter((c) => c.IsActive === 1).length}
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
                {categories.filter((c) => c.IsActive !== 1).length}
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
                  {currentCategories.map((category) => (
                    <tr key={category.id}>
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
                          <button
                            className="cm-action-btn edit"
                            onClick={() => openEditModal(category)}
                          >
                            <EditIcon />
                          </button>
                          <button
                            className="cm-action-btn delete"
                            onClick={() => openDeleteModal(category)}
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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <CategoryModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleCreateCategory}
        title="Thêm danh mục mới"
      />

      <CategoryModal
        isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedCategory(null);
        }}
        onSubmit={handleUpdateCategory}
        category={selectedCategory}
        title="Chỉnh sửa danh mục"
      />

      <CategoryDeleteModal
        isOpen={isDeleteOpen}
        onClose={() => {
          setIsDeleteOpen(false);
          setSelectedCategory(null);
        }}
        onConfirm={handleDeleteCategory}
        categoryName={selectedCategory?.CategoryName}
      />
    </div>
  );
};

export default CategoriesManagement;
