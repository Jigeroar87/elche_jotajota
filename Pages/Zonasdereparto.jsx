import React from 'react'
import ImgZonasdereparto from '../Assets/Zonas_Reparto.JPG'

const Zonasdereparto = () => {
  return (
    <section className="pt-5 section__color min-vh-100 fondo__pagina">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2 col-md-12 offset-md-0 pt-5">
                            <h3 className="text-center">Zonas de Reparto</h3>
                            <img src={ImgZonasdereparto} className="img-fluid img-thumbnail rounded mx-auto d-block"/>
                            <p>Zonas disponibles de Lima</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>   


        </section>
  )
}

export default Zonasdereparto