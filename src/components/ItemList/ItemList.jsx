const Productos = [
    {id: 1, title: "Remera León", price: 1300, thumbnail: "/images/remera-leon.png", stock: 24, category: "Remeras", description: "Remera oscura de tela SARASA, con figura de león estampada"},
    {id: 2, title: "Remera Roja", price: 1090, thumbnail: "/images/remera-roja.png", stock: 53, category: "Remeras", description: "Remera colorada de tela RECONTRA-SARASA, lisa (sin estampado)"},
    {id: 3, title: "Pantalón Azul", price: 3430, thumbnail: "/images/pantalon-azul.png", stock: 17, category: "Pantalones", description: "Pantalón de jean color azul y no se me ocurre que más poner para estirar la descripción"},
    {id: 4, title: "Pantalón Gris", price: 4370, thumbnail: "/images/pantalon-gris.png", stock: 32, category: "Pantalones", description: "Pantalón de vestir, super cheto pero que se rompe si lo usas para jugar a la pelota"}
]

export default function ItemList(categoryParam) {
    return new Promise ( (res) =>{
        if (categoryParam === undefined){
            setTimeout(() => {
                res(Productos);
            }, 2000);
        } else {
            setTimeout(() => {
                let filtrados = Productos.filter((item) => item.category === categoryParam)
                res(filtrados);
            }, 2000);
        } 
    });
}

export function SingleItem(idParam) {
    return new Promise ((resolve, rejected) => {
        let producto = Productos.find((p) => p.id === Number(idParam))
        if (producto === undefined) rejected("Producto no existe")
        setTimeout(() => {
            resolve(producto)
        }, 2000);
    })
}