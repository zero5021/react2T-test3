import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {operador} from "../js/global";
import '../css/modalShow.css'

function ModalAlert() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <>
      

      <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          En este punto es cuando debes pagar el pedido.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAlert;