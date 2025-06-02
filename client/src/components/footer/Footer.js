import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './FooterStyle.css';
import logo from '../../media/LogoBottom.png';
import SocialIcon from '../socialicons/SocialIcon';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='container'>
            <div className='subscribe-social-container'>
                <div className='news-latter'>
                    <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                    <span>
                        <input type='text' placeholder="Enter Your E-mail Address Here" />
                        <i className="fa-sharp fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                <div className='var-line d-none d-sm-none d-md-block'>

                </div>
                <SocialIcon text={'JOIN US ON'}/>
            </div>
        </div>
        <hr className='white-line' />
        <div className='footer-bottom my-container'>
                <Row className='text-center m-0'>
                    <Col sm={12} md={4} className="d-flex align-items-center justify-content-center">
                        <span className='term-condition'>TERMS & CODITION POLICY</span>
                    </Col>
                    <Col sm={12} md={4} className="my-5 my-sm-5 my-md-0">
                        <span className='logo'><img src={logo} alt="logo" /></span>
                    </Col>
                    <Col sm={12} md={4} className="d-flex align-items-center justify-content-center">
                        <span className='copyright'>© 2019 Bamboo All Rights Reserved</span>
                    </Col>
                </Row>
            </div>
    </div>
  )
}

export default Footer