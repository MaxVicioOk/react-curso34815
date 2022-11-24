import {useState, useEffect} from 'react'
import GetProducts from '../../data/database'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loader from '../Loader/Loader'

export default function ItemListContainer() {
  const [products, setProducts] = useState(null)
  const { categoryId } = useParams()

  useEffect(()=>{
    GetProducts(categoryId).then((res)=>{
      setProducts(res)}
    )
  },[categoryId])
  if(products === null){
    return <section className="py-5" style={{minHeight: '100vh'}}>
        <div className='d-flex justify-content-center pt-5 mt-5'> <Loader/> </div>
      </section>
  }else{
    return (
      <ItemList products={products}/>  
      )
    }
}