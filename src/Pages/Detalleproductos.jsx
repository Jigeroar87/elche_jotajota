import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Darkvader from '../../src/Assets/Alcancia_Darkvader.JPG'
import Hulk from '../../src/Assets/Alcancia_Hulk.JPG'
import Nopoygonta from '../../src/Assets/Lienzo_Nopoygonta.JPG'
import Payasito from '../../src/Assets/Lienzo_Payasito.JPG'

import { dataContext } from "../Components/Context/DataContext";
import { useContext } from "react";

const Detalleproductos = () => {
  
  const { cart, setCart } = useContext(dataContext);

  const { buyProducts } = useContext(dataContext);

    const navigate = useNavigate();
    const { id } = useParams(); 
  
    // o 1 o 2
  
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      setTimeout(() => {
        const filter = cart.find((item) => item.id === id);
        setItem(filter)
        setLoading(false)
      }, 2000);
  
  
  
    }, []);
  
    const agregarAlCarrito = () => {
        // agarrar el item y guardar en el state del carrito 
        navigate('/')
      }

    return (
        <Fragment>
        <section className="pt-5 section__color min-vh-100 fondo__pagina">
        <button className="btn btn-dark" onClick={() => navigate(-1)}>
          Volver
        </button>
        <hr />
        {loading && <h1>Cargando..</h1>}
        {item && !loading && (
          <div>
            <h1>{item.titulo}</h1>
            <img src={require(`../Assets/${item.imagen}`)} alt="..."/>
            <p>{item.descripcion}</p>
            <button onClick={agregarAlCarrito} >Agregar al carrito</button>
          </div>
        )}
        </section>
      </Fragment>
  );
};

export default Detalleproductos;