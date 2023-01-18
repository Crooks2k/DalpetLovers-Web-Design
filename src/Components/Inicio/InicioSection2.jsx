import React from 'react'
import DogCat from "../../assets/Images/Inicio-assets/InicioSection2/Dog-and-Cat.png"
import Benefits from "../../assets/Images/Inicio-assets/InicioSection2/Benefits.png"
import Container from 'react-bootstrap/Container';


const InicioSection2 = () => {
  return (
    <>
    <h3 id="Section2__tittle">Elige a tu tipo de amigo</h3>

    <Container id="section2">
       <div id="dog-and-cat-bg">
         <img src={DogCat} id="dogcat"/>
       </div>

       <div className="Section2__butts">
        <button id="cat-butt">Gato</button>
        <button id="dog-butt">Perro</button>
       </div>
    </Container>

    <Container id="section2-benefits">
        <h3>Estas escogiendo </h3>
        <img src={Benefits}/>
    </Container>
    </>
  )
}

export default InicioSection2