// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAnalytics } from "firebase/analytics";
import { collection, addDoc, getDoc, getDocs, doc, deleteDoc, updateDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,  
  authDomain: "cr3adly-ecommerce.firebaseapp.com",
  projectId: "cr3adly-ecommerce",
  storageBucket: "cr3adly-ecommerce.appspot.com",
  messagingSenderId: "688170134164",
  appId: "1:688170134164:web:193261bbb496c8e488a281",
  measurementId: "G-WMNPS7PEGP"
};

async function cargarBaseDeDatos() {
    const promise = await fetch("/data/productos.json")
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"),{
            id: producto.id, 
            nombre:producto.nombre, 
            precio: producto.precio,
            tipo: producto.tipo,
            stock: producto.stock,
            obs: producto.obs,
            img: producto.img,
            categoria: producto.categoria
        })
    });

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

const getProducto = async (id) =>{
    const producto = await getDoc(doc(db, "productos", id));
    return producto
}
const getProductos = async () =>{
    const productos = await getDocs(collection(db, "productos"));
    return productos
}

export {db,app,cargarBaseDeDatos, getProducto, getProductos}