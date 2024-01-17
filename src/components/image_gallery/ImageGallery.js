import React, { useEffect } from "react";
import "./ImageGalleryStyle.css";
import Button from "../button/Button";
import Product from "../product/Product";
import { useDispatch } from "react-redux";
import { getProduct } from "../../productSlice";
import axios, { isCancel, AxiosError } from "axios";

const ImageGallery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProdutApi = async () => {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: "mor_2314",
        password: "83r5^_",
      });
      console.log("LoginResult", response);
    };
    getProdutApi();
  }, []);
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
