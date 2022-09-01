import React from 'react';
//import UseItemListContainer from '../hooks/UseItemListContainer';
import ItemCounter from './ItemCounter';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';


const ItemListContainer = () => {
    const onAdd = (count) => {console.log(`Se han seleccionado ${count} productos`)}
   // const {productos}= UseItemListContainer();
   const [productos, setProductos] = useState([]);

   useEffect(()=>{
       const traerProductos = async () => {
           try {
               const resp = await fetch("https://cr3adly.000webhostapp.com/productos.json");
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
            <ItemCounter initial = {1} stock = {20} onAdd = {onAdd}/>
            <ItemList list = {productos} />
            
        </div>
    );
}

export default ItemListContainer;
