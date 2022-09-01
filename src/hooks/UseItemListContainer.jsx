import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const UseItemListContainer = () => {
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
    console.log(productos)
    return (
        <div>
            
        </div>
    );
}

export default UseItemListContainer;
