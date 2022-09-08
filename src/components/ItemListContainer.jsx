import React from 'react';
import ItemCounter from './ItemCounter';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';


const ItemListContainer = () => {
    const onAdd = (count) => {console.log(`Se han seleccionado ${count} productos`)}
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
