import React from 'react';
import Item from './Item';
const ItemList = ({list}) => {
    console.log(list)
    return (
        <ul>
            {/* {list.map((producto) => ( <Item prod = {producto} key={producto.id}/>))} */}
            {list.map((producto) => ( <li  key={producto.id}>{producto.nombre}</li>))}
        </ul>
    );
}

export default ItemList;
