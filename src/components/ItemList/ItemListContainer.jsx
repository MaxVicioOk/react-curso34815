import {useState, useEffect} from 'react'
import Item from './Item'
import ItemList from './ItemList'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    ItemList().then((res)=>{
      setProducts(res)}
    )
  },[])

  return (
    <>
      {products.map(({id, thumbnail, title, price, category, stock})=>{
        return(
          <Item
            key={id}
            thumbnail={thumbnail}
            title={title}
            price={price}
            category={category}
            stock={stock}/>
          )
        }
      )}
    </>
  )
}