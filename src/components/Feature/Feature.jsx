import React from 'react';
import "./feature.css"

const Feature = ({text, title}) => {
  return (  
          <div className="card-services">
            <div className='container-title'>
              <div></div>
              <h1 className='gradient__text'> {title} </h1>
            </div>
            <p> {text} </p>
          </div>
  )
}

export default Feature