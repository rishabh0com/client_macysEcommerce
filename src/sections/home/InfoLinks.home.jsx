import React from "react";
import { Link } from "react-router-dom";
import deskL from "../../assets/desktopLinks.png";
import phoneL from "../../assets/phoneLinks.png";

const InfoLinks = () => {
  const screen = window.innerWidth;

  return (
    <div>
      <div className="linksSection">
        <img
          style={{
            display: "block",
            margin: "auto",
            maxWidth: "100%",
            marginBottom: "1rem",
          }}
          useMap={screen > 768 ? "#image-map-desk" : "#image-map-phone"}
          src={screen > 768 ? deskL : phoneL}
          alt="shop poster"
        />
        {/* map image for desktop */}
        <map name="image-map-desk">
          <Link to="/signup">
            <area
              target="_self"
              alt="sign up"
              title="sign up"
              coords="28,244,132,291"
              shape="rect"
            />
          </Link>
          <Link to="/locations">
            <area
              target="_self"
              alt="location"
              title="location"
              coords="428,254,614,294"
              shape="rect"
            />
          </Link>
          <Link to="/international-order">
            <area
              target="_self"
              alt="international"
              title="international"
              coords="783,252,924,295"
              shape="rect"
            />
          </Link>
          <Link to="/stores">
            <area
              target="_self"
              alt="visit"
              title="visit"
              coords="1116,238,1269,304"
              shape="rect"
            />
          </Link>
        </map>

        {/* map  image for mobile */}
        <map name="image-map-phone">
          <Link to="/signup">
            <area
              coords="9,408,474,509"
              target="_self"
              title="singup"
              shape="rect"
              />
          </Link>
          <Link to="/locations">
            <area coords="29,874,451,988"  title="locations" shape="rect" />
          </Link>
          <Link to="/international-order">
            <area
              coords="34,1351,399,1478"
              title="international-orders"
              shape="rect"
            />
          </Link>
          <Link to="/stroes">
            <area coords="19,1841,381,1949"  title="stores" shape="rect" />
          </Link>
        </map>
      </div>
    </div>
  );
};

export default InfoLinks;
