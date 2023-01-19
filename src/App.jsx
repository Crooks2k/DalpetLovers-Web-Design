import {Route, Routes } from 'react-router-dom'
import './App.css'
import './Components/Global-components/Header.css'
import './Components/Global-components/ShopingCart.css'
import Inicio from './Components/Inicio/Inicio'
import './Components/Inicio/Inicio.css'
import './Components/Inicio/InicioSection2.css'
import './Components/Inicio/ContactForm.css'
import './Components/Global-components/Footer.css'
import DogProducts from './Components/Para-perros/DogProducts'
import './Components/Para-perros/DogProducts.css'
import './Components/Para-perros/ProductList.css'



function App() {
  
  

  return (
    <>
    <Routes>
     <Route path="/" element={<Inicio/>}/>
     <Route path="/components/Para-perros/DogProducts" element={<DogProducts/>}/>
     {/* <Route path="/components/Aprender/Aprender" element={}/>
     <Route path="/components/Convertidor/Convertidor" element={}/>
     <Route path="/components/Informacion/Informacion" element={}/> */}
    </Routes>
    </>
  )
}

export default App
