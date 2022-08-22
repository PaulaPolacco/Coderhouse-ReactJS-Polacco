import React from 'react';
import './NavBar.css';
import FormBuscar from './FormBuscar';

const NavBar = () => {
    return (
        <div>
            <header className="row menu col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light menu__navbar">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <img src={require("../images/cr3aDly_logo.png")} alt="logo" className="menu_logo" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menu_li_inline">
                        <li className="nav-item">
                            <a className="nav-link" href="pages/promos_combos.html">
                            Promociones y Combos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link active"
                            aria-current="page"
                            href="index.html"
                            >
                            Galería
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/personalizados.html">
                            Personalizados
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/contacto.html">
                            Contacto
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/nuevas_propuestas.html">
                            Nuevas Propuestas
                            </a>
                        </li>
                        </ul>
                        <FormBuscar contBuscar="Buscar productos" />
                    </div>
                    </div>
                </nav>
            </header>
            
        </div>
    );
}

export default NavBar;
