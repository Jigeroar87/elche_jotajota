import React from 'react';
import {useNavigate} from 'react-router-dom';

import { dataContext } from "../Context/DataContext";

import {useContext} from "react";

const Item = (props) => {

  const {id,titulo,descripcion,imagen} = props;
  const navigate = useNavigate();

  const { buyProducts } = useContext(dataContext);

  return (
    <div className='col col-sm-12 col-md-6 col-lg-4 my-4'>
    <div className='card fondo__pagina'>
        <img src={require(`../../Assets/${imagen}`)} className="card-img-top img-fluid img-thumbnail item-image" style={{ height: "400px" }} alt="..."/>
        <div className="card-body align-items-center">
            <p className='card-title'>{titulo}</p>
            <p className='card-text'>{descripcion}</p>
           
            <button className='align-items-center' 
            onClick=  
                     
                     
                     {() => {
                      //function expression
                      navigate(`/Productos/${id}`);
                      buyProducts(props); 
                       //function call:ejecuta
                       
                    }}
                     
                     >Ver mas</button>
        </div>
    </div>
    </div>
  )
}

export default Item


