import React from 'react';
import './ItemDetail.css';
import ItemCounter from './ItemCounter';

const ItemDetail = ({ producto }) => {
    const onAdd = (count) => { console.log(`Se han seleccionado ${count} productos`) }
    let stock = parseInt(producto.stock);
    return (
        <div className="contenedorDetalleProd">
            <div>
                <img
                    src={producto.img}
                    alt={producto.nombre}
                    className="imagenesGaleria"
                />
                <p>{producto.nombre} </p>
                <p>Precio: $ {producto.precio}</p>
                <p>Tamaño 0x0 cm</p>
                <p>Tiempo de impresión: 0 min</p>
                <p>Cantidad de filamento: 0 gr</p>
                <p> Colores disponibles </p>
                <ul id="listaproductos_colores">
                    <li className="listaproductos_cuadrado green"> </li>
                    <li className="listaproductos_cuadrado fuchsia"> </li>
                    <li className="listaproductos_cuadrado"> </li>
                    <li className="listaproductos_cuadrado black"> </li>
                </ul>
            </div>
            <div>
                {producto && <ItemCounter initial={1} stock={stock} onAdd={onAdd} />}

            </div>
        </div>

    );
}

export default ItemDetail;
