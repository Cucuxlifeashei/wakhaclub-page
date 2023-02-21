import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai'
import logo from '../assets/wakhalogo.png';
import logo2 from '../assets/logo-ekinoxio.png'
import Footercss from '../styles/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <><div className='container-footer'>
            <div className='container-contacto'>
                <h3>Contacto</h3>
                <h6>Gmail:</h6>
                <p>wakhacluboficial@gmail.com</p>
                <h6>Numero:</h6>
                <p>+54 9 11 3084-2675</p>
                <h6>Instagram:</h6>
                <p>@wakhaclub</p>
            </div>
            <div className='container-social'>
                <div className='contact-social'>
                    <p>
                        <Link className='list' to="https://www.instagram.com/krugfest_/" target="_blank">Contactar WhatsApp</Link>
                    </p>

                    <div className='container-icon'>
                        <Link to="https://www.instagram.com/wakha.club/" target="_blank">
                            <AiOutlineInstagram className='icon-ig' />
                        </Link>
                        
                    </div>
                    
                    <p>
                        <Link className='list' to="https://www.instagram.com/krugfest_/" target="_blank">Contactar Instagram</Link>
                    </p>
                </div>
                <div className='copyright'>
                    <p> WAKHA Copyright ©️ 2023 Todos Los Derechos Reservados</p>
                </div>
            </div>

            <div className='container-ubication-logo'>
                <h3>Informacion</h3>
                <h6>Ubicacion:</h6>
                <p>📍 Av. Rivadavia 10919, Liniers CABA</p>
                <div className='footer-logo'>
                    <img className='logo' src={logo} />
                    <img className='logo2' src={logo2} />
                </div>

            </div>
        </div>
        
        <div className='container-footer-responsive'>
                <div className='contact-ubication'>
                    <div className='container-contacto-responsive'>
                        <h3>CONTACTO</h3>
                        <h6>Gmail:</h6>
                        <p>wakhacluboficial@gmail.com</p>
                        <h6>Numero:</h6>
                        <p>+54 9 11 3084-2675</p>
                        <h6>Instagram:</h6>
                        <p>@wakhaclub</p>
                    </div>
                    <div className='container-ubication-responsive'>
                        <h3>UBICACION</h3>
                        <p>📍 Av. Rivadavia 10919, Liniers CABA</p>
                    </div>
                    <div className='copyright-responsive'>
                        <p> WAKHA Copyright ©️ 2023 - Todos Los Derechos Reservados</p>
                    </div>
                </div>

                
            </div></>
    );
};

export default Footer;