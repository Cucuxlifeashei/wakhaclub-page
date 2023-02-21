import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Entradas, MesasVips, Voucher } from '../db';
import Modalcss from '../styles/Modal.css';
import InformacionModalCss from '../styles/InformacionModal.css';
import { Link } from 'react-router-dom';

const InformacionModal = ({ title, entradas, consumo, excedentes, seña , precintos }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn btn-dark' onClick={handleShow}>
        Más información
      </Button>

      <Modal className='container-modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <h2 className='tittle-modal'>{title}</h2>
        </Modal.Header>
        <Modal.Body className='info'>{entradas}</Modal.Body>
        <Modal.Body className='info'>{consumo}</Modal.Body>
        <Modal.Body className='info'>{seña}</Modal.Body>
        <Modal.Body className='info'>{precintos}</Modal.Body>
        <Modal.Body className='info'>{excedentes}</Modal.Body>
        <Modal.Footer>
          <Link to="https://wa.me/message/TD6HSUQO2WI2C1" target="_blank"><button className='button-modal' variant="secondary">Reservar Ahora!</button></Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InformacionModal;