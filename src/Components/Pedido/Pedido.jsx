import React from 'react'
import PedidoVibe from "../../assets/Images/Pedido/PedidoVibe.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Global-components/Footer'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalImage from "../../assets/Images/Pedido/Modal-image.png"
import { Link } from 'react-router-dom';

const Pedido = ({AllProducts, setAllProducts, Total, setTotal, CountProducts, setCountProducts}) => {

  const [name, setName] = useState('');
  const [identification, setIdentification] = useState('');
  const [adress, setAdress] = useState('');
  const [number, setNumber] = useState('');

  let ProductData = AllProducts

  const handleChange1 = (e) => {
      setName(e.target.value);
  }
  const handleChange2 = (e) => {
      setIdentification(e.target.value);
  }
  const handleChange3 = (e) => {
      setAdress(e.target.value);
  }
  const handleChange4 = (e) => {
      setNumber(e.target.value)
  }

  //Final Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //Function to get data, open modal and send whatsapp order
  const handleShow = () => {
    setShow(true)

    //data for whatsapp api
    const data = [{
      "name": name,
      "identification": identification,
      "adress": adress,
      "number": number,
      "totalPrice": Total,
      "products":  ProductData}]
    console.log(data);

    //whatsapp order message
    const message = `Hola, soy ${data[0].name} y me gustaria solicitar la siguiente orden a domicilio.
    *----------------------------------*
    *Datos para el envio*:
    *nombre:* ${data[0].name}
    *cedula:* ${data[0].identification}
    *direccion:* ${data[0].adress}
    *telefono:* ${data[0].number}
    *----------------------------------*
    *productos:*
    ${data[0].products.map(item =>
    `*----------------------------------*
    *Producto:* ${item.ProductName}
    *Especificaciones:* ${item.Description}
    *Tipo de paquete:* ${item.peso}
    *Valor unitario:* $${item.price}
    *Cantidad de productos:* ${item.quantity}
    `)}
    ----------------------------------
    *VALOR TOTAL DE LA ORDEN:* $${data[0].totalPrice}`

    //encodeUriComponent, encodes a string to send in url
    const url = `https://api.whatsapp.com/send?phone=573102834472&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  //Clear values function
  const clearStorage = () =>{
    setAllProducts([])
    setTotal(0)
    setCountProducts(0)
  }

  return (
    <>
    {/* Modal message (in final order) */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        id="Modal"
      >
        <Modal.Body id="modal-body">
         <img src={ModalImage} id="Modal-image"/>
         <Link to={"/"} onClick={() => clearStorage()}><Button variant="primary" id="modal-button">Regresar al inicio</Button></Link>
        </Modal.Body>
      </Modal>
    
    {/* Final order form */}
    <img src={PedidoVibe} id="PedidoVibe"/>
    <div className="Form-body">
        <p id="datos-envio"><span>Datos </span>{">"} Envio</p>
        <h3 id="form-tittle">Datos de tu pedido</h3>

        <Form>
          <Form.Text className="text-muted">Los datos solicitados se usaran con el fin de realizar el envio al domicilio.</Form.Text>
          <Form.Group className="mb-3">
              <Form.Label className="Form-label-text">Escribe tu nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre completo" className="input-form" onChange={handleChange1}/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label className="Form-label-text">Ingresa tu numero de documento</Form.Label>
              <Form.Control type="text" placeholder="Identificacion del remitente" className="input-form" onChange={handleChange2}/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label className="Form-label-text">Ingresa tu direccion de residencia</Form.Label>
              <Form.Control type="text" placeholder="Direccion" className="input-form" onChange={handleChange3}/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label className="Form-label-text">Numero de telefono</Form.Label>
              <Form.Control type="text" placeholder="Telefono" className="input-form" onChange={handleChange4}/>
          </Form.Group>

          <p id="Total-text">Sub total: ${Total}</p>

          <Button variant="primary" id="send-order" onClick={handleShow}>
              Enviar
          </Button>

          <p id="return">{"<"} Regresar</p>
        </Form>

    </div>
    <Footer/>
    
    </>
  )
}

export default Pedido