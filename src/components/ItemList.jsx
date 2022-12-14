import React from 'react';
import Item from './Item';
const ItemList = ({list}) => {
    return (
        <ul className ="listaproductos">
            {list.map((producto) => ( <Item prod = {producto} key={producto.id}/>))}
        </ul>
    );
}

export default ItemList;
