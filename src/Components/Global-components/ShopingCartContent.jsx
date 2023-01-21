import React from 'react'
import Card from 'react-bootstrap/Card';
import {FiTrash2} from "react-icons/fi"

const ShopingCartContent = ({AllProducts, setAllProducts, Total, setTotal, CountProducts, setCountProducts, item}) => {

  //Function to delete product to shopingcart
  const DelProduct = (item) => {

    //Filter all ids if is diferent to item id 
    const results = AllProducts.filter(dato => dato.id !== item.id)

    //Total state = multiply item.price x item.quantity to get total price
    setTotal(Total - item.price * item.quantity)
    //remove item.quantity to countProducts state (to view shoping cart products quantity in header)
    setCountProducts(CountProducts - item.quantity)
    //update info (Allproducts) to get new render for this component (shopingcart)
    setAllProducts(results)
  }
  return (
    <Card id={item.id} className="Shop-Product">
        <FiTrash2 id="clear-icon" onClick={() => DelProduct(item)}/>
        <Card.Img variant="top" src={item.image} alt={item.alt} id="product__image"/>
        <div className="Product-info">
            <Card.Text class="product-quantity">{item.quantity}x</Card.Text>
            <Card.Title className="product__tittles">{item.ProductName}</Card.Title>
            <Card.Subtitle className="product__peso">{item.peso}</Card.Subtitle>
            <Card.Text className="cards__description">{item.Description}</Card.Text>
            {/* Add clear and add buttons in this line */}
            <Card.Text className="product__price">Valor unitario: ${item.price} </Card.Text>
        </div>
    </Card>
  )
}

export default ShopingCartContent