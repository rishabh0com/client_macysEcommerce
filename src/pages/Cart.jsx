import React, { useEffect, useState } from "react";
import styles from "../styles/cart.module.css";
import axios from "axios";
import { findProductById } from "../controllers/products.controller.js";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartsPro, setCartsPro] = useState([]);

  const removeProduct = async (id) => {
    axios.delete(`http://localhost:8080/cart/delete/${id}`, {
      withCredentials: true,
    });
    // const resData = await res;
    console.log("clicked");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (localStorage.getItem("access")) {
        const { userId } = JSON.parse(localStorage.getItem("userInfo"));
        const res = axios.get(
          `http://localhost:8080/cart/find?userId=${userId}`,
          { withCredentials: true }
        );
        const resData = await res;
        setCartsPro(resData.data.data);
      } else {
      }
    };
    fetchProducts();
  }, []);

  const subTotal = cartsPro.reduce((sum, pro) => {
    return sum + pro.product.product.price;
  }, 0);
  console.log(subTotal);

  console.log("in cart", cartsPro);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.leftSection}>
        <h1>Your Bag</h1>
        <hr />
        <div className={styles.productContainer}>
          {/* map */}
          {cartsPro.map((item, index) => {
            const product = item.product.product;
            const dis = parseInt((product.price * 20) / 100);
            const fakeP = product.price + dis;
            const upperTitle = product.title.split(" ")[0];
            const lowerTitle = product.title.split(" ").slice(1).join(" ");

            return (
              <>
                <div key={index} className={styles.products}>
                  <div className={styles.imgSection}>
                    <img
                      src={product.images}
                      className={styles.proImage}
                      alt=""
                    />
                  </div>
                  <div className={styles.proDetail}>
                    <div className={styles.detail}>
                      <p>{upperTitle}</p>
                      <p>{lowerTitle}</p>
                      <p>Color : {product.color} </p>
                    </div>
                    <div className={styles.price}>
                      <strike>INR {fakeP.toLocaleString()}</strike>
                      <p>INR {`${product.price.toLocaleString()}.00`}</p>
                      <p className={styles.tot}>
                        Total INR {`${product.price.toLocaleString()}.00`}
                      </p>
                      <button
                        onClick={async () => {
                          const res = await axios.delete(
                            `http://localhost:8080/cart/delete/${item._id}`,
                            {
                              withCredentials: true,
                            }
                          );
                          const resData = await res;
                          console.log(resData);
                          navigate(location.pathname, { replace: true });
                        }}
                        className={styles.remove}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                {/* map end */}
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.promo}>
          <p>
            Enter Promo Code{" "}
            <span className={styles.promoTitle}>Limit 1 offer per order</span>
          </p>
          <div className={styles.promoInput}>
            <input type="text" placeholder="Enter Promo Code" />
            <div>Apply</div>
          </div>
          <div className={styles.infoShip}>
            <hr />
            <p>
              Shipping, duties and taxes will be calculated at checkout, where
              applicable.
            </p>
            <hr />
          </div>
          <div className={styles.subTotal}>
            <p>Subtotal :</p>
            <p>INR {subTotal.toLocaleString()}</p>
          </div>
          <button className={styles.pBtn}>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
