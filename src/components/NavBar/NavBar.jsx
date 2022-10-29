import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import Modal from './Modal';
import ListaNavBar from './ListaNavBar';

const Navbar = () => {
    return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
              <a className="navbar-brand" href="index.html">camelPrenda</a>
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