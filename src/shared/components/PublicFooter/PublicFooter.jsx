import React from "react";
import "./PublicFooter.css";

const PublicFooter = () => {
  return (
    <footer className="footer-container responsive-wrapper">
      <div className="footer-top">
        <div className="footer-column">
          <h3 className="footer-title">FU NEWS</h3>
          <p className="footer-description">
            Mang đến cho bạn những cập nhật mới nhất, các bài viết sâu sắc và
            những câu chuyện thịnh hành về giáo dục và công nghệ.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Danh mục</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Công nghệ</a>
            </li>
            <li>
              <a href="#">Giáo dục</a>
            </li>
            <li>
              <a href="#">Thể thao</a>
            </li>
            <li>
              <a href="#">Giải trí</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Công ty</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
            <li>
              <a href="#">Tuyển dụng</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Đăng ký</h4>
          <p className="footer-text">
            Nhận tin tức mới nhất trực tiếp vào hộp thư đến của bạn.
          </p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Địa chỉ email của bạn" />
            <button>Đăng ký</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FU NEWS. Đã đăng ký bản quyền.</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook" className="social-icon facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="social-icon instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" aria-label="Youtube" className="social-icon youtube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon
                points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                fill="white"
              ></polygon>
            </svg>
          </a>
          <a href="#" aria-label="Tiktok" className="social-icon tiktok">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 0h1.98c.144.715.54 4.746 4.02 5c0 0 0-5 0-5 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 6 0 0 0 0 0 0 0 0-6 0 0 0 0 0 0 0 0 0 0 0-6 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-9zm-5 5v14c0 2.761 2.239 5 5 5s5-2.239 5-5c0 0 0-5 0-5s-1.07-4-5-4c0 0 0 0 0 0s-2.95 0-2.95 0L5 5z"></path>
              <path
                d="M12.5 10.5c-1.3 0-2.5 1.1-2.5 2.5s1.2 2.5 2.5 2.5c1.4 0 2.5-1.1 2.5-2.5V5.5c-1-1.1-2.4-1.7-4-1.5V10.5z"
                opacity="0"
              ></path>
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-5.45 10.27A6.83 6.83 0 0 0 16 12.87V6a7.33 7.33 0 0 0 3.79 1.11v-3.4h-.2z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
