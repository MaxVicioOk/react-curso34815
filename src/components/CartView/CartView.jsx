import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context/cartContext'

export default function CartView() {
    const {cart, clear, removeItem, priceInCart} = useContext(cartContext)
    return (
        <div className='text-center' style={{minHeight: '52vh'}}>
            {cart.length === 0? <div className='m-5'>
                <h3 className=''>Carrito Vacío</h3>
                <Link to={"/"}>
                    <button className='btn btn-outline-dark m-5'>Volver a Productos</button>
                </Link>
            </div> : <>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody id="tabla-carrito">
                    {cart.map((producto)=>(
                        <tr key={producto.id}> 
                            <th scope="row">{producto.cantidad}</th>
                            <td>{producto.title}</td>
                            <td><img src={producto.thumbnail} style={{height: 100}} alt={producto.title}/></td>
                            <td>${producto.price*producto.cantidad}</td>
                            <td><button type="button" className="btn btn-secondary" onClick={()=>removeItem(producto.id)}>Quitar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='row justify-content-center'>
                <p className="col-4 fw-bolder lead text-decoration-underline">Total:</p>
                <div className="col-4 fw-bolder lead">${priceInCart()}</div>
            </div></>}
            {cart.length>0 && <button className='btn btn-danger my-3' onClick={clear}>Vaciar Carrito</button>}
        </div>
    )
}
