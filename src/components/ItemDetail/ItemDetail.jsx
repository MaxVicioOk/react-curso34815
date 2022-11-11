import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({id, thumbnail, title, price, description, stock}) {
  return (
    <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={`${thumbnail}`} alt={title} /></div>
        <div className="col-md-6">
          <div className="small mb-1">SKU: BST-{id}</div>
          <h1 className="display-5 fw-bolder">{title}</h1>
          <div className="fs-5 mb-5">
            <span className="text-decoration-line-through">${price+250}</span>
            <span>${price}</span>
          </div>
          <p className="lead">{description}</p>
          <div className="d-flex">
            <ItemCount max={stock}/>
          </div>
        </div>
      </div>
  )
}