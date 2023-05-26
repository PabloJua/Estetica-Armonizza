import React from 'react'
import logo from "../assets/Logo ARMONIZZA.png"
import "../index.css"

const Navbar = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-md fixed-top'>
                <div className='container-fluid d-flex' style={{height:"100px"}}>
                  <a className="navbar-brand" style={{marginLeft:"100px"}} to={"/"}><img src={logo} alt="Logo Armonizza" style={{ height: "120px", width: "160px" }} /></a>
                  <div className="collapse navbar-collapse justify-content-end">
                    <ul class="navbar-nav nav-underline" style={{gap:"40px"}}>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Sobre nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Profesionales</a>
                        </li>
                        <li class="nav-item" style={{marginRight:"40px"}}>
                            <a class="nav-link">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" style={{marginRight:"40px"}}><button className='btn btn-home px-5' style={{backgroundColor:"#aac098", fontWeight:"bolder", color:"#274626", border:"#274626"}}>Saca tu turno</button></a>
                        </li>
                    </ul>
                  </div>  
                </div>
            </nav>
        </header>

    )
}

export default Navbar