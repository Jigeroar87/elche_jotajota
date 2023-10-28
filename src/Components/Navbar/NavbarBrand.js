import React from 'react'
import {NavLink} from 'react-router-dom'
import Imglogofunnybox from '../../Assets/Logo_FunnyBox.JPG'

const NavbarBrand = (props) => {
    const {navbar_brand} = props
  return (
    <p className="navbar-brand" href="#">
                
                <NavLink className={'navbar-brand animate__animated animate__bounce animate__delay-1s animate__infinite animate__fast'} to='/'> 
                    <img src={Imglogofunnybox} alt="logo" width="45px" height="45px"/>        
                </NavLink>
              
    </p>
  )
}

export default NavbarBrand