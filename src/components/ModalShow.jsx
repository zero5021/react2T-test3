import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {operador} from "../js/global";
import '../css/modalShow.css'

function ModalShow({id, listProduct, change, setChange, setTotalPrice, quantity, name}) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  
  const quantytiProduct = (option) => {
    setTotalPrice(operador(option, listProduct, id));
    setChange(!change);
    handleClose()
  };

  console.log(id)
  return (
    <>
      

      <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Eliminar pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {quantity>1? `Desea eliminar sus pizzas de ${name}`:`Desea eliminar su pizza de ${name}`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => quantytiProduct("remove")}>Aceptar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalShow;