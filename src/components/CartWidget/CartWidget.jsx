import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';

const CartWidget = () => {
    const context = useContext(cartContext)
    return (
        <Link to={"/carrito"}>
        <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1" />
            Carrito
            {context.itemsInCart() !== 0 && <span className="badge bg-dark text-white ms-1 rounded-pill" id="total-carrito">{context.itemsInCart()}</span>}
        </button>
        </Link>
    );
}

export default CartWidget;