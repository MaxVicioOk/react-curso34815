import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TraerPedido } from '../../Service/firestore'
import Loader from '../Loader/Loader'

export default function Pedido() {
    const [ orden, setOrden ] = useState(null)
    const { idPedido } = useParams()
    useEffect(()=>{
        TraerPedido(idPedido).then((res)=>{
            setOrden(res)
        })
    },[idPedido])
    function PrecioDelPedido (){
        let Total = 0
        const ItemsEnPedido = orden.item.arrayValue.values
        ItemsEnPedido.forEach((item)=>{
            Total += (item.mapValue.fields.price.integerValue*item.mapValue.fields.cantidad.integerValue)
        })
        return Total
    }
    return (
        <div className='text-center' style={{minHeight: '52vh'}}>
            <h2 className='my-5'>Detalle de la compra</h2>
            <div className='my-5'>El ID de su pedido es: <strong>{idPedido}</strong></div>
            {orden === null? <div className='d-flex justify-content-center mt-5 pt-5' style={{minHeight: '100vh'}}><Loader/></div> : <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody id="tabla-carrito">
                    {orden.item.arrayValue.values.map((producto)=>(
                        <tr key={producto.mapValue.fields.id.stringValue}> 
                            <th scope="row">{producto.mapValue.fields.cantidad.integerValue}</th>
                            <td><Link className='text-decoration-none' style={{color:"black"}} to={`/detalle/${producto.mapValue.fields.id.stringValue}`}>
                                    <strong>{producto.mapValue.fields.title.stringValue}</strong>
                                </Link></td>
                            <td><Link to={`/detalle/${producto.mapValue.fields.id.stringValue}`}>
                                    <img src={producto.mapValue.fields.thumbnail.stringValue} style={{height: 100}} alt={producto.mapValue.fields.title.stringValue}/>
                                </Link></td>
                            <td>${producto.mapValue.fields.price.integerValue*producto.mapValue.fields.cantidad.integerValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
            {orden !== null && <div className='row justify-content-center my-5'>
                <p className="col-4 fw-bolder lead text-decoration-underline">Total:</p>
                <div className="col-4 fw-bolder lead">${PrecioDelPedido()}</div>
            </div>}
        </div>
    )
}