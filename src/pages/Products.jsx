import React,{useState} from "react";
import { findAllProducts } from "../controllers/products.controller";

const Products = () => {
    const [products, setProducts] = useState([]);

    const handleClick = async () => {
        const productsData = await findAllProducts();
        console.log(productsData);
        // productsData && setProducts(productsData);
    };

  return (
    <div style={{display:"flex"}}>
      <button onClick={handleClick}>Get Products</button>
      <ul className="products"></ul>
    </div>
  );
};
export default Products;
