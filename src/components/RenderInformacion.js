import React, { useState } from 'react';
import RenderInformacioncss from '../styles/RenderInformacion.css';
import { Entradas, MesasVips, Voucher } from '../db';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { animateScroll as scroll } from 'react-scroll';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import InformacionModal from '../components/InformacionModal.js'
import Modal from 'react-bootstrap/Modal';

const RenderInformacion = ({ opcion }) => {
  switch (opcion) {
    case "entradas":
      return (
        <div className='cards'>
          {Entradas.map((entrada) => (
            <Card className='card border-0' key={entrada.id} style={{ width: '14rem' }}>
              <Card.Img className='card-image' variant="top" src={entrada.img} />
              <Card.Body>
                <h2 className='card-title'>{entrada.nombre}</h2>
                <Card.Text className='card-price'>
                  ${entrada.valor} ARS
                </Card.Text>
                <div className='container-button'>
                  <InformacionModal title={entrada.nombre} entradas={entrada.entradas} excedentes={entrada.excedentes}  consumo={entrada.consumo} seña={entrada.seña} precintos={entrada.precintos}/>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      );
      case "mesasVips":
        return (
          <div className='cards'>
            {MesasVips.map((mesaVip) => (
              <Card className='card border-0' key={mesaVip.id} style={{ width: '14rem' }}>
                <Card.Img className='card-image' variant="top" src={mesaVip.img} />
                <Card.Body>
                  <h2 className='card-title'>{mesaVip.nombre}</h2>
                  <Card.Text className='card-price'>
                    ${mesaVip.valor} ARS
                  </Card.Text>
                  <div className='container-button'>
                  <InformacionModal title={mesaVip.nombre} entradas={mesaVip.entradas} excedentes={mesaVip.excedentes} consumo={mesaVip.consumo} seña={mesaVip.seña} precintos={mesaVip.precintos} />
                </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        );
      case "Voucher":
        return (
          <><div className='cards'>
            {Voucher.map((voucher) => (
              <><Card className='card border-0' key={voucher.id} style={{ width: '14rem' }}>
                <Card.Img className='card-image' variant="top" src={voucher.img} />
                <Card.Body>
                  <h2 className='card-title'>{voucher.nombre}</h2>
                  <Card.Text className='card-price'>
                    ${voucher.valor} ARS
                  </Card.Text>
                  <div className='container-button'>
                  <InformacionModal title={voucher.nombre} entradas={voucher.entradas} excedentes={voucher.excedentes} consumo={voucher.consumo} seña={voucher.seña} precintos={voucher.precintos} />
                </div>
                </Card.Body>
              </Card></>
            ))}
          </div></>
        );
      default:
        return null;
    }
};
export default RenderInformacion;