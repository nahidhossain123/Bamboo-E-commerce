import React from 'react'
import './ButtonStyle.css'

const Button = ({button_text,image}) => {
  return (
    <div className='btn-container'>
        <button> {image&& <img src={image} alt="btnIcon" /> } {button_text}</button>
    </div>
  )
}

export default Button