import React, { useEffect } from "react";
import "./ImageGalleryStyle.css";
import Button from "../button/Button";
import Product from "../product/Product";
import { useDispatch } from "react-redux";
import { getProduct } from "../../productSlice";
import axios, { isCancel, AxiosError } from "axios";

const ImageGallery = () => {
  return (
    <div className="gallery">
      <span className="main-title section-padding">Featured Product</span>
      <div className="gallery-container my-container">
        <Product />
      </div>
      <Button button_text={"LOAD MORE"} />
    </div>
  );
};

export default ImageGallery;
