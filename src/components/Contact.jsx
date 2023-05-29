import React from 'react'
import ContactoInfo from '../components/Contact/ContactoInfo'
import logoC1 from "../assets/location-dynamic-premium.png"
import logoC2 from "../assets/mail-dynamic-premium.png"
import logoC3 from "../assets/phone-ringing-dynamic-premium.png"

const Contact = () => {
  return (
   <div className='container'>
       <h1 className='section-title' style={{ marginBottom: "40px" }}>Cont<span>a</span>cto</h1>
       <p className='text-center' style={{ marginBottom: "40px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil nesciunt, totam sit libero fugiat similique laudantium architecto praesentium, alias mollitia dolorum modi ad consequatur aliquam quia nemo quidem tempora.</p>
   <div className="left">
        <ContactoInfo img={logoC1} text="tu"/>
        <ContactoInfo img={logoC2} text={"yo"} />
        <ContactoInfo img={logoC3} text={"nosotros"}/>
   </div>
   <div className="right">

   </div>
   </div>
  )
}

export default Contact