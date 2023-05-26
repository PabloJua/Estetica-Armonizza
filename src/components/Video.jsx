import React from 'react';
import logoPlay from "../assets/play-dynamic-premium.png"
import imgMujer from "../assets/png-mujer-video.png"


const Video = () => {
  return (
    <div className="section-video bg-video d-flex" style={{marginTop:"350px", marginBottom:"150px"}}>
        <div style={{marginLeft:"160px", paddingTop:"100px"}}>
          <h1 style={{fontWeight:"900", fontSize:"18px", fontFamily:"Montserrat, sans-serif", wordSpacing:"10px", letterSpacing:"5px"}}>EL CUIDADO DE TU CUERPO COMIENZA AQUÍ</h1>
           <p style={{paddingLeft:"250px", letterSpacing:"2px", fontFamily:"Montserrat, sans-serif", color:"white", fontWeight:"400"}}>Mira nuestro video</p> 
           <img src={logoPlay} alt="" style={{marginLeft:"270px",height: "120px", width: "160px"}} />
        </div>    
        <div>
          <img src={imgMujer} alt="" style={{marginLeft:"270px" , marginTop:"-170px", height: "520px", width: "360px"}} /> 
        </div>
      </div>
  )
}

export default Video;