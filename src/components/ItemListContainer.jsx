import React from 'react';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosCategoria, getProductosFiltro, getProductosDestacados } from './firebase/firebase';

const ItemListContainer = () => {
    const { categoria, filtro, destacados } = useParams();
    const [productos, setProductos] = useState([]);
    const traerProductos = async () => {
        try {
            const resp = await getProductos();
            setProductos(resp);
        } catch (error) {
            console.log(error);
        }
    };
    const traerProductosCategoria = async (categoria) => {
        try {
            const resp = await getProductosCategoria(categoria);
            setProductos(resp)
        } catch (error) {
            console.log(error);
        }
    };
    const traerProductosFiltro = async (filtro) => {
        try {
            const resp = await getProductosFiltro(filtro);
            setProductos(resp)
        } catch (error) {
            console.log(error);
        }
    };
    const traerProductosDestacados = async () => {
        try {
            const resp = await getProductosDestacados();
            setProductos(resp);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        (productos.length <=0) && traerProductos();
        (categoria) && traerProductosCategoria(categoria);
       /*  (filtro) && traerProductosFiltro(filtro); */
       (destacados) && traerProductosDestacados();
    }, [productos, categoria, filtro]);
    // console.log(productos)
    return (
        <div>
            {(categoria) ? <h2>Listado de Productos por {categoria}</h2> : 
                ((filtro)? <h2>Listado de Productos filtrados por {filtro}</h2> : (
                (destacados)? <h2>Listado de Productos Destacados</h2>: <h2>Listado de Productos en Galería</h2>))}
            <ItemList list={productos} />
        </div>
    );
}

export default ItemListContainer;
