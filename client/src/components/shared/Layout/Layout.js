import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe6e6, #ffcccc)", // light red background
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "linear-gradient(to right, #8e0e00, #1f1c18)", // deep red to black
          color: "#fff",
        }}
      >
        <Header />
      </div>

      {/* Horizontal Sidebar */}
      <div
        style={{ background: "linear-gradient(to right, #ff4d4d, #ff9999)" }}
      >
        <Sidebar />
      </div>

      {/* Page Content */}
      <div
        style={{
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
