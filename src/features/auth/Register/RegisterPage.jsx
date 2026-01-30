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
        <div className="login-link">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
