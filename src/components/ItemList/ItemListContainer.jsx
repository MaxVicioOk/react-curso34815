import {useState, useEffect} from 'react'
import GetProducts from '../../Service/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loader from '../Loader/Loader'

export default function ItemListContainer() {
  const [products, setProducts] = useState(null)
  const { categoryId } = useParams()

  useEffect(()=>{
    GetProducts(categoryId).then((res)=>{
      setProducts(res)
    console.log(res)}
    )
  },[categoryId])
  if(products === null){
    return <section className="py-5" style={{minHeight: '100vh'}}>
        <div className='d-flex justify-content-center pt-5 mt-5'> <Loader/> </div>
      </section>
  }else if (products.length === 0){
    return <section className="py-5" style={{minHeight: '52vh'}}>
        <h2 className='d-flex justify-content-center pt-5 mt-5'>Categoría Inexistente</h2>
      </section>
  }
  else{
    return (
      <ItemList products={products}/>  
      )
    }
}