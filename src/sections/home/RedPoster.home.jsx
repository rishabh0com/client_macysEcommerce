import React from "react";
import { Link } from "react-router-dom";
import deskP2 from "../../assets/desktopPoster2.png";
import phoneP2 from "../../assets/phonePoster2.png";

const RedPoster = () => {
  const screen = window.innerWidth;

  return (
    <div>
      {/*  Poster Section 2 */}
      <div className="posterSection2">
        <Link to="/shop">
          <img
            style={{
              display: "block",
              margin: "auto",
              maxWidth: "100%",
              minWidth: "100%",
              marginBottom: "1rem",
            }}
            src={screen > 768 ? deskP2 : phoneP2}
            alt="shop poster"
          />
        </Link>
      </div>
    </div>
  );
};

export default RedPoster;
