import React from 'react';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

   useEffect(()=>{
       const traerProductos = async () => {
           try {
               const resp = await fetch("/data/productos.json");
               const data = await resp.json();
               setProductos(data)
           } catch (error) {
               console.log(error);
           }
       };
       traerProductos();
   }, []);
  // console.log(productos)
    return (
        <div>
            <h1>Listado de Productos en Galería</h1>

            <ItemList list = {productos} />
            
        </div>
    );
}

export default ItemListContainer;
