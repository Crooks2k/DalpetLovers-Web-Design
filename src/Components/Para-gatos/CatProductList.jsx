import React from 'react'
import Card from 'react-bootstrap/Card';
import {BiMessageSquareAdd} from "react-icons/bi"

const CatProductList = ({item, AllProducts, setAllProducts, Total, setTotal, CountProducts, setCountProducts}) => {
  
  //Function to save products in Allproducts state to view in shoping cart
  const AddProduct = item => {
    //search in allproducts for repeat id, if id is repeat product quantity add 1
    if(AllProducts.find(dato => dato.id === item.id)){

     const products = AllProducts.map(dato => dato.id === item.id ? {...dato, quantity: dato.quantity + 1}
       : dato
      );
      //Total state = multiply item.price x item.quantity to get total price
      setTotal(Total + item.price * item.quantity)
      //add item.quantity to countProducts state (to view result in header)
      setCountProducts(CountProducts + item.quantity)
      return setAllProducts([...products])
    }

    //Total state = multiply item.price x item.quantity to get total price
    setTotal(Total + item.price * item.quantity)
    //add item.quantity to countProducts state (to view result in header)
    setCountProducts(CountProducts + item.quantity)
    //... to expand Allproducts to add item (object) in object array
    setAllProducts([...AllProducts, item])
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
               <Card.Text id="card__price">${item.price}</Card.Text>
               {/* Send reference to ShopingCart to prevent loop */}
               <BiMessageSquareAdd id="add-to-cart" onClick={()=> AddProduct(item)}/> 
            </div>
        </Card.Body>
    </Card>
</div>
  )
}

export default CatProductList