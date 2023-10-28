import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from '../Pages/Inicio'
import Productos from '../Pages/Productos'
import Sobrenosotros from '../Pages/Sobrenosotros'
import Zonasdereparto from '../Pages/Zonasdereparto'
import Contactanos from '../Pages/Contactanos'
import Detalleproductos from '../Pages/Detalleproductos'
import Categorias  from '../Pages/Categorias'
import Footer from '../Components/Footer/Footer'

import CartContent from '../Components/CartContent/CartContent'

import Navbar from '../Components/Navbar/Navbar'

import DataProvider from "../Components/Context/DataContext";

import GlobalState from "../Components/Context/GlobalContext"

const Rutas = () => {
    
    const navbar_brand = [
        {
            path:"/",
            name:"FunnyBox"
        }
    ]
    
    

    

  return (
    
    <DataProvider>
    <BrowserRouter>
        <Navbar navbar_brand={navbar_brand}/>
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/Productos' element={<Productos/>} />
            <Route path='/Sobrenosotros' element={<Sobrenosotros/>} />
            <Route path='/Zonasdereparto' element={<Zonasdereparto/>} />
            <Route path='/CartContent' element={<CartContent/>} />  
            <Route path='/Contactanos' element={<Contactanos/>} />
            <Route path='/Productos/:id' element={<Detalleproductos/>} />
            <Route path='/Categorias/:idcategoria' element={<Categorias/>} />
                  
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
    </DataProvider>
    
  )
}

export default Rutas