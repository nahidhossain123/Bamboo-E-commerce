import React from "react";
import Footer from "../components/footer/Footer";
import HeroCarousel from "../components/hero_carousel/HeroCarousel";
import ImageGallery from "../components/image_gallery/ImageGallery";
import Navbar from "../components/navbar/Navbar";
import ProductFilter from "../components/product_filter/ProductFilter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <ImageGallery />
      <ProductFilter />
      <Footer />
    </div>
  );
};

export default Home;
