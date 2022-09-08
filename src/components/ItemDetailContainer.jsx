import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';

const ItemDetailContainer = ({idProd}) => {
    const [producto, setProducto] = useState([]);
    
    useEffect(()=>{
        const traerUnProducto = async (idProd) => {
            let prod;
            try {
                const resp = await fetch("/data/productos.json");
                const data = await resp.json();
                prod = data.find(prod => prod.id === idProd);
                setProducto(prod);
            } catch (error) {
                console.log(error);
            }
        };
        traerUnProducto(idProd);
    }, []);
    return (
        <div>
            {producto.length != 0 && <ItemDetail producto={producto} />}
            
        </div>
    );
}

export default ItemDetailContainer;
