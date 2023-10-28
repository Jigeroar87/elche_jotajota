import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from '../Pages/Inicio'
import Sobrenosotros from '../Pages/Sobrenosotros'
import Zonasdereparto from '../Pages/Zonasdereparto'
import Contactanos from '../Pages/Contactanos'
import Footer from '../Components/Footer/Footer'

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
            <Route path='/Sobrenosotros' element={<Sobrenosotros/>} />
            <Route path='/Zonasdereparto' element={<Zonasdereparto/>} /> 
            <Route path='/Contactanos' element={<Contactanos/>} />
            
                  
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
    </DataProvider>
    
  )
}

export default Rutas