import React, { useEffect, useState } from "react";
import styles from "../styles/product.module.css";
import { findProductById } from "../controllers/products.controller";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductPage = () => {
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
  const num = parseInt(Math.random() * 100);
  const dis = parseInt((product.price * num) / 100);
  const fakeP = product.price + dis;
  const p = parseInt(product.price).toLocaleString();
  // console.log(product.price, fakeP);

  console.log("setproduct", product);
  // console.log(product.images);
  return (
    <>
      <Navbar />
      <div className={styles.proRoute}> <span>{product.category}</span> / <span>{product.subCategory}</span> </div>

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
        />
        </div>
      </div>
      <Footer/>
    </>
  );
};

const ProductImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Product" className={styles.productImage} />;
};

const SizeBox = ({ size }) => {
  return <div className={styles.sizeBox}>{size}</div>;
}

const ProductDetails = ({ title, price, color, fakeP,sizes }) => {
  console.log("sizes",sizes )
  return (
    <>
      <div >
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.slogun}>LIMITED-TIME SPECIAL</p>
        <p className={styles.productPrice}>
          INR {`${price}.${price % 2 ? "50" : "00"} `}
          <strike className={styles.productStrike}>
            INR { `${fakeP.toLocaleString()}.${price % 2 ? "50" : "00"}`}
          </strike>
        </p>
        <div className={styles.productColor}>
          <p className={styles.colorLabel}>COLOR : {color ? color : "NO COLOR"}</p>
        </div>
        <div className={styles.productSize}>
          <span className={styles.colorLabel}>SIZE :</span> Please select 
          <div className={styles.sizeContainer}>
            {sizes? sizes.map((ele)=>(<SizeBox size={ele} key={ele} />)) : "NO SIZE"}
          </div>
        </div>
        <button className={styles.productButton}>Add to Cart</button>
      </div>
     
    </>
  );
};

export default ProductPage;
