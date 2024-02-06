import React from "react";
import PinkPoster from "./PinkPoster.home";
import RedPoster from "./RedPoster.home";
import ProductsLinks from "./ProductsLinks.home";
import InfoText from "./InfoText.home";
import InfoLinks from "./InfoLinks.home";

const MainHomeSection = () => {
  const screen = window.innerWidth;
  return (
    <div>
      {/*  Main Section */}
      <div style={{ margin: "0rem 1rem 0rem" }}>
      <PinkPoster/>
      <RedPoster/>
      <ProductsLinks/>
      <InfoText/>
      <InfoLinks/>
      </div>
    </div>
  );
};

export default MainHomeSection;
