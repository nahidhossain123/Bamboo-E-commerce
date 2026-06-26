import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudyPage from "../pages/CaseStudyPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SingelProductPage from "../pages/SingelProductPage";
import Cart from "../components/cart/Cart";
import Checkout from "../components/checkout/Checkout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<SingelProductPage />} />
        <Route path="/case" element={<CaseStudyPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
