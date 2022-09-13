import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({  });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const traerUnProducto = async () => {
            let prod;
            try {
                const resp = await fetch("/data/productos.json");
                const data = await resp.json();
                prod = data.find(prod => prod.id === Number(id));
                setProducto(prod);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        traerUnProducto();
    }, []);
    return (
        <div>
            {isLoading ? <h1>Loading...</h1>
					  : <ItemDetail producto={producto}/>
			}
            
        </div>
    );
}

export default ItemDetailContainer;
