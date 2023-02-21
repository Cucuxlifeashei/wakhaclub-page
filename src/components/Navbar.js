import React, { useState } from 'react';
import '../styles/Navbar.css';
import wakhalogo from '../assets/wakhalogo.png'
import {ImCross} from 'react-icons/im';
import { Link , NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  }

  const handleLinkClick = () => {
    setShowLinks(false);
  }

  return (
    <div className={ showLinks ? "navbar hidden" : "navbar"} style={{ position: showLinks ? 'fixed' : 'static', zIndex: showLinks ? '100' : '0' }}>
      <div className="navbar-logo">
        <Link to="/"><img src={wakhalogo}/></Link>
      </div>
      <ul className={showLinks ? "navbar-links container-items show-links" : "navbar-links"}>
        <li className='itemlist'><NavLink to="/" onClick={handleLinkClick}>INICIO</NavLink ></li>
        <li className='itemlist'><NavLink to ="/ingreso" onClick={handleLinkClick}>INGRESOS</NavLink></li>
        <li className='itemlist'><NavLink to="/informacion" onClick={handleLinkClick}>INFORMACION</NavLink></li>
        <li className='itemlist'><NavLink to="/contacto" onClick={handleLinkClick}>CONTACTO</NavLink></li>
      </ul>
      <div className={showLinks ? "none" : "navbar-burger"} onClick={handleShowLinks}>
        <svg className={showLinks ? "none" : "navbar-burger"} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white"  viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
      <div className={showLinks ? "container-cross" : "none"}>
        <ImCross className={showLinks ? "cross" : "none"} onClick={handleLinkClick}/>
      </div>
    </div>
  );
}

export default Navbar;