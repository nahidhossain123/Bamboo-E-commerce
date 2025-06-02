import React from 'react'
import Slider from "react-slick";
import './HeroCarouselStyle.css'
import hero_image from '../../media/hero image.png'
import Button from '../button/Button';

const HeroCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true,
      };
  return (
    <div className='slider-container'>
        <Slider {...settings}>
            <div className='carousel-image'>
                <img src={hero_image} alt="carousel" />
                <div className='info-container'>
                    <span className='title'>INDOORS</span>
                    <span className='title-bold text-center'>See Bamboo’s New Range Of Indoor Furniture</span>
                    <p>
                        <span>Classic meet modern living,</span>
                        <span>Bamboo has a fantastic range of indoor furniture,</span>
                        <span>perfect for any modern home.</span>
                    </p>
                    <Button button_text='SEE MORE' />
                </div>
            </div>
            <div className='carousel-image'>
                <img src={hero_image} alt="carousel" />
                <div className='info-container'>
                    <span className='title'>INDOORS</span>
                    <span className='title-bold text-center'>See Bamboo’s New Range Of Indoor Furniture</span>
                    <p>
                        <span>Classic meet modern living,</span>
                        <span>Bamboo has a fantastic range of indoor furniture,</span>
                        <span>perfect for any modern home.</span>
                    </p>
                    <Button button_text='SEE MORE' />
                </div>
            </div>
            <div className='carousel-image'>
                <img src={hero_image} alt="carousel" />
                <div className='info-container'>
                    <span className='title'>INDOORS</span>
                    <span className='title-bold text-center'>See Bamboo’s New Range Of Indoor Furniture</span>
                    <p>
                        <span>Classic meet modern living,</span>
                        <span>Bamboo has a fantastic range of indoor furniture,</span>
                        <span>perfect for any modern home.</span>
                    </p>
                    <Button button_text='SEE MORE' />
                </div>
            </div>
            <div className='carousel-image'>
                <img src={hero_image} alt="carousel" />
                <div className='info-container'>
                    <span className='title'>INDOORS</span>
                    <span className='title-bold text-center'>See Bamboo’s New Range Of Indoor Furniture</span>
                    <p>
                        <span>Classic meet modern living,</span>
                        <span>Bamboo has a fantastic range of indoor furniture,</span>
                        <span>perfect for any modern home.</span>
                    </p>
                    <Button button_text='SEE MORE' />
                </div>
            </div>
        </Slider>
    </div>

  )
}

export default HeroCarousel


