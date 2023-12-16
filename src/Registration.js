import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Email validation
    if (!formData.email || !formData.email.includes("@")) {
      newErrors.email = "Invalid email formate";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    } else {
      newErrors.password = "";
    }

    // Confirm Password validation
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label style={{ textAlign: "left", fontWeight: 600 }}>Email:</label>
          <input
            style={{
              width: "20rem",
              height: "2rem",
              borderRadius: "10px",
              fontSize: "1rem",
              border: `${errors.email ? "2px solid red" : "2px solid green"}`,
            }}
            // type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error" style={{ color: "red" }}>
            {errors.email}
          </div>
        </div>
        <div
          style={{
            marginBottom: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label style={{ textAlign: "left", fontWeight: 600 }}>
            Password:
          </label>
          <input
            style={{
              width: "20rem",
              height: "2rem",
              borderRadius: "10px",
              fontSize: "1rem",
              border: `${
                errors.password ? "2px solid red" : "2px solid green"
              }`,
            }}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error" style={{ color: "red" }}>
            {errors.password}
          </div>
        </div>
        <div
          style={{
            marginBottom: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label style={{ textAlign: "left", fontWeight: 600 }}>
            Confirm Password:
          </label>
          <input
            style={{
              width: "20rem",
              height: "2rem",
              borderRadius: "10px",
              fontSize: "1rem",
              border: `${
                errors.confirmPassword ? "2px solid red" : "2px solid green"
              }`,
            }}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="error" style={{ color: "red" }}>
            {errors.confirmPassword}
          </div>
        </div>
        <button
          type="submit"
          style={{
            padding: "0.8rem",
            width: "5.5rem",
            marginTop: "1rem",
            backgroundColor: "blue",
            border: "none",
            color: "white",
            borderRadius: "8px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Registration;
