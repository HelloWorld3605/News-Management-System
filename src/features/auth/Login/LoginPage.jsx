import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

import { auth } from "../../../shared/services/authService";
import {
  useAuthAction,
  useAuthState,
} from "../../../app/provider/AuthProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthAction();
  const { isAuthenticated } = useAuthState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await auth.login({ email, password });

      // lưu vào context + localStorage
      login(res.user, res.accessToken);

      // điều hướng theo role
      if (res.user.AccountRole === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page responsive-wrapper">
      <div className="login-container">
        <div className="back-home-wrapper">
          <Link to="/" className="back-home-link">
            ← Về trang chủ
          </Link>
        </div>

        <h1 className="login-title">Đăng nhập</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Địa chỉ Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <div className="register-link">
          Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
