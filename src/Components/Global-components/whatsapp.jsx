import {AiOutlineWhatsApp} from "react-icons/ai"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import "./whatsapp.css"

const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Contactanos</Popover.Header>
      <Popover.Body>
        Si tienes algun problema no dudes en contactarnos!
      </Popover.Body>
    </Popover>
  );
  
  const Whatsapp = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success" id="whatsapp-succes-button"><div className="btn-whatsapp-pulse"><AiOutlineWhatsApp id="whatsapp-icon"/></div></Button>
    </OverlayTrigger>
  );
  
export default Whatsapp;