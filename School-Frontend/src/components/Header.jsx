import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">
          🏫 School Management System
        </span>

        <div className="d-flex align-items-center gap-3">
          <div className="text-white">
            Welcome, <strong>{user?.name || "User"}</strong>
          </div>
          <button
            className="btn btn-outline-light btn-sm"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;