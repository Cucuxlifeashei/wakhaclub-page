import React from 'react';
import Contactocss from '../../styles/Contacto.css'
import Hero from '../../assets/Hero.jpg'
import Form from '../Form';
import Map from '../Map';
import { Link } from 'react-router-dom';

const Contacto = () => {
    return (
        <div>
            <div className='hero'>
                <h4 className='tittle-hero'>¿Como te podemos ayudar?</h4>
                <p className='contact-hero'>Contactanos</p>
            </div>
            <div className='contact'>
                <div className='form'>
                    <Form></Form>
                </div>
                <div className='buttons'>
                <Link to="https://wa.me/message/TD6HSUQO2WI2C1" target="_blank">
                    <button className="button-whatsapp">WhatsApp</button>
                </Link>
                <Link to="https://www.instagram.com/wakha.club/" target="_blank">
                    <button className='button-instagram'>Instagram</button>
                </Link>
                </div>
                <div className='container-map'>
                    <div className='container-text-map'>
                        <h3 className='text-map'> ¿Donde nos encontramos?</h3>
                    </div>
                    <Map></Map>
                </div>
            </div>
           
        </div>
    );
};

export default Contacto;