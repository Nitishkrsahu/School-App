import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Home.css";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let result;

      if (isLogin) {
        result = await login(email, password);
      } else {
        result = await signup(email, password, name);
      }

      if (result.success) {
        if (isLogin) {
          navigate("/dashboard");
        } else {
          setIsLogin(true);
          setEmail("");
          setPassword("");
          setName("");
        }
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="auth-wrapper">
        <div className="auth-box">
          <div className="auth-header">
            <h1>🏫 School App</h1>
            <p>Student Management System</p>
          </div>

          <div className="auth-form-container">
            <div className="form-toggle">
              <button
                className={`toggle-btn ${isLogin ? "active" : ""}`}
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                }}
              >
                Login
              </button>
              <button
                className={`toggle-btn ${!isLogin ? "active" : ""}`}
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                }}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}

              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 mt-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    {isLogin ? "Logging in..." : "Signing up..."}
                  </>
                ) : isLogin ? (
                  "Login"
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>

          <div className="auth-footer">
            <p className="text-muted">
              {isLogin
                ? "Don't have an account? Switch to Sign Up"
                : "Already have an account? Switch to Login"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
