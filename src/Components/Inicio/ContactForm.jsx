import React from 'react'
import Huellita from "../../assets/Images/Global-components-assets/Huellita-logo.png"
import ContactVibe from "../../assets/Images/Inicio-assets/InicioSection2/ContactVibe.png"
import ContactCat from "../../assets/Images/Inicio-assets/InicioSection2/ContactCat.png"
import ContactFigure from "../../assets/Images/Inicio-assets/InicioSection2/ContactFigure.png"
const ContactForm = () => {
  return (
    <>
     <div className="ContactForm">
        <h3><img src={Huellita} id="icon-contact"/> Contáctanos</h3>
        <p>Llena el formulario y un asesor(a) se estará contactando contigo</p>
        <form className='contact-form'>
            <div id="form-name">
                <input type="text" placeholder='Escribe tu nombre'></input>
                <input type="text" placeholder='Celular'></input>
            </div>
            <input type="email" placeholder="Escribe tu E-mail" id="form__email"></input>
            <input type="longtext" rows="10" cols="30" placeholder="¿En qué podemos ayudarte?" id="form__description"></input>
            <button id="form__submit-butt">Enviar</button>
        </form>
     </div>
     <div>
        <img src={ContactVibe} id="ContactVibe"/>
        <img src={ContactCat} id="ContactCat"/>
        <img src={ContactFigure} id="ContactFigure"/>
     </div>
    </>
  )
}

export default ContactForm