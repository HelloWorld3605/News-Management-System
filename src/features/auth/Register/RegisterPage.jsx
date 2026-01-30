import React from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-page responsive-wrapper">
      <div className="register-container">
        <h1 className="register-title">Đăng ký</h1>
        <form>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Họ tên
            </label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              placeholder="Nhập họ tên của bạn"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Địa chỉ Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input"
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>
          <button type="submit" className="register-button">
            Đăng ký
          </button>
        </form>

        <div className="social-login">
          <div className="social-label">Hoặc đăng ký bằng</div>
          <div className="social-icons">
            <button
              type="button"
              className="social-icon-btn facebook"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </button>
            <button
              type="button"
              className="social-icon-btn google"
              aria-label="Google"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="login-link">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
