import React from "react";
import SearchBar from "./subComponents/SearchBar";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div style={{ margin: "0" }}>
      <SearchBar />
      <Navigation />
    </div>
  );
};

export default Navbar;
