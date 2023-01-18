import React from 'react'
import DalpetIcon from "../../assets/Images/Global-components-assets/DalpetIcon.png"
import {GoLocation} from 'react-icons/go'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const Footer = () => {
  return (
    <footer>
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

        <div className="Footer__links">
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Información</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Acerca de</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup}>
            <Button variant="success">Servicios</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Productos</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Catalogos</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Envios</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup}>
            <Button variant="success">Políticas</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Horarios</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Pedidos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup}>
            <Button variant="success">Contáctanos</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Contacto</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    </footer>
  )
}

export default Footer