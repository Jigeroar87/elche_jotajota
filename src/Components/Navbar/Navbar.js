import React from 'react'
import './Navbar.css'
import CartWidget from './CartWidget'
import {NavLink, Link} from 'react-router-dom'
import NavbarBrand from './NavbarBrand'

const Navbar = (props) => {
  const {navbar_brand} = props
return (
  <nav className="navbar navbar-expand-md navbar-light fixed-top navBackground fondo__pagina">
      <div className="container-fluid">
            
            <NavbarBrand navbar_brand={navbar_brand}></NavbarBrand>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  
                    <li key='1' className="nav-item">
                            <NavLink className='nav-link' to='/'>Inicio</NavLink>
                    </li>
                    <li key='2' className="nav-item">
                            <NavLink className='nav-link' to='/Sobrenosotros'>Sobre Nosotros</NavLink>
                    </li>
                    <li key='3' className="nav-item">
                            <NavLink className='nav-link' to='/Zonasdereparto'>Zonas de Reparto</NavLink>
                    </li>
                    <li key='4' className="nav-item">
                            <NavLink className='nav-link' to='/Contactanos'>Contáctanos</NavLink>
                    </li>    
              </ul>
              
            </div>
        
            
      </div>
</nav>
)
}


export default Navbar