import React from 'react';
import Dropdown from '../Dropdown/Dropdown.jsx';

const ListaNavbar = () => {
    return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <Dropdown/>
            </ul>
    );
}

export default ListaNavbar;