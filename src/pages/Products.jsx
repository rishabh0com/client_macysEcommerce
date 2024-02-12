import React, { useState, useEffect, useRef, useContext } from "react";
import { useLocation , useSearchParams} from "react-router-dom";
import styles from "../styles/products.module.css";
import Navbar from "../components/Navbar";
import SingleProduct from "../components/SingleProduct.jsx";
import { findAllProducts } from "../controllers/products.controller.js";
import { UserContext } from "../contexts/detail.user.jsx";

const Products = () => {
  const {setLoading} = useContext(UserContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = useRef();
  // console.log("useRef", search.current);
  const location = useLocation();
  // console.log("useLocation", location);
  let query = location.search.split("?")[1];
  search.current = query ? query : "";
  // console.log("searchQuery", search);
  const [proDataArray, setProData] = useState([]);

  const handleClick = (query) => () => {
    setSearchParams({subCategory:query})
  };

  useEffect(() => {
    async function fetchData() {
      const response = await findAllProducts(search.current);
      setProData(response.data);
      // console.log(response);
    }
    fetchData();
  }, [location,setLoading]);
  // console.log("data",proDataArray)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.category}>
            <h2>Men</h2>
            <p onClick={handleClick("shirts")}>Shirts</p>
            <p onClick={handleClick("blazers")}>Blazers</p>
            <p onClick={handleClick("shoes")}>shoes</p>
          </div>
          <hr />
          <div className={styles.category}>
            <h2>Women</h2>
            <p onClick={handleClick("tops")}>Tops</p>
            <p onClick={handleClick("dresses")}>Dresses</p>
            <p onClick={handleClick("jeans")}>Jeans</p>
            <p onClick={handleClick("coats")}>Coats</p>
            <p onClick={handleClick("jackets")}>Jackets</p>
            <p onClick={handleClick("jewelry")}>Jewelry</p>
            <p onClick={handleClick("handbags")}>Handbags</p>
          </div>
          <hr />
          <div className={styles.category}>
            <h2>Kids</h2>
            <p onClick={handleClick("cotton wear")}>Cotton wear</p>
            <p onClick={handleClick("toys")}>Toys</p>
          </div>
          <hr />
          <div className={styles.category}>
            <h2>Homeware</h2>
            <p onClick={handleClick("electronics")}>Electronics</p>
            <p onClick={handleClick("kitchen")}>Kitchen</p>
          </div>
          <hr />
          <div className={styles.category}>
            <h2>Accessories</h2>
            <p onClick={handleClick("")}>Mens's Accessories</p>
            <p onClick={handleClick("category=wemen&accessories")}>
              Women's Accessories
            </p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.productContainer}>
            {proDataArray.map((ele) => (
              <div key={ele._id}>
                <SingleProduct proDetail={ele} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
