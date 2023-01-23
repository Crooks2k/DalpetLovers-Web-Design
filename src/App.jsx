import {Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import './Components/Global-components/Header.css'
import './Components/Global-components/ShopingCart.css'
import "./Components/Global-components/ShopingCartContent.css"
import Inicio from './Components/Inicio/Inicio'
import './Components/Inicio/Inicio.css'
import './Components/Inicio/ContactForm.css'
import './Components/Global-components/Footer.css'
import DogProducts from './Components/Para-perros/DogProducts'
import './Components/Para-perros/DogProducts.css'
import './Components/Para-perros/ProductList.css'
import CatProducts from './Components/Para-gatos/CatProducts'
import './Components/Para-gatos/CatProducts.css'
import './Components/Para-gatos/CatProductList.css'
import Pedido from './Components/Pedido/Pedido'
import './Components/Pedido/Pedido.css'

function App() {

  //estado para los productos que se van añadiendo al carrito
  const [AllProducts, setAllProducts] = useState([]);

  //estado para el total
  const [Total, setTotal] = useState(0);

  //estado para contador de productos
  const [CountProducts, setCountProducts] = useState(0);

  //Almacenamiento de localstorage
  

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

      <Route path="/components/Para-gatos/CatProducts" element={<CatProducts
      AllProducts={AllProducts}  
      setAllProducts={setAllProducts} 
      Total={Total} 
      setTotal={setTotal} 
      CountProducts={CountProducts} 
      setCountProducts={setCountProducts}/>}/>

      <Route path="/components/Pedido/Pedido" element={<Pedido
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
