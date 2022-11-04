import React from 'react'
import ItemCount from './ItemCount'

export default function Item({id, title, thumbnail, price, stock}) {
  return (
    <div className="col mb-5" key={id}>
      <div className="card h-100">
        <img className="card-img-top" src={thumbnail} alt={title} />        
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            ${price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <ItemCount/>
            <a className="btn btn-outline-dark mt-3 px-4" id={id} href="#">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}