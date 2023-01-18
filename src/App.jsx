import {Route, Routes } from 'react-router-dom'
import './App.css'
import './Components/Global-components/Header.css'
import './Components/Global-components/ShopingCart.css'
import './Components/Inicio/Inicio.css'
import './Components/Inicio/InicioSection2.css'
import './Components/Inicio/ContactForm.css'
import './Components/Global-components/Footer.css'
import Inicio from './Components/Inicio/Inicio'

function App() {
  
  

  return (
    <>
    {/* <Routes>
     <Route path="/" element={}/>
     <Route path="/components/Noticias/Noticias" element={}/>
     <Route path="/components/Aprender/Aprender" element={}/>
     <Route path="/components/Convertidor/Convertidor" element={}/>
     <Route path="/components/Informacion/Informacion" element={}/>
    </Routes> */}
    <Inicio/>
    </>
  )
}

export default App
