import React from 'react'
import Card from 'react-bootstrap/Card';
import {GrFormAdd} from "react-icons/gr"
import { useState } from 'react';
const ProductList = ({item}) => {

  const [Cart, setCart] = useState([]);

  function addToCart(product){
    setCart(Cart.Join({product}))
    console.log(Cart)
  }
  return (
    <div id={item.type} className={item.raza}>
        <Card style={{ width: '18rem' }} className="card__body">
            <Card.Title className="cards__tittles">{item.ProductName}</Card.Title>
            <Card.Subtitle className="cards__peso">{item.peso}</Card.Subtitle>
            <Card.Img variant="top" src={item.image} alt={item.alt} className="card__image"/>
            <Card.Body>
                <Card.Text className="cards__description">{item.Description}</Card.Text>
                <div id="cards__prices">
                   <Card.Text id="card__price">{item.price}</Card.Text>
                   {/* Send reference to ShopingCart to prevent loop */}
                   <GrFormAdd id="add-to-cart" onClick={()=> addToCart(item.id)}/> 
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProductList