import React from "react";
import SearchBar from "./subComponents/SearchBar";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div style={{ margin: "0",padding:"0 1rem" }}>
      <SearchBar />
      <Navigation />
    </div>
  );
};

export default Navbar;
