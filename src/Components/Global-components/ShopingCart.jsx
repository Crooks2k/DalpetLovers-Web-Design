import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import Huellita from "../../assets/Images/Global-components-assets/Huellita-logo.png"

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="me-2" id="shoping-cart-but">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton id="shoping-cart__header">
          <Offcanvas.Title><img src={Huellita} id="shop-cart__icon"/>Comprar Productos </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Shoping card content here
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function ShopingCart() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={<AiOutlineShoppingCart id="shoping-cart"/>} />
      ))}
    </>
  );
}

export default ShopingCart;