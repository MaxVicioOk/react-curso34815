import {useState, useEffect} from 'react'
import Item from './Item'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(()=>{
    ItemList(categoryId).then((res)=>{
      setProducts(res)}
    )
  },[categoryId])

  return (
    <section className="py-5" style={{minHeight: '100vh'}}>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" id="seccion-cards">
          {products.map(({id, thumbnail, title, price, category, stock})=>{
            return(
              <Item
                key={id}
                id={id}
                thumbnail={thumbnail}
                title={title}
                price={price}
                category={category}
                stock={stock}/>
              )
            }
          )}
        </div>
      </div>
    </section>      
  )
}