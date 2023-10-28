import React, { Fragment, useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useParams } from "react-router-dom";
import Item from '../Components/Item/Item'

import {useContext,  useEffect } from "react";

import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase.config'

const Categorias = () => {
 
    const { idcategoria } = useParams();   
    console.log("idcat "+idcategoria);

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


    
        const filter = productos.filter((item) => item.idcategoria === idcategoria);
        console.log("filter");
        console.log(filter);  
                
       
  
  return (
    <Fragment>
    <section className="pt-5 section__color min-vh-100 fondo__pagina">
    <h1>Productos</h1>
  
    <div className='card-group fondo__pagina'>
      {
      
      filter.map((item) => (
        <Item key={item.id} {...item} />
        
      ))
      
      }
      
    </div>
    </section>
    </Fragment>
  )
}

export default Categorias