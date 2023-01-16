import React from 'react'
import Header from '../Global-components/Header'
import InicioVibe from "../../assets/Images/Inicio-assets/InicioVibe.png"

const Inicio = () => {
  return (
    <>
    <Header/>
    <div id="Yellow-square"></div>
    <div className="King-div">
        <div  className='main-div'>
            <h3>Food Pet Shop</h3>
            
            <p>Nutricion <br/>premium para tu mejor amigo</p>
        </div>
        <img src={InicioVibe} id="InicioVibe"/>
    </div>
    <div>
        
    </div>
    </>
  )
}

export default Inicio