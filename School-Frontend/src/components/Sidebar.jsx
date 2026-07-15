import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ minWidth: "250px", minHeight: "100vh" }}
    >

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/dashboard">
            <span className="bi bi-house-fill" style={{
                color: '#2596be'
            }}></span> Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/students">
            <span className="bi bi-person-fill"style={{
                color: '#2596be'
            }}></span> Students
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="#">
            <span className="bi bi-person-add" style={{
                color: '#2596be'
            }}></span> Teachers
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="#">
            <span className="bi bi-house-add-fill" style={{
                color: '#2596be'
            }}></span> Classes
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="#">
            <span className="bi bi-book-fill" style={{
                color: '#2596be'
            }}></span> Subjects
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="#">
            <span className="bi bi-cash-coin" style={{
                color: '#2596be'
            }}></span> Fees
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-danger" to="#">
            <span className="bi bi-door-open text-danger"></span> Logout
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;