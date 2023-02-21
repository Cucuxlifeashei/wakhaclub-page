import React from 'react';
import iniciocss from '../../styles/Inicio.css'
import logo from '../../assets/wakhalogo.png';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <div>
            <div className='container-inicio'>
                <div className='container-mobile'>
                    <div className='container-logo'>
                    <img  src={logo}/>
                    </div>
                    <div className='container-text'>
                        <p> Noches Unicas.</p>
                    </div>
                    <div className='container-boton'>
                    <Link to="/ingreso">
                      <button>
                        INGRESOS
                      </button>
                    </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Inicio;