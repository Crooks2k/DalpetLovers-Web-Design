import React from 'react'
import Card from 'react-bootstrap/Card';
import {FiTrash2} from "react-icons/fi"
import {RiSubtractFill} from "react-icons/ri"
import {MdOutlineAdd} from "react-icons/md"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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

  const AddOneProduct = item => {
    //increment
    let quantityAdded = 1;
    //search in allproducts for repeat id, if id is repeat product quantity add 1
    if(AllProducts.find(dato => dato.id === item.id)){
      const products = AllProducts.map(dato => dato.id === item.id ? {...dato, quantity: dato.quantity + quantityAdded}
       : dato
      );
      //Total state = multiply item.price x item.quantity to get total price
      setTotal(Total + item.price * quantityAdded)
      //add item.quantity to countProducts state (to view result in header)
      setCountProducts(CountProducts + quantityAdded)
      return setAllProducts([...products])
    }
  }

  const SubOneProduct = item => {
    //decrement
    let quantitySub = 1;
    //search in allproducts for repeat id, if id is repeat product quantity add 1
    if(AllProducts.find(dato => dato.id === item.id)){
      const products = AllProducts.map(dato => dato.id === item.id ? {...dato, quantity: dato.quantity - quantitySub}
       : dato
      );
      //Total state = multiply item.price x item.quantity to get total price
      setTotal(Total - item.price * quantitySub)
      //sub item.quantity to countProducts state (to view result in header)
      setCountProducts(CountProducts - quantitySub)
      return setAllProducts([...products])
    }
  }

  return (
    <Card id={item.id} className="Shop-Product">
        <div>
          <Card.Img variant="top" src={item.image} alt={item.alt} id="product__image"/>
          {/* Shopingcart buttons */}
          <ButtonGroup size="sm" id="shop-cart-buttons">
            <Button id="clear1" onClick={() => SubOneProduct(item)} disabled={item.quantity === 1 ? "enabled" : ''}><RiSubtractFill className="clear-icon"/></Button>
            <Button onClick={() => DelProduct(item)} id="clear2"><FiTrash2 className="clear-icon"/></Button>
            <Button id="clear3" onClick={() => AddOneProduct(item)}><MdOutlineAdd className="clear-icon"/></Button>
          </ButtonGroup>
        </div>
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