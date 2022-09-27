import React from 'react';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const {categoria} = useParams();
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
        const traerProductosFiltro = async (categoria) => {
           try {
               const resp = await fetch("/data/productos.json");
               const data = await resp.json();
               let prod = data.filter(prod => prod.categoria.includes(categoria));
               setProductos(prod)
           } catch (error) {
               console.log(error);
           }
       };
       (categoria) ? traerProductosFiltro(categoria):  traerProductos();
   }, [productos]);   
  // console.log(productos)
    return (
        <div>
            {(categoria) ? <h2>Listado de Productos por {categoria}</h2>: <h2>Listado de Productos en Galería</h2>}
            

            <ItemList list = {productos} />
            
        </div>
    );
}

export default ItemListContainer;
