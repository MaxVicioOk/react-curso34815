import React from 'react'
import ItemDetail from './ItemDetail'
import { SingleItem } from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([])
  const { id } = useParams();
  useEffect(()=>{
    SingleItem(id).then((res)=>{
      setProduct(res)}
    )
  },[])
  return (
  <section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
      <ItemDetail
        key={product.id}
        id={product.id}
        thumbnail={product.thumbnail}
        title={product.title}
        price={product.price}
        category={product.category}
        stock={product.stock}
        description={product.description}
      />
    </div>
  </section>
  )
}