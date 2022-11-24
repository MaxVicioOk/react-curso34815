import React from 'react'
import ItemDetail from './ItemDetail'
import { SingleProduct } from '../../data/database'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const { id } = useParams();
  useEffect(()=>{
    SingleProduct(id).then((res)=>{
      setProduct(res)}
    )
  },[id])
  return (
  <section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
    {product === null? <div className='d-flex justify-content-center mt-5 pt-5' style={{minHeight: '100vh'}}> <Loader/> </div> : <ItemDetail product={product}/>}
    </div>
  </section>
  )
}