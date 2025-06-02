import React from 'react'
import './CaseStudyBriefStyle.css';
import logo from "../../media/logoCase.png";
import { Col, Row } from 'react-bootstrap';
import brief from '../../media/Brief.png';
import brief1 from '../../media/Brief1.png'
import { Link } from 'react-router-dom';

const CaseStudyBrief = () => {
  return (
    <div className='CaseBrief'>
        <div className='CaseBrief-Container caseStudyContainer'>
            <Link className='logo' to="/">
                <img src={logo} alt="logo" />
            </Link>
            <span>casestudy</span>
            <Row className='m-0'>
                <Col className='p-0 mt-5 col-12 col-sm-12 col-md-6 order-2 order-sm-2 order-md-1'>
                    <div className='casebrief '>
                        <div className='casebrief-text'>
                            <p> 
                                Bamboo is a furnitutre company that provide
                                quality product to meet your indoor or outdoor 
                                furniture needs.
                            </p>
                            <p>
                                Bamboo e-commerce site is a solution that offer
                                a simple system that organize different product
                                where peoples(families, businesses) can intereact
                                with the product.
                            </p>
                        </div>
                    </div>
                </Col>

                <Col className='text-end p-0 col-12 col-sm-12 col-md-6 order-1 order-sm-1 order-md-2'>
                    <img src={brief} alt='brief' />
                    <img src={brief1} alt='brief' />
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default CaseStudyBrief