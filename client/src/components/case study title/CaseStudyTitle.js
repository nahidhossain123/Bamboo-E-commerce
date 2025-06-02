import React from 'react';
import './CaseStudyTittleStyle.css'

const CaseStudyTitle = ({text, color,logo}) => {
  return (
    <div className='case-study-title-container'>
      <div className='title-image'>
          <img src={logo} alt='logo' />
          <span style={{color:color}}>Casestudy</span>
      </div>
      <div className='case-study-title-text'>
        <span style={{color:color}}>{text}</span>
      </div>
    </div>
  )
}

export default CaseStudyTitle