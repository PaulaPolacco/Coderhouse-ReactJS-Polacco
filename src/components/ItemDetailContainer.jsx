import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from './firebase/firebase';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const traerUnProducto = async () => {
            try {
                const prod = await getProducto(id);
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
                : <ItemDetail producto={producto} />
            }

        </div>
    );
}

export default ItemDetailContainer;
