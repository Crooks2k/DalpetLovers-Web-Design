import React from 'react'
import Card from 'react-bootstrap/Card';
import {GrFormAdd} from "react-icons/gr"

const ProductList = ({item, AllProducts, setAllProducts}) => {

  const AddProduct = () => {
    console.log("add")
  }

  return (
    <div id={item.type} className={item.raza}>
        <Card style={{ width: '22rem' }} className="card__body">
            <Card.Title className="cards__tittles">{item.ProductName}</Card.Title>
            <Card.Subtitle className="cards__peso">{item.peso}</Card.Subtitle>
            <Card.Img variant="top" src={item.image} alt={item.alt} className="card__image"/>
            <Card.Body>
                <Card.Text className="cards__description">{item.Description}</Card.Text>
                <div id="cards__prices">
                   <Card.Text id="card__price">{item.price}</Card.Text>
                   {/* Send reference to ShopingCart to prevent loop */}
                   <GrFormAdd id="add-to-cart" onClick={()=> AddProduct()}/> 
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProductList