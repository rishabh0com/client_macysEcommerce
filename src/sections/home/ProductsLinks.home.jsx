import React from "react";
import { Link } from "react-router-dom";
import deskPro from "../../assets/desktopProducts.png";
import phonePro from "../../assets/phoneProducts.png";

const ProductsLinks = () => {
  const screen = window.innerWidth;

  return (
    <div>
      <div className="productsSection">
        <img
          style={{
            display: "block",
            maxWidth: "100%",
            minWidth: "100%",
            marginBottom: "1rem",
            margin: "4rem 0rem 4rem",
          }}
          useMap={screen > 768 ? "#image-map-desk" : "#image-map-phone"}
          src={screen > 768 ? deskPro : phonePro}
          alt="shop poster"
        />

        {/* map image for desktop */}

        {/* map image for phone */}
      </div>
    </div>
  );
};

export default ProductsLinks;
