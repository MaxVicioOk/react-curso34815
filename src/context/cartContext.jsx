import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({children}){
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrito')) ?? [])
    
    function addToCart(producto, cantidad){
        let alreadyInCart = cart.findIndex((item)=>(item.id === producto.id))
        let sideCart = [...cart]; // armo un carro paralelo para poder manejarlo
        
        if (alreadyInCart !== -1){
            sideCart[alreadyInCart].cantidad += cantidad
            setCart(sideCart)
        }else{
            producto.cantidad = cantidad;
            sideCart.push(producto) // para subir producto y cantidad al carrito paralelo, primero agrego la propiedad y despues lo asigno
            /* sideCart.push(...producto, cantidad) */ // preguntar al profe, este no funciona 
            setCart(sideCart); // seteo el cart con el contenido del carro paralelo
        }
        localStorage.setItem("carrito", JSON.stringify(sideCart))
    }
    function clear(){
        setCart([])
        localStorage.setItem("carrito", JSON.stringify([]))
    }
    function removeItem(idParam){
        const sideCart = [...cart];
        const i = sideCart.findIndex((producto) => producto.id === idParam)
        if (i !== -1) sideCart.splice(i, 1)
        setCart(sideCart)
        localStorage.setItem("carrito", JSON.stringify(sideCart))
    }
    function priceInCart(){
        let total = 0;
        cart.forEach( (producto) => (total = total + (producto.price*producto.cantidad)))
        return total;
    }
    function itemsInCart(){
        let total = 0;
        cart.forEach( (producto) => (total = total + producto.cantidad))
        return total;
    }
    const value={
        cart,
        addToCart,
        itemsInCart,
        clear,
        removeItem,
        priceInCart
    }
    return(
        <cartContext.Provider value={ value }>
            {children}
        </cartContext.Provider>
    )
}