import React from 'react'
import Facebook from '../../Assets/facebook.png'
import Instagram from '../../Assets/Instagram.png'

const Footer = () => {
  return (
    <footer className="footer text-center fondo__pagina">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 offset-2 col-md-6 offset-md-3" >
                                <p>Lima - Perú 2023 - Síguenos en nuestras redes sociales</p>   
                                        <a href="https://www.facebook.com/Funny-Box-Per%C3%BA-108836140896985"> 
                                            <img src={Facebook} alt='Facebook' width="45px" height="45px"/>        
                                        </a>
                                        <a href="https://www.instagram.com/funnybox_pe/?hl=es-la"> 
                                            <img src={Instagram} alt='Instagram' width="45px" height="45px"/>        
                                        </a>
                            </div>
                          </div>
                        </div>
                </div>
                
                
    </footer>
  )
}

export default Footer