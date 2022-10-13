import React, { useRef } from 'react'
import Product from '../product/Product'
import './RelatedProductStyle.css'

const RelatedProduct = () => {

  const slider = useRef();
  
  let startX;
  let scrollLeft_;
  let isDown;
  let moveOffset;

  const mouseDown = (e)=>{
    isDown = true;
    startX = e.pageX - slider.current.offsetLeft;
    scrollLeft_ = slider.current.scrollLeft;
  }

  const mouseLeave = (e)=>{
    isDown = false;
  }
  const mouseUp = (e)=>{
    isDown = false;
  }

  const mouseMove = (e)=>{
    e.preventDefault();
    if(isDown){
      const x =  e.pageX - slider.current.offsetLeft;
      moveOffset = (x - startX) * 3;
      slider.current.scrollLeft = scrollLeft_ - moveOffset;
    }
  }

  return (
    <div className='related-product my-container'>
        <span className='main-title'>Related Product</span>
        <div 
          className='related-product-container'
          onMouseDown = {(e)=>mouseDown(e)}
          onMouseLeave= {(e)=>mouseLeave(e)}
          onMouseUp = {(e)=>mouseUp(e)}
          onMouseMove = {(e)=>mouseMove(e)}
          ref = {slider}
        >
            <Product />
        </div>
    </div>
  )
}

export default RelatedProduct