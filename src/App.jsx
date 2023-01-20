import {Route, Routes } from 'react-router-dom'
import { useState } from 'react'
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

  //estado para los productos que se van añadiendo al carrito
  const [AllProducts, setAllProducts] = useState([]);

  //estado para el total
  const [Total, setTotal] = useState(0);

  //estado para contador de productos
  const [CountProducts, setCountProducts] = useState(0);

  return (
    <>
    <Routes>
     <Route path="/" element={<Inicio 
     AllProducts={AllProducts} 
     setAllProducts={setAllProducts} 
     Total={Total} 
     setTotal={setTotal} 
     CountProducts={CountProducts} 
     setCountProducts={setCountProducts}/>}/>

     <Route path="/components/Para-perros/DogProducts" element={<DogProducts
      AllProducts={AllProducts}  
      setAllProducts={setAllProducts} 
      Total={Total} 
      setTotal={setTotal} 
      CountProducts={CountProducts} 
      setCountProducts={setCountProducts}/>}/>
    </Routes>
    </>
  )
}

export default App
