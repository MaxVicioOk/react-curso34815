import React from 'react';

const Dropdown = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filtro por Categorías</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="index.html">Todos los Productos</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item filtro-categoria" info-categoria="Remeras" href="#!">Remeras</a></li>
                    <li><a className="dropdown-item filtro-categoria" info-categoria="Pantalones" href="#!">Panalones</a></li>
                </ul>
            </li>
    );
}

export default Dropdown;