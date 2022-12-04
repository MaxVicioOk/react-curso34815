import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc, orderBy } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQ1EW8XkQPiIY56VJg-PIxaDSyp1-_a04",
  authDomain: "proyectoreact-ec6b5.firebaseapp.com",
  projectId: "proyectoreact-ec6b5",
  storageBucket: "proyectoreact-ec6b5.appspot.com",
  messagingSenderId: "739126613825",
  appId: "1:739126613825:web:3dd83a822f2246706833c0",
  measurementId: "G-KJ61E3H0PL"
};

const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
const BD = getFirestore(app)

export default async function GetProducts(categoryParam){
  const colecProductosRef = collection(BD, "productos")
  if (categoryParam === undefined){
    const q = query(colecProductosRef, orderBy("posicion"))
    const docSnap = await getDocs(q)
    const docData = docSnap.docs.map((doc)=>{
    return {
      ...doc.data(),
      id: doc.id,
    }
  })
  return docData
  }else{
    const queryCat = query(colecProductosRef, where("category", "==", categoryParam))
    const docSnap = await getDocs(queryCat)
    const docData = docSnap.docs.map((doc)=>{
    return {
      ...doc.data(),
      id: doc.id,
    }
  })
  return docData
  }
}

export async function SingleProduct(idParam){
  const docRef = doc(BD, "productos", idParam)
  const docSnap = await getDoc(docRef)
  return {
    ...docSnap.data(),
    id: docSnap.id
  }
}

export async function createOrder(orden){
  const collectionRef = collection(BD, "pedidos")
  const docOrden = await addDoc(collectionRef, orden)
  return(docOrden.id)
}

export async function TraerPedido(idParam){
  const docRef = doc(BD, "pedidos", idParam)
  const docSnap = await getDoc(docRef)
  const pedido = docSnap._document.data.value.mapValue.fields
  return(pedido)
}
/* async function exportArrayToFirestore(){
  const Productos = [
    {id: 1, title: "Remera León", price: 1350, thumbnail: "/images/remera-leon.png", stock: 24, category: "Remeras", description: "Remera oscura de tela SARASA, con figura de león estampada"},
    {id: 2, title: "Remera Roja", price: 1090, discount: 10, thumbnail: "/images/remera-roja.png", stock: 53, category: "Remeras", description: "Remera colorada de tela RECONTRA-SARASA, lisa (sin estampado)"},
    {id: 3, title: "Pantalón Azul", price: 3430, thumbnail: "/images/pantalon-azul.png", stock: 17, category: "Pantalones", description: "Pantalón de jean color azul y no se me ocurre que más poner para estirar la descripción"},
    {id: 4, title: "Pantalón Gris", price: 3970, discount: 15, thumbnail: "/images/pantalon-gris.png", stock: 32, category: "Pantalones", description: "Pantalón de vestir, super cheto pero que se rompe si lo usas para jugar a la pelota"}
  ]
  const collectionRef = collection(BD, "productos")
  for ( let item of Productos){
    item.posicion = item.id
    delete (item.id)
    let docOrden = await addDoc(collectionRef, item)
    console.log("producto subido. ID: " + docOrden.id)
  }
} */