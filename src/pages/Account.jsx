import React, { useState,useContext } from 'react';
import styles from '../styles/account.module.css';
import {UserContext} from "../contexts/detail.user.jsx";
import Navbar from '../components/Navbar.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AccountPage = () => {
  const {userDetail} = useContext(UserContext);
  const {firstName,lastName,email} = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  
  const handleClick = async () => {
    try {
     localStorage.removeItem("userInfo");
    localStorage.removeItem("access");
    const res = await axios.get("http://localhost:8080/users/logout",{withCredentials:true});
    const resData = await res;
    resData && alert(resData.data.message);
    // window.location.href = "/login";
    navigate("/login");

    } catch (error) {
      console.log("logout error",error)
      
    }
  };

  return (
    <>
    <div className={styles.accountPage}>
      <div className={styles.userInfo}>
        <h2 className={styles.name}>{`${firstName}  ${lastName}`}</h2>
        <p>Email: {email}</p>
        <button onClick={handleClick}>Logout</button>
      </div>
      {/* Add additional features, such as editing user info or settings */}
    </div>
    </>
  );
};

export default AccountPage;