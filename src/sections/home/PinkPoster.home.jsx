import React from "react";
import { Link } from "react-router-dom";
import deskP1 from "../../assets/desktopPoster1.png";
import phoneP1 from "../../assets/desktopPoster1.png";

const PinkPoster = () => {
  const screen = window.innerWidth;

  return (
    <div>
      <div className="posterSectionOne">
        <Link to="/shop">
          <img
            style={{
              display: "block",
              margin: "auto",
              maxWidth: "100%",
              minWidth: "100%",
              marginBottom: "1rem",
            }}
            src={screen > 768 ? deskP1 : phoneP1} // if screen is greater than 768px, use desktopPoster1.png, else use phonePoster1.png
            alt="shop poster"
          />
        </Link>
      </div>
    </div>
  );
};

export default PinkPoster;
