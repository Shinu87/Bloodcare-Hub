import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const navContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "10px 0",
    gap: "20px",
    borderBottom: "2px solid #ddd",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
  };

  const navItemStyle = (isActive) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "8px",
    textDecoration: "none",
    color: isActive ? "white" : "#333",
    backgroundColor: isActive ? "#007bff" : "transparent",
    transition: "background 0.3s ease",
  });

  const iconStyle = (isActive) => ({
    color: isActive ? "white" : "#007bff",
  });

  const renderNavItem = (to, label, icon) => {
    const isActive = location.pathname === to;
    return (
      <Link to={to} style={navItemStyle(isActive)} key={to}>
        <i className={`fa-solid ${icon}`} style={iconStyle(isActive)}></i>
        {label}
      </Link>
    );
  };

  return (
    <div style={navContainerStyle}>
      {user?.role === "organisation" && (
        <>
          {renderNavItem("/", "Inventory", "fa-warehouse")}
          {renderNavItem("/donar", "Donar", "fa-hand-holding-medical")}
          {renderNavItem("/hospital", "Hospital", "fa-hospital")}
        </>
      )}
      {user?.role === "admin" && (
        <>
          {renderNavItem("/donar-list", "Donar List", "fa-warehouse")}
          {renderNavItem(
            "/hospital-list",
            "Hospital List",
            "fa-hand-holding-medical"
          )}
          {renderNavItem("/org-list", "Organisation List", "fa-hospital")}
        </>
      )}
      {(user?.role === "donar" || user?.role === "hospital") &&
        renderNavItem("/orgnaisation", "Organisation", "fa-building-ngo")}
      {user?.role === "hospital" &&
        renderNavItem("/consumer", "Consumer", "fa-building-ngo")}
      {user?.role === "donar" &&
        renderNavItem("/donation", "Donation", "fa-building-ngo")}
    </div>
  );
};

export default Sidebar;
