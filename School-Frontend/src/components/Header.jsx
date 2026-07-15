import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">
          School Management System
        </span>

        <div className="text-white">
          Welcome, <strong>Admin</strong>
        </div>
      </div>
    </nav>
  );
};

export default Header;