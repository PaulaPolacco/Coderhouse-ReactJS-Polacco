import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();
export  const UseCartContext = () => useContext(CartContext);

const CartContextProvider = (props) => {
    const [shopCart, setCart]= useState([]); //{id: producto.id, nombre:producto.nombre, cantidad: count}
    
    const addElementCart = (producto) => {
        const auxCarrito = shopCart
        let cantidad = producto.cantidad
        let prod = auxCarrito.find(prod => prod.id === producto.id)
        let index = auxCarrito.findIndex(prod => prod.id === producto.id)
        if (prod){
            cantidad = prod.cantidad+ producto.cantidad
            auxCarrito[index].cantidad = cantidad
        }else{
            auxCarrito.push(producto)
        }
        setCart(auxCarrito)

    }
    const removeElementCart = (producto) => {
        const auxCarrito = shopCart
        let index = auxCarrito.findIndex(prod => prod.id === producto.id)
        auxCarrito.splice(index,1)
        setCart(auxCarrito)
    }
    const clearCart = () => {
        setCart([]);
    }
    const isInCart = (producto) => {
        let index = shopCart.findIndex(prod => prod.id === producto.id)
        return index?true:false
    }
    return (
        <>
            <CartContext.Provider value={{  shopCart, addElementCart, removeElementCart, clearCart, isInCart }}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}

export  {CartContext, CartContextProvider};
