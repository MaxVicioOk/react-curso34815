const Productos = [
    {id: 1, title: "Remera León", price: 1300, thumbnail: "images/remera-leon.png", stock: 24, category: "Remeras"},
    {id: 2, title: "Remera Roja", price: 1090, thumbnail: "images/remera-roja.png", stock: 53, category: "Remeras"},
    {id: 3, title: "Pantalón Azul", price: 3430, thumbnail: "images/pantalon-azul.png", stock: 17, category: "Pantalones"},
    {id: 4, title: "Pantalón Gris", price: 4370, thumbnail: "images/pantalon-gris.png", stock: 32, category: "Pantalones"}
]

export default function ItemList() {
    return new Promise ( (res) =>{
        setTimeout(() => {
            res(Productos);
        }, 2000);
    });
}