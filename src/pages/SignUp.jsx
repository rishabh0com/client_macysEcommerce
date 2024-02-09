// src/components/SignupForm.js
import React, { useContext, useState } from "react";
import styles from "../styles/signUp.module.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserContext } from "../contexts/detail.user";

const SignupForm = () => {
  const { userDetail, setUserDetail } = useContext(UserContext);

  const validateForm = () => {
    // Add your validation logic here
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...useState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your form submission logic here
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputgroup}>
              <label>First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputgroup}>
              <label>Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputgroup}>
              <label>Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputgroup}>
              <label>Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign up</button>
          </form>
          <div className={styles.footer}>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <div className="link">Log in</div>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;




