import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div
          className="row g-0"
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: `url('./assets/images/banner2.jpg') center/cover no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div
            className="col-md-4 form-container"
            style={{
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #ff4e50, #f9d423)",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(8px)", // Adds blur effect to background
              }}
            >
              <Form
                formTitle={"Register"}
                submitBtn={"Register"}
                formType={"register"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
