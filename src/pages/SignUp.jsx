// src/components/SignupForm.js
import React, { useContext, useState } from "react";
import styles from "../styles/signUp.module.css";
import { Link , useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import { register } from "../controllers/signup.user";

const SignupForm = () => {
  const [ userDetail, setUserDetail ] = useState({})
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(userDetail);
    res && alert(res.message)
    res.success && navigate("/login")
    console.log("details",userDetail)
  };

  return (
    <>
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
                placeholder="Enter First Name"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputgroup}>
              <label>Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputgroup}>
              <label>Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputgroup}>
              <label>Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </div>
            <button className={styles.bt} type="submit">Sign up</button>
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




