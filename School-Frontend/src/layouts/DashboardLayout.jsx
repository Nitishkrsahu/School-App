import React from "react";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="d-flex">

        <Sidebar />

        <div
          className="flex-grow-1 p-4 bg-light"
          style={{ minHeight: "100vh", minWidth: "250px" }}
        >
          {children}
        </div>

      </div>
    </>
  );
};

export default DashboardLayout;