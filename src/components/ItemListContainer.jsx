import React from 'react';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosCategoria } from './firebase/firebase';

const ItemListContainer = () => {
    const { categoria } = useParams();
    const [productos, setProductos] = useState([]);
    const traerProductos = async () => {
        try {
            const resp = await getProductos();
            setProductos(resp);
        } catch (error) {
            console.log(error);
        }
    };
    const traerProductosFiltro = async (categoria) => {
        try {
            const resp = await getProductosCategoria(categoria);
            setProductos(resp)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        (productos.length <=0) && traerProductos();
        (categoria) && traerProductosFiltro(categoria);
    }, [productos, categoria]);
    // console.log(productos)
    return (
        <div>
            {(categoria) ? <h2>Listado de Productos por {categoria}</h2> : <h2>Listado de Productos en Galería</h2>}
            <ItemList list={productos} />
        </div>
    );
}

export default ItemListContainer;
