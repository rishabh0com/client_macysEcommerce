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
        <map name="image-map-desk">
          <Link to="/women">
            <area
              alt="woman"
              title="woman"
              coords="4,11,217,226"
              shape="rect"
            />
          </Link>
          <Link to="/men">
            <area alt="men" title="men" coords="250,8,454,228" shape="rect" />
          </Link>
          <Link to="/kids">
            <area alt="kids" title="kids" coords="491,5,702,228" shape="rect" />
          </Link>
          <Link to="/shoes">
            <area
              alt="shoes"
              title="shoes"
              coords="737,8,944,227"
              shape="rect"
            />
          </Link>
          <Link to="/handbags">
            <area
              alt="handbags"
              title="handbags"
              coords="979,3,1193,231"
              shape="rect"
            />
          </Link>
          <Link to="/watches">
            <area
              alt="watches"
              title="watches"
              coords="1224,5,1429,229"
              shape="rect"
            />
          </Link>
          <Link to="/women">
            <area
              alt="women"
              title="women"
              coords="4,258,219,492"
              shape="rect"
            />
          </Link>
          <Link to="/women">
            <area
              alt="women"
              title="women"
              coords="244,260,456,492"
              shape="rect"
            />
          </Link>
          <Link to="/women">
            <area
              alt="women"
              title="women"
              coords="492,258,707,492"
              shape="rect"
            />
          </Link>
          <Link to="/jewelry">
            <area
              alt="jewelry"
              title="jewelry"
              coords="737,261,947,494"
              shape="rect"
            />
          </Link>
          <Link to="/home">
            <area
              alt="home"
              title="home"
              coords="974,258,1193,492"
              shape="rect"
            />
          </Link>
          <Link to="/bath">
            <area
              alt="bath"
              title="bath"
              coords="1225,261,1432,491"
              shape="rect"
            />
          </Link>
        </map>

        {/* map image for phone */}
      </div>
    </div>
  );
};

export default ProductsLinks;
