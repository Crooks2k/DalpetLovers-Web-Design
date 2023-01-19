import React from 'react'
import DalpetIcon from "../../assets/Images/Global-components-assets/DalpetIcon.png"
import DalpetVariant from "../../assets/Images/Global-components-assets/DalpetIcon-variant.png"
import {GoLocation} from 'react-icons/go'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="Footer-Display">
        <div className='Footer-main'>
          <div id="Footer-s1">
            <img src={DalpetIcon} id="DalpetIcon"/>
            <h4>DalpetLovers</h4>
          </div>
          <div id="Footer-s2">
            <div className='footicon'><GoLocation id="icon-fott1"/> <p>Bogotá, Colombia</p></div>
            <div className='footicon'><BsFillTelephoneFill id="icon-fott2"/> <p>+57 xxxxxxxxx</p></div>
            <div className='footicon' id="footicon1"><MdEmail id="icon-fott3"/><p>importacionesdalpet@importadoradecolombia.com</p></div>
          </div>
        </div>

        {/* Footer for movil version and tablet version */}
        <div className="Footer__links">
          <Dropdown as={ButtonGroup} className="Dropdown-menu">
            <Button id="drop1">Información</Button>
            <Dropdown.Toggle id="dropdown-split-basic" className='dropdown-toggle'/>
            <Dropdown.Menu className="Dropdown__Menu">
              <Dropdown.Item href="#/action-1">Acerca de</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="Dropdown-menu" >
            <Button id="drop2">Servicios</Button>
            <Dropdown.Toggle id="dropdown-split-basic" className='dropdown-toggle'/>
            <Dropdown.Menu className="Dropdown__Menu">
              <Dropdown.Item href="#/action-1">Productos</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Catalogos</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Envios</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="Dropdown-menu" >
            <Button id="drop3">Políticas</Button>
            <Dropdown.Toggle id="dropdown-split-basic" className='dropdown-toggle'/>
            <Dropdown.Menu className="Dropdown__Menu"> 
              <Dropdown.Item href="#/action-1">Horarios</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Pedidos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="Dropdown-menu" >
            <Button id="drop4">Contáctanos</Button>
            <Dropdown.Toggle id="dropdown-split-basic" className='dropdown-toggle4'/>
            <Dropdown.Menu className="Dropdown__Menu">
              <Dropdown.Item href="#/action-1">Contacto</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="Social">
          <h3>Síguenos</h3>
          <div className="Social__links">
            <div className="social-icon__figure"><AiFillInstagram className='social-icon'/></div>
            <div className="social-icon__figure"><BsTwitter className='social-icon'/></div>
            <div className="social-icon__figure"><FaFacebookF className='social-icon'/></div>
          </div>
        </div>
      </div>

      {/* Footer for desktop version */}
      <div className='Footer-main1'>
        <div className="Fot-desc">
          <img src={DalpetVariant} id="DalpetIcon__fot"/>
          <h4>DalpetLovers</h4>
          <div className='footicon'><GoLocation id="icon-fott1-d"/> <p>Bogotá, Colombia</p></div>
          <div className='footicon'><BsFillTelephoneFill id="icon-fott2-d"/> <p>+57 xxxxxxxxx</p></div>
        </div>

        <div className="Foot__info">
          <h5>Información</h5>
          <Link to="" className='link'>Acerca de</Link>
        </div>

        <div className="Foot__Services">
          <h5>Servicios</h5>
          <div className='linkregroup'>
            <Link to="" className='link'>Productos</Link>
            <Link to="" className='link'>Catalogo</Link>
            <Link to="" className='link'>Eventos</Link>
          </div>
        </div>

        <div className="Foot__Polices">
          <h5>Politicas</h5>
          <div className="linkregroup"> 
            <Link to="" className='link'>Horarios</Link>
            <Link to="" className='link'>Pedidos</Link>
          </div>
         
        </div>

        <div className="Foot__Contact">
        <h5>Contáctanos</h5>
          <Link to="" className='link'>Contacto</Link>
        </div>

        <div className="Foot__Social">
        <h4>Síguenos</h4>
          <div className="Social__links">
            <div className="social-icon__figure"><AiFillInstagram className='social-icon'/></div>
            <div className="social-icon__figure"><BsTwitter className='social-icon'/></div>
            <div className="social-icon__figure"><FaFacebookF className='social-icon'/></div>
          </div>
        </div>

        <div className="Footer-email">
          <MdEmail id="icon-fott3-d"/>
          <div className='footicon'><p>Contactanos</p></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer