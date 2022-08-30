import React from 'react';
import ItemCounter from './ItemCounter';

const ItemListContainer = () => {
    const onAdd = (count) => {console.log(`Se han seleccionado ${count} productos`)}
    return (
        <div>
            <h1>Listado de Productos en Galería</h1>
            <ItemCounter stock = {20} onAdd = {onAdd}/>
        </div>
    );
}

export default ItemListContainer;
