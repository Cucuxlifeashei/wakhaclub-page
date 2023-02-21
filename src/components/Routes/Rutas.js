import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from '../Navbar'
import Inicio from '../pages/Inicio';
import Ingresos from '../pages/Ingresos';
import Informacion from '../pages/Informacion';
import Contacto from '../pages/Contacto';
import Footer from '../Footer';
import Error404 from '../pages/Error404';


const Rutas = () => {
    return (
        <><Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/ingreso' element={<Ingresos />} />
                <Route path='/informacion' element={<Informacion/>} />
                <Route path='/contacto' element={<Contacto/>} />
                <Route path='*' element={<Error404/>} />
            </Routes>
            <Footer/>
            <Routes>
                
            </Routes>
        </Router></>
    );
};

export default Rutas;