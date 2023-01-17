import React from 'react'
import Header from '../Global-components/Header'
import InicioVibe from "../../assets/Images/Inicio-assets/InicioVibe.png"
import dog from "../../assets/Images/Inicio-assets/Inicio-perro.png"
import text from "../../assets/Images/Inicio-assets/Inicio-text.png"
import Dalpet from "../../assets/Images/Inicio-assets/Inicio-Dalpet.png"
import Dalpet2 from "../../assets/Images/Inicio-assets/Inicio-Dalpet2.png"
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
        <div>
           <img src={text} id="imgInicio1"/>
           <img src={Dalpet} id="imgInicio2"/>
           <img src={Dalpet2} id="imgInicio3"/>
           <img src={dog} id="imgInicio4"/>
        </div>
    </div>

    <div id="buy-butt">
        <button id="buy-butt">Comprar</button>
        </div>
    </>
  )
}

export default Inicio