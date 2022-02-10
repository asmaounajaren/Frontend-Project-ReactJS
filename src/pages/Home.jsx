import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <h1 style={{textAlign:"center"}}>Categories</h1>
      <Categories />
      <h1 style={{textAlign:"center"}}>Products</h1>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
