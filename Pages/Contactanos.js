import React from 'react'

const Contacto = () => {
  return (
    <section className="pt-5 section__color min-vh-100 fondo__pagina">
            <div className="row">
                <div className="container-fluid  pt-5">
                    <div className="col-8 offset-2 col-md-6 offset-md-3">
                            <form>
                                <h1>Contacta a Funny Box</h1>
                            
                                <div className="mb-3">
                                    <label for="fnombre" className="form-label">Nombre:</label>
                                    <input type="text" id="fnombre" className="form-control" required placeholder="Nombre"/>
                                </div>

                                <div className="mb-3">
                                    <label for="femail" className="form-label">Email:</label>
                                    <input type="email" id="femail" className="form-control" required placeholder="coderhouse@gmail.com"/>
                                </div>
                                    
                                <div className="mb-3">
                                    <label for="ftelefono" className="form-label">Teléfono:</label> 
                                    <input type="text" id="ftelefono" className="form-control" required placeholder="999999999"/>
                                </div>    
                                    
                                <div className="mb-3">
                                    <label for="fMensaje " className="form-label">Mensaje:</label>
                                    <textarea className="form-control" id="MensajeLargo"></textarea>
                                </div>

                                <div className="mb-3">
                                    <label for="fMensaje " className="form-label" id="msjRecomendation"></label>
                                </div>

                                <div><input type="submit" className="btn btn-primary"/></div>

                            </form>
                    </div>
                </div>    
            </div>
        </section>
  )
}

export default Contacto