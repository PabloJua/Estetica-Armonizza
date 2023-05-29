import React from 'react'
import "./contactoInfo.css"

const ContactoInfo = ({text, img}) => {
  return (
    <div className='d-flex contact-div'>
        <img src={img} alt="" className='img-contacto'/>
        <p>{text}</p>
    </div>
  )
}

export default ContactoInfo