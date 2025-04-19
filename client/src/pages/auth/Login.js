import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            backgroundImage: `url("/assets/images/banner1.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column", // Add this to align the title and form vertically
            textAlign: "center",
            color: "#fff", // Ensure the text is white to be readable on the background
          }}
        >
          <h1
            style={{
              fontSize: "55px",
              fontWeight: "600",
              marginBottom: "20px",
              textShadow: "2px 2px 4px white",
              color: "red",
              textTransform: "uppercase",
            }}
          >
            Welcome to the Bloodhub
          </h1>
          <div
            style={{
              maxWidth: "500px",
              width: "90%",
              padding: "40px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #ff6b6b, #ff8e53, #ffe66d)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              fontWeight: "500",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
