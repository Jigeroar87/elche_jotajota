import React, { Fragment } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Item from '../Components/Item/Item';

import {useContext, useState, useEffect } from "react";
import axios from "axios";
import { dataContext } from "../Components/Context/DataContext";

import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase.config'

const Productos = () => {

  const [productos, setProductos] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    
    const getProducts = async()=>{

      setLoading(true)
      try {
        
          const col = collection(db,"productos")
          const data = await getDocs(col)
          const result = data.docs.map( doc=>doc={id:doc.id, ...doc.data()})
          console.log("result")
          console.log(result)
          setProductos(result)
      } catch (error) {
        console.log(error)
      }

    }

   getProducts()
    
  }, [])

  console.log("productos");
  console.log(productos);


    
        
  
    return (

    <Fragment>
    <section className="pt-5 section__color min-vh-100 fondo__pagina">
    <h1>Productos</h1>
  
    <div className='card-group fondo__pagina'>
      {productos.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
    </section>
    </Fragment>
  )
}

export default Productos