import React, { useEffect, useState, useContext } from "react";
import styles from "../styles/login.module.css";
import { Link ,useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import { userLogin } from "../controllers/login.user";
import { UserContext } from "../contexts/detail.user.jsx";

const Login = () => {
  const { userDetail, setUserDetail } = useContext(UserContext);
  const [loginDetail, setLoginDetail] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetail({ ...loginDetail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await userLogin(loginDetail);
    console.log("in login page",res)
    if(res.success){
      setUserDetail({...res.data,access:true})
    }else{
      setUserDetail({access:false})
    }
    res && alert(res.message)
    navigate("/")

  }


  return (
    <>
      <div className={styles.container}>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
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
