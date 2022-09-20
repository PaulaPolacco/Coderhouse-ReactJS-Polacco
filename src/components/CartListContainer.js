import React from 'react';
import { Link } from 'react-router-dom';
import { UseCartContext } from './context/CartContext';
import Cart from './Cart'

const CartListContainer = () => {
    const { addElementCart, removeElementCart, clearCart, shopCart, precioTotalCart } = UseCartContext()
    return (
        <div>
            <ul className="listaproductos">
                {(shopCart.length > 0) && shopCart.map((producto) => (<Cart prod={producto} key={producto.id} removeElementCart={removeElementCart} />))}
            </ul>
            <div>
                <h3>Precio Total productos: {precioTotalCart()}</h3>
            </div>
            <div>
                <button type="button" class="btn btn-danger" onClick={() => clearCart()}>
                    Vaciar Carrito
                </button>
            </div>
        </div>
    );
}

export default CartListContainer;
