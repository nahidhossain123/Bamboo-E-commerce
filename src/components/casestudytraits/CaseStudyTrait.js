import React from 'react'
import CaseStudyTitle from '../case study title/CaseStudyTitle'
import logo from '../../media/caselogo1.png';
import './CaseStudyTraitStyle.css'
import { Col, Row } from 'react-bootstrap';
import image1 from '../../media/image1.png';
import image2 from '../../media/image2.png';
import image3 from '../../media/image3.png';
import image4 from '../../media/image4.png';
import image5 from '../../media/image5.png';

const CaseStudyTrait = () => {
  return (
    <div className='case-study-traits'>
      <div className='case-study-trait-container caseStudyContainer'>
        <Row className='m-0'>
          <Col className='p-0 col-12 col-sm-12 col-md-12 col-lg-5'>
            <CaseStudyTitle text='traits' color='#40514E' logo={logo}/>
            <div className='traits-text'>
                <span>MODERN/CLASSIC</span>
                <span>SIMPLE/GENIUNE</span>
                <span>EARTHLY</span>
            </div>
          </Col>
          <Col className='p-0 col-12 col-sm-12 col-md-12 col-lg-7'>
              <div className='trait-photo-container mx-auto'>
                <div className='trait-img'>
                  <img src={image1} alt='trait' />
                </div>
                <div className='trait-img'>
                  <img src={image2} alt='trait' />
                </div>
                <div className='trait-img'>
                  <img src={image3} alt='trait' />
                </div>
                <div className='trait-img'>
                  <img src={image4} alt='trait' />
                </div>
                <div className='trait-img'>
                  <img src={image5} alt='trait' />
                </div>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CaseStudyTrait