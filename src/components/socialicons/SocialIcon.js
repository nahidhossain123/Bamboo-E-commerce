import React from 'react'
import './SocialIconStyle.css'

const SocialIcon = ({text}) => {
  return (
    <div className='social-links'>
        {text&&<span>{text}</span>}
        <span><i className="fa-brands fa-facebook-f"></i></span>
        <span><i className="fa-brands fa-twitter"></i></span>
        <span><i className="fa-brands fa-instagram"></i></span>
    </div>
  )
}

export default SocialIcon