import React from "react";
import "./AuthorDetails.css";

const AuthorDetails = () => {
  return (
    <div className="author-details responsive-wrapper">
      <div className="author-container">
        <main className="author-main">
          <div className="author-details-header">
            <div className="author-details-header-img">
              <img
                src="https://res.cloudinary.com/dz9q8zkeh/image/upload/v1769940136/avatar_t%C3%A1c_gi%E1%BA%A3_ojd3kd.png"
                alt=""
              />
            </div>
            <div className="author-details-header-info">
              <h1 className="author-details-header-info-name">
                Phùng Tuấn Hải
              </h1>
              <p className="author-details-header-info-role">
                Chuyên viên công nghệ thông tin
              </p>
            </div>
            <div className="author-details-header-actions">
              <div className="author-details-header-info-count-art">
                <strong>15</strong> bài viết
              </div>
              <button
                type="button"
                className="author-details-header-info-follow"
              >
                + Theo Dõi
              </button>
            </div>
          </div>
        </main>

        <aside className="author-sidebar">
          <h3 className="sidebar-title">Tác giả được đọc nhiều</h3>
          <ul className="sidebar-list">
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2025/12/30/BiQucLimpng-1767067423.png?w=100&h=100&q=100&dpr=2&fit=crop&s=cnN-Rfl1MfdWjB5nxJCU5g"
                    alt="Bùi Quốc Liêm"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Bùi Quốc Liêm
                  </a>
                  <span className="sidebar-author-role">
                    Tiến sĩ, giảng viên ngành Truyền thông
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2025/12/03/HoangThanhTuyenGocnhinpng-1764765696.png?w=100&h=100&q=100&dpr=2&fit=crop&s=8tXewXbkzQnTb6JTrMBYuQ"
                    alt="Hoàng Thanh Tuyền"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Hoàng Thanh Tuyền
                  </a>
                  <span className="sidebar-author-role">
                    Chuyên viên công nghệ thông tin
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2026/01/08/Luuapng-1767853325.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Ao1gq324pQ3ZHTFndwNVcA"
                    alt="Nguyễn Thị Thanh Lưu"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Nguyễn Thị Thanh Lưu
                  </a>
                  <span className="sidebar-author-role">Tiến sĩ ngữ văn</span>
                </div>
              </div>
            </li>
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2025/06/30/Hienpng-1751301147.png?w=100&h=100&q=100&dpr=2&fit=crop&s=KQ_SqfCEVHgPM5bIkqgFWQ"
                    alt="Nguyễn Thị Thu Hiền"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Nguyễn Thị Thu Hiền
                  </a>
                  <span className="sidebar-author-role">
                    Chuyên gia cao cấp về Sinh Y
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2026/01/19/Tqucanv2png-1768789585.png?w=100&h=100&q=100&dpr=2&fit=crop&s=pDx-GE-X5OxqMA3AdTyEgw"
                    alt="Từ Quốc An"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Từ Quốc An
                  </a>
                  <span className="sidebar-author-role">Nhà nghiên cứu</span>
                </div>
              </div>
            </li>
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2025/09/04/Hoipng-1756999800.png?w=100&h=100&q=100&dpr=2&fit=crop&s=v9_UXQ1wZM6zoFVtoj6mMw"
                    alt="Nguyễn Bá Hội"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Nguyễn Bá Hội
                  </a>
                  <span className="sidebar-author-role">Kỹ sư môi trường</span>
                </div>
              </div>
            </li>
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2023/04/03/AnhTuanpng-1680514051.png?w=100&h=100&q=100&dpr=2&fit=crop&s=kaQN-cJg1qELd9PRfN90qA"
                    alt="Hồ Quốc Tuấn"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Hồ Quốc Tuấn
                  </a>
                  <span className="sidebar-author-role">
                    Giảng viên cao cấp, Giám đốc chương trình đào tạo Thạc sĩ
                    Tài chính & Kế toán, Đại học Bristol
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2017/11/17/jessepngpng-1510857625.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Idkqaz_9ddgZIHvmwYxIBQ"
                    alt="Jesse Peterson"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Jesse Peterson
                  </a>
                  <span className="sidebar-author-role">Tác giả sách</span>
                </div>
              </div>
            </li>
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2023/08/23/NguyenTanaipng-1692781066.png?w=100&h=100&q=100&dpr=2&fit=crop&s=IzrLvGwLNmf_jurXaaQXJQ"
                    alt="Nguyễn Tấn Đại"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Nguyễn Tấn Đại
                  </a>
                  <span className="sidebar-author-role">
                    Nhà nghiên cứu độc lập
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="sidebar-item">
                <a href="#" className="sidebar-item-image author-avatar">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2025/12/14/Binhapng-1765681332.png?w=100&h=100&q=100&dpr=2&fit=crop&s=KSwB6lfNJtohqpiTMtaBKQ"
                    alt="Nguyễn Thị Thanh Bình"
                  />
                </a>
                <div className="sidebar-item-title">
                  <a href="#" className="sidebar-author-name">
                    Nguyễn Thị Thanh Bình
                  </a>
                  <span className="sidebar-author-role">Giảng viên</span>
                </div>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default AuthorDetails;
