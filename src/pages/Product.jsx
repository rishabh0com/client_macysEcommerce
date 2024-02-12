import React, { useEffect, useState, useContext, useRef } from "react";
import styles from "../styles/product.module.css";
import { findProductById } from "../controllers/products.controller";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartBtn from "../components/subComponents/CartBtn";
import { UserContext } from "../contexts/detail.user";

const ProductPage = () => {
  const { setLoading } = useContext(UserContext);
  const location = useLocation();
  const { id } = useParams();
  // console.log(id);
  // State to store the product information
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await findProductById(id);
      // console.log(response);
      setProduct(response.data);
    }
    fetchData();
  }, [location]);
  const dis = parseInt((product.price * 20) / 100);
  const fakeP = product.price + dis;
  const p = parseInt(product.price).toLocaleString();
  // console.log(product.price, fakeP);

  console.log("setproduct", product);
  // console.log(product.images);
  return (
    <>
      <div className={styles.proRoute}>
        {" "}
        <span>{product.category}</span> / <span>{product.subCategory}</span>{" "}
      </div>

      <div className={styles.productPage}>
        <div className={styles.imageContainer}>
          <ProductImage imageUrl={product.images} />
        </div>
        <div className={styles.productDetails}>
          <ProductDetails
            title={product.title}
            color={product.color}
            fakeP={fakeP}
            price={p}
            sizes={product.sizes}
            id={product._id}
          />
        </div>
      </div>
    </>
  );
};

const ProductImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Product" className={styles.productImage} />;
};

const SizeBox = ({ size }) => {
  return <div className={styles.sizeBox}>{size}</div>;
};

const ProductDetails = ({ title, price, color, fakeP, sizes, id }) => {
  const [qyt, setQyt] = useState(1);

  return (
    <>
      <div>
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.slogun}>LIMITED-TIME SPECIAL</p>
        <p className={styles.productPrice}>
          INR {`${price}.${price % 2 ? "50" : "00"} `}
          <strike className={styles.productStrike}>
            INR {`${fakeP.toLocaleString()}.${price % 2 ? "50" : "00"}`}
          </strike>
        </p>
        <div className={styles.productColor}>
          <p className={styles.colorLabel}>
            COLOR : {color ? color : "NO COLOR"}
          </p>
        </div>
        <p>Qty : </p>
        <div className={styles.quantityBtn}>
          <button
            className={styles.quantityBtnL}
            onClick={() => setQyt(qyt - 1)}
            disabled={qyt === 1}>
            -
          </button>
          <span>{qyt}</span>
          <button
            className={styles.quantityBtnR}
            onClick={() => setQyt(qyt + 1)}
            disabled={qyt == 10}>
            +
          </button>
        </div>
        <div className={styles.productSize}>
          <span className={styles.colorLabel}>SIZE :</span> Please select
          <div className={styles.sizeContainer} >
            {sizes
              ? sizes.map((ele) => (
                  <SizeBox size={ele} key={ele} />
                ))
              : "NO SIZE"}
          </div>
        </div>
        <CartBtn id={id} qyt={qyt} />
      </div>
    </>
  );
};

export default ProductPage;
