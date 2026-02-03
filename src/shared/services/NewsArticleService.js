import axiosClient from "./axiosClient";

/**
 * NewsArticleService
 * Dùng cho:
 * - HomePageContent
 * - ArticleDetails
 * - Category Page
 * - Admin CRUD
 */
const NewsArticleService = {
  // Lấy tất cả bài viết public
  getAll: () => {
    return axiosClient.get("/newsArticles", {
      params: {
        Status: 1,
        _sort: "CreatedDate",
        _order: "desc",
      },
    });
  },

  // Lấy bài theo loại (ARTICLE / PODCAST)
  getByType: (type) => {
    return axiosClient.get("/newsArticles", {
      params: {
        Type: type,
        Status: 1,
      },
    });
  },

  // Lấy bài theo category
  getByCategory: (categoryId) => {
    return axiosClient.get("/newsArticles", {
      params: {
        CategoryID: categoryId,
        Status: 1,
      },
    });
  },

  // =========================
  // 📄 ARTICLE DETAILS
  // =========================

  // Lấy bài theo slug
  getBySlug: async (slug) => {
    const res = await axiosClient.get("/newsArticles", {
      params: { Slug: slug },
    });
    return res.data?.[0];
  },

  // Lấy nội dung chi tiết (paragraph, quote, image…)
  getContents: (articleId) => {
    return axiosClient.get("/articleContents", {
      params: {
        NewsArticleID: articleId,
        _sort: "Order",
        _order: "asc",
      },
    });
  },

  // Lấy media của bài (IMAGE / AUDIO / VIDEO)
  getMedia: (articleId) => {
    return axiosClient.get("/media", {
      params: {
        NewsArticleID: articleId,
      },
    });
  },

  // =========================
  // 🔔 SIDEBAR / POPULAR
  // =========================

  // Bài xem nhiều
  getMostViewed: (limit = 5) => {
    return axiosClient.get("/newsArticles", {
      params: {
        Status: 1,
        _sort: "ViewCount",
        _order: "desc",
        _limit: limit,
      },
    });
  },

  // =========================
  // 💬 COMMENTS
  // =========================

  getComments: (articleId) => {
    return axiosClient.get("/comments", {
      params: {
        NewsArticleID: articleId,
        _sort: "CreatedDate",
        _order: "desc",
      },
    });
  },

  addComment: (payload) => {
    /*
      payload:
      {
        NewsArticleID,
        UserName,
        Content,
        CreatedDate,
        Status: "PENDING"
      }
    */
    return axiosClient.post("/comments", payload);
  },

  // =========================
  // 🛠 ADMIN CRUD
  // =========================

  create: (payload) => {
    return axiosClient.post("/newsArticles", payload);
  },

  update: (id, payload) => {
    return axiosClient.put(`/newsArticles/${id}`, payload);
  },

  delete: (id) => {
    return axiosClient.delete(`/newsArticles/${id}`);
  },
};

export default NewsArticleService;
