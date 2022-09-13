import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import FormBuscar from './FormBuscar';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <header className="row menu col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light menu__navbar">
                    <div className="container-fluid">
                            <Link className="navbar-brand" to="/">
                                <img src="/../images/cr3aDly_logo.png" alt="logo" className="menu_logo" />
                            </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menu_li_inline">
                                <li className="nav-item"> 
                                    <Link  to="/promosycombos"><p> Promociones y Combos</p></Link>
                                </li>
                                <li className="nav-item"> 
                                    <Link  to="/"><p> Galería</p></Link>
                                </li>
                                <li className="nav-item"> 
                                    <Link  to="/personalizados"><p> Personalizados</p></Link>
                                </li>
                                <li className="nav-item"><FormBuscar contBuscar="Buscar productos" />
                                </li> 
                                <li className="nav-item"><CartWidget cant="0" /></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
export default NavBar;
