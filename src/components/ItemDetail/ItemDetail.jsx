import {useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { cartContext } from '../Context/cartContext'

export default function ItemDetail({product}) {
  
  const { addToCart } = useContext(cartContext) // llamo al contexto el contexto
  
  let [enCarrito, setEnCarrito] = useState(false)
  
  const {id, thumbnail, title, price, description, stock} = product

  function GetPage(p){
    if (4 > id  && p === "+"){
      return id+1
    }else if(id > 1  && p === "-"){
      return id-1
    }else{return id}
  }
  function agregarAlCarrito(cantidad){
    setEnCarrito(product)
    addToCart(product, cantidad) // uso el contexto
  }
  return (
    <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={thumbnail} alt={title} /></div>
        <div className="col-md-6">
          <div className="small mb-1">SKU: BST-{id}</div>
          <h1 className="display-5 fw-bolder">{title}</h1>
          <div className="fs-5 mb-5">
            <span>${price}</span>
          </div>
          <p className="lead">{description}</p>
          <div className="d-flex">
            {enCarrito !== product?
            <ItemCount agregarContador={agregarAlCarrito} max={stock}/>
            :
            <Link to="/carrito" className="btn btn-outline-dark flex-shrink-0 mx-3" type="button">
              <i className="bi-cart-fill me-1" />Ver Carrito
            </Link>}
          </div>
        </div>
        <div className='row justify-content-center'>
          <Link className="btn col-2 btn-outline-dark m-3" to={`/detalle/${GetPage("-")}`}>Anterior</Link>
          <Link className="btn col-2 btn-outline-dark m-3" to={`/detalle/${GetPage("+")}`}>Siguiente</Link>
        </div>
      </div>
  )
}