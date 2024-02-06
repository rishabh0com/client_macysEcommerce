import React from "react";
import Navbar from "../components/Navbar";
import MainHomeSection from "../sections/home/Main.home";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <MainHomeSection />
      <Footer/>
    </div>
  );
};

export default Home;
