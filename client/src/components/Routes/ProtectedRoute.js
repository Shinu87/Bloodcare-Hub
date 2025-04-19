import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import API from "../../services/API";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To capture any errors

  // Get current user
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
      localStorage.clear();
      toast.error("Failed to load user. Please login again.");
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  useEffect(() => {
    getUser();
  }, [dispatch]); // Dependency array to ensure the function runs only once

  // If loading, show a loading spinner or message
  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner component
  }

  // If error, show the error message or redirect to login
  if (error) {
    return <Navigate to="/login" />;
  }

  // Check if token exists in localStorage before rendering the children
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
