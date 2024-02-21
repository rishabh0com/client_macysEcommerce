import React, { useState, useContext } from "react";
import styles from "../styles/account.module.css";
import { UserContext } from "../contexts/detail.user.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { tokens } from "../controllers/login.user.js";
const api = import.meta.env.VITE_API_URL;

const AccountPage = () => {
  const { userDetail } = useContext(UserContext);
  const { firstName, lastName, email } = JSON.parse(
    localStorage.getItem("userInfo")
  );
  const navigate = useNavigate();

  const handleClick = async () => {
    const { accessToken, refreshToken } = tokens;
    try {
      localStorage.clear();
      const res = await axios.get(`${api}/users/logout`, {
        withCredentials: true,
        headers: { Authorization: `${accessToken},${refreshToken}` },
      });
      const resData = await res;
      resData && alert(resData.data.message);
      // window.location.href = "/login";
      navigate("/login");
    } catch (error) {
      console.log("logout error", error);
      navigate("/login");
    }
  };

  return (
    <>
      <div className={styles.accountPage}>
        <div className={styles.userInfo}>
          <h2 className={styles.name}>{`${firstName}  ${lastName}`}</h2>
          <p>Email: {email}</p>
          <button className={styles.logout} onClick={handleClick}>
            Logout
          </button>
        </div>
        {/* Add additional features, such as editing user info or settings */}
      </div>
    </>
  );
};

export default AccountPage;
