import React from 'react';
import { useState } from 'react';
import Tarjetacss from "../styles/Tarjeta.css";
import RenderInformacion from "./RenderInformacion";
import IconEntrada from "../assets/iconentrada.png";
import IconVip from "../assets/iconvip.png";
import IconVoucher from "../assets/iconvoucher.png";


const Tarjeta = () => {

  const [opcion, setOpcion] = useState("entradas");
  const [entradasMarcadas, setEntradasMarcadas] = useState(false);
  const [vipMarcadas, setVipMarcadas] = useState(false);
  const [voucherMarcadas, setVoucherMarcadas] = useState(false);

  const handleEntradasClick = () => {
    setOpcion("entradas");
    setEntradasMarcadas(true);
    setVipMarcadas(false);
    setVoucherMarcadas(false);
    setOpcion("entradas")
  }

  const handleVipClick = () => {
    setOpcion("mesasVips");
    setEntradasMarcadas(false);
    setVipMarcadas(true);
    setVoucherMarcadas(false);
  }

  const handleVoucherClick = () => {
    setOpcion("Voucher");
    setEntradasMarcadas(false);
    setVipMarcadas(false);
    setVoucherMarcadas(true);
  }

  return (
    <div className='container-information'>

      <><div className='container-options'>
        <ul className='list-options'>
          <li className={entradasMarcadas ? 'marked' : 'options'} onClick={handleEntradasClick} > <img className='icons' src={IconEntrada}/>ENTRADAS</li>
          <li className={vipMarcadas ? 'marked' : 'options'} onClick={handleVipClick} > <img className='icons' src={IconVip}/> MESAS VIP</li>
          <li className={voucherMarcadas ? 'marked' : 'options'} onClick={handleVoucherClick} > <img  className='icons' src={IconVoucher}/>VOUCHERS</li>
          
        </ul>

      </div><div >
          <RenderInformacion opcion={opcion} />
        </div></>
    </div>
  );
};

export default Tarjeta;

