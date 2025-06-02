import React, {useEffect, useRef, useState } from 'react'
import {Gl_data} from '../../Data/GalleryData/GalleryData';
import './ProductFilterStyle.css';


const ProductFilter = () => {
  const [data, SetData] = useState([]);
  const [collection, SetCollection] = useState([]);
  const [active, SetActive] = useState("");
  const slider = useRef();


  useEffect(()=>{
    SetData(Gl_data.filter((item)=>item.title === Gl_data[0].title));
    SetCollection([...new Set(Gl_data.map(item=>item.title))])
    SetActive(Gl_data[0].title);
  },[])

  const filterData = (filterItem)=>{
    const filteredData = Gl_data.filter((item)=>item.title === filterItem);
    SetData(filteredData);
    SetActive(filterItem);
  }

  let startX;
  let scrollLeft_;
  let isDown;
  let moveOffset;

  const mouseDown = (e)=>{
    isDown = true;
    console.log(slider.current.offsetLeft);
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
    <div className='product-filter'>
        <div className='my-container'>
          <span className='main-title'>Bamboo Products</span>
          <div className='filter-container'>
            
              <div className='filter-nav'>
                  <ul>
                      {
                          collection&& collection.map((item,index)=> <li className={active===item ? "active" : " " } key={index}><button onClick={()=>filterData(item)}>{item}</button></li>)
                      }
                  </ul>
              </div>
            <div className='filter-image-container'>
                <div 
                  className='filter-images' 
                  onMouseDown = {(e)=>mouseDown(e)}
                  onMouseLeave= {(e)=>mouseLeave(e)}
                  onMouseUp = {(e)=>mouseUp(e)}
                  onMouseMove = {(e)=>mouseMove(e)}
                  ref = {slider}
                >
                  {
                    data&& data.map((data,index)=><img key={index} src={data.img} alt="filterimages" />)
                  }
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductFilter