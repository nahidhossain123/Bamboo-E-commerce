import React from 'react'
import './ImageGalleryStyle.css'
import Button from '../button/Button';
import Product from '../product/Product';

const ImageGallery = () => {
  return (
    <div className='gallery'>
        <span className='main-title section-padding'>Featured Product</span>
        <div className='gallery-container my-container'>
            <Product />
        </div>
        <Button button_text={"LOAD MORE"}/>
    </div>
  )
}

export default ImageGallery