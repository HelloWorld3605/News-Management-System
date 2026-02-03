import React from "react";
import {
  FileTextIcon,
  FolderIcon,
  UsersIcon,
  EyeIcon,
} from "../../../../assets/AdminIcons";
import "./DashBoardManagement.css";

const DashBoardManagement = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Page Header */}
        <div className="db-page-header">
          <h1 className="db-title">Bảng điều khiển</h1>
          <p className="db-subtitle">
            Chào mừng đến với Hệ thống Quản lý Tin tức FU
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="db-stats-grid">
          <div className="db-card">
            <div className="db-card-header db-stat-header">
              <h3 className="db-card-title">Tổng số tin tức</h3>
              <FileTextIcon />
            </div>
            <div className="db-card-content" style={{ paddingTop: 0 }}>
              <div className="db-stat-value">124</div>
              <p className="db-stat-desc">Bài viết đã xuất bản</p>
            </div>
          </div>
          <div className="db-card">
            <div className="db-card-header db-stat-header">
              <h3 className="db-card-title">Danh mục</h3>
              <FolderIcon />
            </div>
            <div className="db-card-content" style={{ paddingTop: 0 }}>
              <div className="db-stat-value">8</div>
              <p className="db-stat-desc">Danh mục đang hoạt động</p>
            </div>
          </div>
          <div className="db-card">
            <div className="db-card-header db-stat-header">
              <h3 className="db-card-title">Tổng số người dùng</h3>
              <UsersIcon />
            </div>
            <div className="db-card-content" style={{ paddingTop: 0 }}>
              <div className="db-stat-value">45</div>
              <p className="db-stat-desc">Quản trị viên & cộng tác viên</p>
            </div>
          </div>
          <div className="db-card">
            <div className="db-card-header db-stat-header">
              <h3 className="db-card-title">Tổng lượt xem</h3>
              <EyeIcon />
            </div>
            <div className="db-card-content" style={{ paddingTop: 0 }}>
              <div className="db-stat-value">12.5K</div>
              <p className="db-stat-desc">Trong tháng này</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="db-main-grid">
          {/* Recent News */}
          <div className="db-card">
            <div className="db-card-header">
              <h3
                className="db-card-title"
                style={{ fontSize: "1.125rem", fontWeight: 600 }}
              >
                Tin tức gần đây
              </h3>
              <p className="db-card-description">Bài viết mới nhất</p>
            </div>
            <div className="db-card-content">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="db-news-item">
                  <div className="db-news-thumb" />
                  <div className="db-news-content">
                    <h4 className="db-news-title">Tiêu đề tin tức {item}</h4>
                    <p className="db-news-desc">
                      Đây là mô tả ngắn gọn về bài viết tin tức có thể dài hơn
                      một chút để thử nghiệm tính năng cắt bớt.
                    </p>
                    <div className="db-news-meta">
                      <span>Danh mục</span>
                      <span>2 ngày trước</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="db-card" style={{ height: "fit-content" }}>
            <div className="db-card-header">
              <h3
                className="db-card-title"
                style={{ fontSize: "1.125rem", fontWeight: 600 }}
              >
                Tác vụ nhanh
              </h3>
            </div>
            <div className="db-card-content">
              <div className="db-quick-actions">
                <button className="db-btn-action db-btn-primary">
                  + Bài viết mới
                </button>
                <button className="db-btn-action db-btn-secondary">
                  + Thêm người dùng
                </button>
                <button
                  className="db-btn-action db-btn-secondary"
                  style={{
                    backgroundColor: "rgb(232, 223, 213)",
                    color: "rgb(45, 37, 32)",
                  }}
                >
                  + Danh mục mới
                </button>
              </div>

              <div className="db-stats-compact">
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#0f172a",
                    marginBottom: "0.75rem",
                  }}
                >
                  Thống kê
                </p>
                <div className="db-stats-row">
                  <span style={{ color: "rgb(107, 93, 81)" }}>Đã xuất bản</span>
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>98</span>
                </div>
                <div className="db-stats-row">
                  <span style={{ color: "rgb(107, 93, 81)" }}>Bản nháp</span>
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>26</span>
                </div>
                <div className="db-stats-row">
                  <span style={{ color: "rgb(107, 93, 81)" }}>
                    Đang chờ duyệt
                  </span>
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="db-card">
          <div className="db-card-header">
            <h3
              className="db-card-title"
              style={{ fontSize: "1.125rem", fontWeight: 600 }}
            >
              Hoạt động gần đây
            </h3>
            <p className="db-card-description">Cập nhật mới nhất từ hệ thống</p>
          </div>
          <div className="db-card-content">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="db-activity-item">
                <div className="db-activity-avatar" />
                <div className="db-activity-content">
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    Hành động của người dùng {item}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "rgb(107, 93, 81)",
                      margin: 0,
                    }}
                  >
                    Mô tả về những gì đã xảy ra
                  </p>
                </div>
                <span className="db-activity-time">{item} giờ trước</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardManagement;
