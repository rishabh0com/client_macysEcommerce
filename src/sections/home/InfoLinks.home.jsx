import React from "react";
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
      </div>
    </div>
  );
};

export default InfoLinks;
