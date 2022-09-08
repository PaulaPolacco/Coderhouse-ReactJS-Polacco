import React from 'react';

const Item = ({prod}) => {
    return (
        <li  key={prod.id}>{prod.nombre}</li>
    );
}

export default Item;
