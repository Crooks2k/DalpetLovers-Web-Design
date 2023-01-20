import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import Huellita from "../../assets/Images/Global-components-assets/Huellita-logo.png"
import sadcat from "../../assets/Images/Global-components-assets/sad-cat.png"

function OffCanvasExample({AllProducts, setAllProducts, name, ...props}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       {
       AllProducts.length ? (
        <>
          <Button onClick={handleShow} className="me-2" id="shoping-cart-but">
              {name}
          </Button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton id="shoping-cart__header">
              <Offcanvas.Title id="Shoping-cart-tittle"><img src={Huellita} id="shop-cart__icon"/>Comprar Productos </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="Shoping-card-body">
              Your items here
            </Offcanvas.Body>
            <Offcanvas.Header fixed="bottom" id="Shoping-cart__price">
              <Offcanvas.Title id="shop-cart__tittle-price">Precio total</Offcanvas.Title>
            </Offcanvas.Header>
          </Offcanvas>
        </>
       ) : (
        <>
          <Button onClick={handleShow} className="me-2" id="shoping-cart-but">
              {name}
          </Button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton id="shoping-cart__header">
              <Offcanvas.Title id="Shoping-cart-tittle"><img src={Huellita} id="shop-cart__icon"/>Comprar Productos </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="Shoping-card-body" className='nothing-in-cart'>
              No tienes nada agregado en tu carrito
              <img src={sadcat} id="Shop-cart-nothing-image"/>
            </Offcanvas.Body>
            <Offcanvas.Header fixed="bottom" id="Shoping-cart__price">
              <Offcanvas.Title id="shop-cart__tittle-price"></Offcanvas.Title>
            </Offcanvas.Header>
          </Offcanvas>
        </>
       )
      }
    </>
  );
}

function ShopingCart({AllProducts, setAllProducts}) {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample 
        key={idx} 
        placement={placement} 
        name={<AiOutlineShoppingCart 
        id="shoping-cart"/>} 
        AllProducts={AllProducts} 
        setAllProducts={setAllProducts}
      />
      ))}
    </>
  );
}

export default ShopingCart;