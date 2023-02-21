import React from 'react';
import Error404css from '../../styles/Error404.css'
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (

        <div className='container-404'>
          <div className='tittle-404'>
            <h3> ERROR 404</h3>
          </div>
          <div className='no-exist'>
            <p> Esta pagina no existe.</p>
          </div>
          <div className=''>
          <Link to="/">
            <button className='btn-404'>
              VOLVER AL INICIO
            </button>
          </Link>
          </div>

        </div>
      );
};

export default Error404;