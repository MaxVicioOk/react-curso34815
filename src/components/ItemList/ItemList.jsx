import React from 'react'
import Item from './Item'

export default function ItemList(props) {
    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" id="seccion-cards">
            {props.products.map((product)=>{
                return(
                <Item key={product.id} product={product}/>
                )
            })}
            </div>
        </div>
        </section>     
    )
}
