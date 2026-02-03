import React from "react";
import "./DashBoardManagement.css";

// SVG Icons
const FileTextIcon = () => (
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
    className="text-primary"
    style={{ color: "#0f172a" }}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

const FolderIcon = () => (
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
    className="text-primary"
    style={{ color: "#0f172a" }}
  >
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  </svg>
);

const UsersIcon = () => (
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
    className="text-primary"
    style={{ color: "#0f172a" }}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const EyeIcon = () => (
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
    className="text-primary"
    style={{ color: "#0f172a" }}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const DashBoardManagement = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Page Header */}
        <div className="db-page-header">
          <h1 className="db-title">Dashboard</h1>
          <p className="db-subtitle">Welcome to FU News Management System</p>
        </div>

        {/* Statistics Grid */}
        <div className="db-stats-grid">
          <div className="db-card">
            <div className="db-card-header db-stat-header">
              <h3 className="db-card-title">Total News</h3>
              <FileTextIcon />
            </div>
            <div className="db-card-content" style={{ paddingTop: 0 }}>
              <div className="db-stat-value">124</div>
              <p className="db-stat-desc">Articles published</p>
            </div>
          </div>
          <div className="db-card">
            <div className="db-card-header db-stat-header">
              <h3 className="db-card-title">Categories</h3>
              <FolderIcon />
            </div>
            <div className="db-card-content" style={{ paddingTop: 0 }}>
              <div className="db-stat-value">8</div>
              <p className="db-stat-desc">Active categories</p>
            </div>
          </div>
          <div className="db-card">
            <div className="db-card-header db-stat-header">
              <h3 className="db-card-title">Total Users</h3>
              <UsersIcon />
            </div>
            <div className="db-card-content" style={{ paddingTop: 0 }}>
              <div className="db-stat-value">45</div>
              <p className="db-stat-desc">Admin & contributors</p>
            </div>
          </div>
          <div className="db-card">
            <div className="db-card-header db-stat-header">
              <h3 className="db-card-title">Total Views</h3>
              <EyeIcon />
            </div>
            <div className="db-card-content" style={{ paddingTop: 0 }}>
              <div className="db-stat-value">12.5K</div>
              <p className="db-stat-desc">This month</p>
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
                Recent News
              </h3>
              <p className="db-card-description">Latest articles published</p>
            </div>
            <div className="db-card-content">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="db-news-item">
                  <div className="db-news-thumb" />
                  <div className="db-news-content">
                    <h4 className="db-news-title">News Title {item}</h4>
                    <p className="db-news-desc">
                      This is a brief description of the news article that might
                      be a bit longer to test clamping.
                    </p>
                    <div className="db-news-meta">
                      <span>Category</span>
                      <span>2 days ago</span>
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
                Quick Actions
              </h3>
            </div>
            <div className="db-card-content">
              <div className="db-quick-actions">
                <button className="db-btn-action db-btn-primary">
                  + New Article
                </button>
                <button className="db-btn-action db-btn-secondary">
                  + New Category
                </button>
                <button className="db-btn-action db-btn-secondary">
                  + Add User
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
                  Statistics
                </p>
                <div className="db-stats-row">
                  <span style={{ color: "#64748b" }}>Published</span>
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>98</span>
                </div>
                <div className="db-stats-row">
                  <span style={{ color: "#64748b" }}>Draft</span>
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>26</span>
                </div>
                <div className="db-stats-row">
                  <span style={{ color: "#64748b" }}>Pending</span>
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
              Recent Activity
            </h3>
            <p className="db-card-description">
              Latest updates from the system
            </p>
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
                    User action {item}
                  </p>
                  <p
                    style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}
                  >
                    Description of what happened
                  </p>
                </div>
                <span className="db-activity-time">{item}h ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardManagement;
