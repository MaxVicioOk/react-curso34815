import React from 'react';
import Dropdown from '../Dropdown/Dropdown.jsx';

const ListaNavbar = () => {
    return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Quienes Somos</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">Contacto</a></li>
                <Dropdown/>
            </ul>
    );
}

export default ListaNavbar;