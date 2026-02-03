import axiosClient from "./axiosClient.js";

// Lấy danh mục đang hoạt động
const categoryService = {
  getActiveCategories() {
    return axiosClient.get("/categories", {
      params: { IsActive: 1 },
    });
  },
};

export default categoryService;
