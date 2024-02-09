import React, { useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { userLogin } from "../controllers/login.user";
import { Alert, AlertIcon } from "@chakra-ui/react";

const Login = () => {
  const [loginDetail, setLoginDetail] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetail({ ...loginDetail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await userLogin(loginDetail);
    console.log(loginDetail)
    res && alert(res.message)

  }


  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button className={styles.bt} type="submit">Log In</button>
        </form>
        <div className={styles.footer}>
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              <div className="link">Sign up</div>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
