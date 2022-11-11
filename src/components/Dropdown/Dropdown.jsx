import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filtro por Categorías</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to="/" className="dropdown-item" href="index.html">Todos los Productos</Link></li>
                    <li><Link to="/category/Remeras" className="dropdown-item filtro-categoria" info-categoria="Remeras">Remeras</Link></li>
                    <li><Link to="/category/Pantalones" className="dropdown-item filtro-categoria" info-categoria="Pantalones">Panalones</Link></li>
                </ul>
            </li>
    );
}

export default Dropdown;