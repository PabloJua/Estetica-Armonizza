import React from 'react'
// import photoBg from '../assets/bg-home-armonizza.jpg' 
import Navbar from './Navbar';
import bgHomeIzq from '../assets/bg-home-5.jpg'; 
import bgHomeMed from '../assets/bg-home-2.jpg'; 
import bgHomeDer from '../assets/bg-home-4.jpg'; 





const Home = () => {
  return (
    //   <div className='img-bg img-home'>
    //       <div className='overlay text-white'>  
    //         <Navbar/>
    //         {/* <h1>Hello, world</h1> */}
    //     </div>  
    //  </div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
        <img src={bgHomeIzq} class="d-block w-100 overlay" alt="/"/>
        <div class="container">
          <Navbar/>
            <div class="carousel-caption text-end" style={{paddingBottom:"150px"}}>
              <div className='row'>
                <div className="col-4">

                </div>
                <div className="col-8">
                  <h1 style={{fontSize:"70px", fontWeight:"bold", color:"#aac098", lineHeight:"4.5rem"}}>Últimas técnicas y un equipo especializado</h1>
                  <p>El mejor y más moderno equipamiento, tecnologías médicas avanzadas y diagnóstico innovador.</p>
                  <p><a class="btn btn-lg btn-success" href="/">Conoce más</a></p>
                </div>
              </div>  
            </div>
            
          </div>
        </div>

        <div class="carousel-item">
         <img src={bgHomeMed} class="d-block w-100 overlay" alt="/"/>
        <div class="container">
            <Navbar/>
            <div class="carousel-caption" style={{paddingBottom:"200px"}}>
              <h1 style={{fontSize:"70px", fontWeight:"bold", color:"#aac098", lineHeight:"4.5rem"}}>Conoce a nuestro equipo de médicos</h1>
              <p>Médicos de alto nivel profesional. Todos los especialistas tienen una amplia experiencia práctica y cursos de formación.</p>
              <p><a class="btn btn-lg btn-success" href="/">Conoce más</a></p>
            </div>
          </div>
        </div>
        
        <div class="carousel-item">
          <img src={bgHomeDer} class="d-block w-100 overlay" alt="/"/>
        <div class="container">
          <Navbar/>
            <div class="carousel-caption text-start" style={{paddingBottom:"180px"}}>
              <div className="row">
                <div className="col-8">
                  <h1 style={{fontSize:"70px", fontWeight:"bold", color:"#aac098", lineHeight:"4.5rem"}}>Tu centro de estética de confianza</h1>
                  <p>Mayor preocupación por la salud de nuestros clientes y la experiencia humana.</p>
                  <p><a class="btn btn-lg btn-success" href="/">Conoce más</a></p>
                </div>
                <div className="col-4">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Home;