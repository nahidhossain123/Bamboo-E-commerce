import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import productimage from '../../media/singleproduct.png';
import Button from '../button/Button';
import cartimg from '../../media/shopping-cart.png'
import SocialIcon from '../socialicons/SocialIcon';
import './SingleProductStyle.css';

const SingleProduct = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true,
      };
  return (
    <div className='single-product-container my-container section-padding'>
        <Row className='gx-5 m-0'>
            <Col lg={6}>
                <Slider {...settings}>
                    <div className='carousel-image'>
                        <img src={productimage} alt="carousel" />
                    </div>
                    <div className='carousel-image'>
                        <img src={productimage} alt="carousel" />
                    </div>
                    <div className='carousel-image'>
                        <img src={productimage} alt="carousel" />
                    </div>
                    <div className='carousel-image'>
                        <img src={productimage} alt="carousel" />
                    </div>
                </Slider>
            </Col>
            <Col lg={6}>
                <div className='single-product-details' >
                    <span className='title'>Sona Armless Chair</span>
                    <span className='price'>$400.00</span>
                    <span className='stock'><span>Available</span> : <span>In Stock</span></span>
                    <p>Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Bamboo chairs combine premium quality materials with unique high-style design, with the advanced product engineering and packaging reinforcement, each product is designed, manufactured and packaged with shipping in mind.</p>
                    <div className='color-size'>
                        <Row>
                            <Col sx={5}>
                                <div className='color'>
                                    <div className='title'>COLOR</div>
                                    <div className='colors'>
                                        <span className='active'><span></span></span>
                                        <span><span></span></span>
                                        <span><span></span></span>
                                    </div>
                                </div>
                            </Col>
                            <Col sx={7}>
                                <div className='size'>
                                    <div className='title'>SIZE</div>
                                    <div className='sizes'>
                                        <span>XL</span>
                                        <span className='active'>S</span>
                                        <span>M</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='shopping'>
                        <div className='qty'>
                            <span>QTY</span>
                            <span>
                                <span className='increment'>-</span>
                                <span className='count'>01</span>
                                <span className='decrement'>+</span>
                            </span>
                        </div>
                        <div className='btn-con my-3 xs-w-100'>
                            <Button className="xs-w-100" image={cartimg} button_text={'Buy Now'} />
                        </div>
                    </div>
                    <SocialIcon text={'SHARE'}/>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default SingleProduct