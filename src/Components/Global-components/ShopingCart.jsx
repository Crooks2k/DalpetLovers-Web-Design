import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import Huellita from "../../assets/Images/Global-components-assets/Huellita-logo.png"
import sadcat from "../../assets/Images/Global-components-assets/sad-cat.png"
import ShopingCartContent from './ShopingCartContent';
import {AiOutlineClear} from "react-icons/ai"
import { Link } from 'react-router-dom';

function OffCanvasExample({AllProducts, setAllProducts, Total, setTotal, CountProducts, setCountProducts, name, ...props}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cleanCart = () =>{
    setAllProducts([])
    setTotal(0)
    setCountProducts(0)
  }
  return (
    <>
       {
        //product list in the car
       AllProducts.length ? (
        <>
          <Button onClick={handleShow} className="me-2" id="shoping-cart-but">
              {name}
          </Button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton id="shoping-cart__header">
              <Offcanvas.Title id="Shoping-cart-tittle"><img src={Huellita} id="shop-cart__icon"/>Comprar Productos </Offcanvas.Title>
            </Offcanvas.Header>
            <div id="Clear-shopping-cart__content" fixed="bottom">
             <AiOutlineClear id="Clear-shopping-cart__content-icon" onClick={cleanCart}/>
             <p htmlFor="Clear-shopping-cart__content-icon">| Vaciar carrito</p>
            </div>
            {/* Generate shoping cart content with Allproducts state */}
            <Offcanvas.Body id="Shoping-card-body">
              <div id="Shoping-cart-content">
                {
                  AllProducts.map(item => {
                    return(
                      <ShopingCartContent 
                      key={item.id} 
                      item={item} 
                      AllProducts={AllProducts}
                      setAllProducts={setAllProducts}
                      Total={Total} 
                      setTotal={setTotal} 
                      CountProducts={CountProducts}
                      setCountProducts={setCountProducts}/>
                    )
                  })
                }
              </div>
            </Offcanvas.Body>
            <Offcanvas.Header fixed="bottom" id="Shoping-cart__price">
              <div className="Finalize-order-butt">
               <Offcanvas.Title id="shop-cart__tittle-price">Precio a pagar: <span id="total-price">${Total}</span></Offcanvas.Title>
               <Link to="/components/Pedido/Pedido" id="Realize-ped"><button>Hacer pedido</button></Link>
              </div>
            </Offcanvas.Header>
          </Offcanvas>
        </>
       ) : (
        //Nothing in the car message
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

function ShopingCart({AllProducts, setAllProducts, Total, setTotal, CountProducts, setCountProducts}) {
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
        Total={Total} 
        setTotal={setTotal} 
        CountProducts={CountProducts}
        setCountProducts={setCountProducts}
      />
      ))}
    </>
  );
}

export default ShopingCart;