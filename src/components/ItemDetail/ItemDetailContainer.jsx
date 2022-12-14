import React from 'react'
import ItemDetail from './ItemDetail'
import GetProducts, { SingleProduct } from '../../Service/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [productos, setProductos] = useState([])
  const { id } = useParams();
  useEffect(()=>{
    SingleProduct(id).then((res)=>{
      setProduct(res)}
    )
  },[id])
  useEffect(() => {
    GetProducts().then((items) =>{
      setProductos(items)
    });
  }, []);
  return (
  <section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
    {product === null? <div className='d-flex justify-content-center mt-5 pt-5' style={{minHeight: '100vh'}}> <Loader/> </div> : <ItemDetail product={product} productos={productos}/>}
    </div>
  </section>
  )
}