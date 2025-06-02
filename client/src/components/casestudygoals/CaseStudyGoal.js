import React from 'react';
import './CaseStudyGoalStyle.css';
import logo from '../../media/caselogo.png';
import CaseStudyTitle from '../case study title/CaseStudyTitle';

const CaseStudyGoal = () => {
  return (
    <div className='case-study-goal'>
        <div className='case-study-goal-container caseStudyContainer'>
            <CaseStudyTitle text='goal' color='#F5F5F5' logo={logo} />
            <div className='case-study-text'>
              <p>
                <span>SALE SOLUTION</span>
                <span>
                  The Bamboo E-commerce site provide
                  a digital space were digital transaction 
                  can take place between the buyer and
                  seller.
                </span>
              </p>
              <p>
                <span>PRODUCT HUB</span>
                <span>
                  The Platform provide a single source
                  of truth for all all things furniture to
                  interested parties and eventually be
                  converted to a Lead
                </span>
              </p>
            </div>
        </div>
    </div>
  )
}

export default CaseStudyGoal