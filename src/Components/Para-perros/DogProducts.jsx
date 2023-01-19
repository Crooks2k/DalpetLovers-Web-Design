import React from 'react'
import Header from '../Global-components/Header'
import HeaderVibe from "../../assets/Images/Para-perros-asetts/Header-vibe.png"
import Footer from '../Global-components/Footer'

//Daldog cachorro raza pequeña
import Daldog1kg from "../../assets/Images/Para-perros-asetts/Razas-pequeñas/Cachorro/Daldog-1KG.png"
import Daldog10kg from "../../assets/Images/Para-perros-asetts/Razas-pequeñas/Cachorro/Daldog-10KG.png"
import Daldog25kg from "../../assets/Images/Para-perros-asetts/Razas-pequeñas/Cachorro/Daldog-25KG.png"

//Daldog adulto raza pequeña
import DaldogA1kg from "../../assets/Images/Para-perros-asetts/Razas-pequeñas/Adulto/Daldog-A-1KG.png"
import DaldogA10kg from "../../assets/Images/Para-perros-asetts/Razas-pequeñas/Adulto/Daldog-A-10KG.png"
import DaldogA25kg from "../../assets/Images/Para-perros-asetts/Razas-pequeñas/Adulto/Daldog-A-25KG.png"

// Daldog adulto raza media y grande
import DaldogMGA15kg from "../../assets/Images/Para-perros-asetts/Razas-medias-grandes/Adulto/Daldog-MG-A-15KG.png"
import DaldogMGA25kg from "../../assets/Images/Para-perros-asetts/Razas-medias-grandes/Adulto/Daldog-MG-A-25KG.png"

//Pro Omega cachorro razas pequeñas
import ProOmega1kg from "../../assets/Images/Para-perros-asetts/Pro-Omega/Razas-pequeñas/Cachorro/Pro-Omega-1KG.png"
import ProOmega3kg from "../../assets/Images/Para-perros-asetts/Pro-Omega/Razas-pequeñas/Cachorro/Pro-Omega-3KG.png"

//Pro omega adulto razas pequeñas
import ProOmegaA1kg from "../../assets/Images/Para-perros-asetts/Pro-Omega/Razas-pequeñas/Adulto/Pro-Omega-A-1KG.png"
import ProOmegaA3kg from "../../assets/Images/Para-perros-asetts/Pro-Omega/Razas-pequeñas/Adulto/Pro-Omega-A-3KG.png"
import ProOmegaA10kg from "../../assets/Images/Para-perros-asetts/Pro-Omega/Razas-pequeñas/Adulto/Pro-Omega-A-10KG.png"
import ProductList from './ProductList'

const DogProducts = () => {
  
  //Datos
  const Products = 
    [
      // Daldog cachorro raza pequeña
      {"id": 1,
        "ProductName": "Daldog Cachorro",
        "Description": "Daldog Cachorro, Razas Pequeñas",
        "alt": "Daldog raza pequeña 1kg",
        "peso": "1kg",
        "image": Daldog1kg,
        "price": "$15.250",
        "type": "cachorro",
        "raza": "pequeña"},

      {"id": 2,
        "ProductName": "Daldog Cachorro",
        "Description": "Daldog Cachorro, Razas Pequeñas",
        "alt": "Daldog raza pequeña 10,1kg",
        "peso": "10,1kg",
        "image": Daldog10kg,
        "price": "$128.500",
        "type": "cachorro",
        "raza": "pequeña"},

      {"id": 3,
        "ProductName": "Daldog Cachorro",
        "Description": "Daldog Cachorro, Razas Pequeñas",
        "alt": "Daldog raza pequeña 25kg",
        "peso": "25kg",
        "image": Daldog25kg,
        "price": "$282.800",
        "type": "cachorro",
        "raza": "pequeña"},

        // Daldog adulto raza pequeña
      {"id": 4,
        "ProductName": "Daldog Adulto",
        "Description": "Daldog Adulto, Razas pequeñas",
        "alt": "Daldog raza pequeña 1kg",
        "peso": "1kg",
        "image": DaldogA1kg,
        "price": "$15.200",
        "type": "adulto",
        "raza": "pequeña"},

      {"id": 5,
        "ProductName": "Daldog Adulto",
        "Description": "Daldog Adulto, Razas pequeñas",
        "alt": "Daldog raza pequeña 10.1kg",
        "peso": "10,1kg",
        "image": DaldogA10kg,
        "price": "$125.600",
        "type": "adulto",
        "raza": "pequeña"},

      {"id": 6,
        "ProductName": "Daldog Adulto",
        "Description": "Daldog Adulto, Razas pequeñas",
        "alt": "Daldog raza pequeña 25kg",
        "peso": "25kg",
        "image": DaldogA25kg,
        "price": "276.000",
        "type": "adulto",
        "raza": "pequeña"},

        // Daldog adulto raza media y grande

      {"id": 7,
        "ProductName": "Daldog Adulto",
        "Description": "Daldog Adulto, Razas medias y grandes",
        "alt": "Daldog raza media / grande 15kg",
        "peso": "15kg",
        "image": DaldogMGA15kg,
        "price": "$153.700",
        "type": "adulto",
        "raza": "grande"},

      {"id": 8,
        "ProductName": "Daldog Adulto",
        "Description": "Daldog Adulto, Razas medias y grandes",
        "alt": "Daldog raza media / grande 25kg",
        "peso": "25kg",
        "image": DaldogMGA25kg,
        "price": "$244.000",
        "type": "adulto",
        "raza": "grande"},

        //Pro Omega cachorro razas pequeñas

        {"id": 9,
        "ProductName": "Pro Omega Cachorro",
        "Description": "Pro Omega Cachorros, Razas pequeñas",
        "alt": "Pro Omega Cachorro 1kg",
        "peso": "1kg",
        "image": ProOmega1kg,
        "price": "$18.100",
        "type": "cachorro",
        "raza": "pequeña"},

        {"id": 10,
        "ProductName": "Pro Omega Cachorro",
        "Description": "Pro Omega Cachorros, Razas pequeñas",
        "alt": "Pro Omega Cachorro 3kg",
        "peso": "3kg",
        "image": ProOmega3kg,
        "price": "$45.400",
        "type": "cachorro",
        "raza": "pequeña"},

        //Pro omega adulto razas pequeñas

        {"id": 11,
        "ProductName": "Pro Omega Adulto",
        "Description": "Pro Omega Adulto, Razas pequeñas",
        "alt": "Pro Omega Adulto 1kg",
        "peso": "1kg",
        "image": ProOmegaA1kg,
        "price": "$16.600",
        "type": "adulto",
        "raza": "pequeña"},

        {"id": 12,
        "ProductName": "Pro Omega Adulto",
        "Description": "Pro Omega Adulto, Razas pequeñas",
        "alt": "Pro Omega Adulto 3kg",
        "peso": "3kg",
        "image": ProOmegaA3kg,
        "price": "$45.400",
        "type": "adulto",
        "raza": "pequeña"},

        {"id": 13,
        "ProductName": "Pro Omega Adulto",
        "Description": "Pro Omega Adulto, Razas pequeñas",
        "alt": "Pro Omega Adulto 10,1kg",
        "peso": "10,1kg",
        "image": ProOmegaA10kg,
        "price": "$128.500",
        "type": "adulto",
        "raza": "pequeña"},
    ]
  return (
    <>
      <div id="Yellow-square"></div>
      <div className="Header">
        <Header/>
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
                  <ProductList key={item.id} item={item}/>
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