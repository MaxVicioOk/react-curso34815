import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore"

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
  const docSnap = await getDocs(colecProductosRef)
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

export async function createOrder(){
  console.log("ok")
}