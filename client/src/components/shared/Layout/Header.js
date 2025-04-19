import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "linear-gradient(to right, #ff4e50, #f9d423)",
        padding: "12px 30px",
        color: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <BiDonateBlood size={30} color="white" />
        Blood Bank App
      </div>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: 0,
        }}
      >
        <li style={{ color: "#fff", fontWeight: "500" }}>
          <BiUserCircle size={22} /> Welcome{" "}
          {user?.name || user?.hospitalName || user?.organisationName}
          &nbsp;
          <span
            style={{
              background: "#6c757d",
              color: "#fff",
              padding: "4px 10px",
              borderRadius: "12px",
              fontSize: "0.75rem",
              marginLeft: "6px",
            }}
          >
            {user?.role}
          </span>
        </li>
        {["/", "/donar", "/hospital"].includes(location.pathname) ? (
          <li>
            <Link
              to="/analytics"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Analytics
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
          </li>
        )}
        <li>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#dc3545",
              border: "none",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
