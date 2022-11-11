import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown.jsx';

const ListaNavbar = () => {
    return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Quienes Somos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Contacto</Link></li>
                <Dropdown/>
            </ul>
    );
}

export default ListaNavbar;