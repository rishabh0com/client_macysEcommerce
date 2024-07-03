import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/detail.user.jsx";
import { findProductById } from "../../controllers/products.controller.js";
const api = import.meta.env.VITE_API_URL;

const CartBtn = ({ id, qyt }) => {
  const { loading, setLoading } = useContext(UserContext);
  const productId = id;
  const quantity = qyt;
  const handleClick = async () => {
    // console.log(id, qyt, size, userId)
    if (localStorage.getItem("access")) {
      const { accessToken, refreshToken } = JSON.parse(
        localStorage.getItem("tokens")
      );

      const userId = JSON.parse(localStorage?.getItem("userInfo"))?.userId;
      const access = localStorage.getItem("access");
      try {
        if (access) {
          const cartProduct = await findProductById(productId);
          console.log("cart", cartProduct.data);
          const product = cartProduct.data;
          const res = await axios.post(
            `${api}/cart/add?userId=${userId}`,
            { product },
            {
              withCredentials: true,
              headers: { Authorization: `${accessToken},${refreshToken}` },
            }
          );
          const resData = await res;
          console.log(resData.data);
          res.data
            ? alert(resData.data.message)
            : alert("Item not added , something went wrong");
        } else {
          alert("Please login to add to cart");
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Please login to add product in cart");
        }
      }
    } else {
      alert("Please login to add product in cart");
      setLoading(false);
    }
  };
  return (
    <div>
      <div>
        <button
          style={{
            width: "100%",
            padding: "1rem",
            cursor: "pointer",
            marginTop: "3rem",
            backgroundColor: "red",
            border: "none",
            fontSize: "1.2rem",
            color: "white",
          }}
          onClick={handleClick}>
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default CartBtn;
