// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAnalytics } from "firebase/analytics";
import { query, where, collection, addDoc, getDoc, getDocs, doc, increment, updateDoc, getFirestore, orderBy, limit } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKNBVw669XyKS-YCEXXbjoR9DliS612aE",
    authDomain: "cr3adly2.firebaseapp.com",
    projectId: "cr3adly2",
    storageBucket: "cr3adly2.appspot.com",
    messagingSenderId: "286850202248",
    appId: "1:286850202248:web:ffb34a3490c22ea303bd3d"
  };

async function cargarBaseDeDatos() {
    const promise = await fetch("/data/productos.json")
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"),{
          //  id: producto.id, 
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

const addOrder = async (data) => {
    const order = await addDoc(collection(db, "ordenes"), {
        buyer: data.buyer,
        items:data.items,
        day: data.day,
        total: data.total
    })
    return order;
}

const getProducto = async (id) =>{
    const documento = await getDoc(doc(db, "productos", id));
    actualizarDestacados(documento.id);
    const producto = {id:documento.id, ...documento.data()};
    return producto
}
const getProductos = async () =>{
    const documentos = await getDocs(collection(db, "productos"));
    const productos = documentos.docs.map((doc) => doc={ id: doc.id, ...doc.data() })
    return productos
}
const getProductosCategoria = async (categoria) =>{
    const documentos = await getDocs(query(collection(db,"productos"),where('categoria','==',categoria)));
    const productos = documentos.docs.map((doc) => doc={ id: doc.id, ...doc.data() })
    return productos
}
const getProductosFiltro = async (filtro) =>{
    const documentos = await getDocs(query(collection(db,"productos"),where('nombre','array-contains',filtro)));
    console.log(documentos)
    const productos = documentos.docs.map((doc) => doc={ id: doc.id, ...doc.data() })
    return productos
}
const actualizarStock = async (items) => {
    items.forEach(async i => {
       await updateDoc(doc(db, "productos",i.id),{
            stock: increment((-1)*i.amount)
        }).then(function(){console.log("stock actualizado")})
    })
}
const actualizarDestacados = async (id) => {
    await updateDoc(doc(db, "productos",id),{
        obs: increment(1)
    }).then(function(){console.log("valor observado actualizado")})
}
const getProductosDestacados = async () => {
    const documentos = await getDocs(query(collection(db,"productos"),orderBy("obs", "desc"), limit(3)));
    const productos = documentos.docs.map((doc) => doc={ id: doc.id, ...doc.data() })
    return productos
}
export {db,app,cargarBaseDeDatos, getProducto, getProductos, getProductosCategoria, getProductosFiltro, addOrder, actualizarStock, getProductosDestacados}