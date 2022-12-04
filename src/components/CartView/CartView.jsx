import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'
import { createOrder } from '../../Service/firestore'
import CartForm from './CartForm'
import swal from 'sweetalert'

export default function CartView() {
    const {cart, clear, removeItem, priceInCart} = useContext(cartContext)
    const navigate = useNavigate()
    async function finalizarCompra(data){
        let orden = {buyer: data, item: cart, date: new Date(), total: priceInCart()}
        const idDeOrden = await createOrder(orden)
        navigate(`/pedido/${idDeOrden}`)
        clear()
        swal({
            icon: 'success',
            title: 'PEDIDO COMPLETADO CON ÉXITO',
            text: 'Gracias por su compra',
        })
    }
    return (
        <div className='text-center' style={{minHeight: '52vh'}}>
            {cart.length === 0? <div className='m-5'>
                <h3>Carrito Vacío</h3>
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
                            <td><Link className='text-decoration-none' style={{color:"black"}} to={`/detalle/${producto.id}`}><strong>{producto.title}</strong></Link></td>
                            <td><Link to={`/detalle/${producto.id}`}><img src={producto.thumbnail} style={{height: 100}} alt={producto.title}/></Link></td>
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
            {cart.length>0 && <CartForm finalizarCompra={finalizarCompra} clear={clear}/>}
        </div>
    )
}
