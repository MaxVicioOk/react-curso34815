import React from 'react';

const CartWidget = () => {
    return (
            <button className="btn btn-outline-dark" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="bi-cart-fill me-1" />
                Carrito
                <span className="badge bg-dark text-white ms-1 rounded-pill" id="total-carrito">0</span>
            </button>
    );
}

export default CartWidget;