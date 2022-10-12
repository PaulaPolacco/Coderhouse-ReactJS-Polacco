import React from 'react';
import './ItemDetail.css';
import ItemCounter from './ItemCounter';
import { useNavigate } from 'react-router-dom';
import { UseCartContext } from './context/CartContext';

const ItemDetail = ({ producto }) => {
    const navigate = useNavigate();
    const {addElementCart, shopCart} = UseCartContext()
    

    const onAdd = (count) => 
    { 
        const productoAcomprar = {id: producto.id, nombre:producto.nombre, cantidad: count, precio:producto.precio, img:producto.img}
        addElementCart(productoAcomprar);
        navigate('/cart')
    }
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
                {(producto && stock) ? <ItemCounter initial={1} stock={stock} onAdd={onAdd} />: <h3>(Sin stock)</h3>}
            </div>
        </div>

    );
}

export default ItemDetail;
