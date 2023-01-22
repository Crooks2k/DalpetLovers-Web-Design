import React from 'react'
import Header from '../Global-components/Header'
import HeaderVibe from "../../assets/Images/Para-gatos-asetts/HeaderVibe.png"
import Footer from '../Global-components/Footer'
import {catProducts} from "./CatData.js"
import CatProductList from './CatProductList'


const CatProducts = ({AllProducts, setAllProducts, Total, setTotal, CountProducts, setCountProducts}) => {
  return (
    <>
    <div id="Yellow-square"></div>
      <div className="Header">
        <Header 
        AllProducts={AllProducts} 
        setAllProducts={setAllProducts} 
        Total={Total} 
        setTotal={setTotal} 
        CountProducts={CountProducts} 
        setCountProducts={setCountProducts}/>
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
              <label htmlFor='cat3'>Castrados</label>
            </div>

            <div>
              <input type="radio" name="categories" id="cat4" />
              <label htmlFor='cat4'>Arena</label>
            </div>  

          </div>
        </div>

        <div className="Products">
          <h3>Productos para gatos</h3>
          <div className="Products-in-list">
            {
              catProducts.map(item =>{
                return(
                  <CatProductList
                  key={item.id} 
                  item={item} 
                  AllProducts={AllProducts} 
                  setAllProducts={setAllProducts}
                  CountProducts={CountProducts} 
                  setCountProducts={setCountProducts}
                  Total={Total}
                  setTotal={setTotal}/>
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

export default CatProducts