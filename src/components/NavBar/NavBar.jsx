import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import Modal from './Modal';
import ListaNavBar from './ListaNavBar';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
              <Link className="navbar-brand" to="/">
                <h2>camelPrenda</h2>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ListaNavBar/>
                <div className="d-flex">
                  <CartWidget/>
                  <Modal/>
                </div>
              </div>
            </div>
          </nav>
        );
}

export default Navbar;