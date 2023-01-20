import React from 'react'
import Header from '../Global-components/Header'
import HeaderVibe from "../../assets/Images/Para-perros-asetts/Header-vibe.png"
import Footer from '../Global-components/Footer'
import {Products} from "./data.js"
import ProductList from './ProductList'

//props from app.jsx to enter products in the car
const DogProducts = ({AllProducts, setAllProducts}) => {
  
  return (
    <>
      <div id="Yellow-square"></div>
      <div className="Header">
        <Header AllProducts={AllProducts} setAllProducts={setAllProducts}/>
        <img src={HeaderVibe} alt="Header-vibe" id="HeaderVibe"/>
      </div>

      <div className="Product__list">
        <div className="Categories">
          <h3>Filtros</h3>
          <div className="Filter__radios">

            <div>
              <input type="radio" name="categories" id="cat1"/>
              <label htmlFor='cat1'>Cachorros</label>
            </div>

            <div>
              <input type="radio" name="categories" id="cat2" />
              <label htmlFor='cat2'>Adultos</label>
            </div> 

            <div>
              <input type="radio" name="categories" id="cat3" />
              <label htmlFor='cat3'>Raza pequeña</label>
            </div>

            <div>
              <input type="radio" name="categories" id="cat4" />
              <label htmlFor='cat4'>Raza mediana y grande</label>
            </div>  

          </div>
        </div>

        <div className="Products">
          <h3>Productos para perros</h3>
          <div className="Products-in-list">
            {
              Products.map(item =>{
                return(
                  <ProductList 
                  key={item.id} 
                  item={item} 
                  AllProducts={AllProducts} 
                  setAllProducts={setAllProducts}/>
                )
              })
            }
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default DogProducts