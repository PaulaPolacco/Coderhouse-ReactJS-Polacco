import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();
export  const UseCartContext = () => useContext(CartContext);

const CartContextProvider = (props) => {
    const [shopCart, setCart]= useState([]); //{id: producto.id, nombre:producto.nombre, cantidad: count, img:producto.imagen}
    const addElementCart = (producto) => {
        const auxCarrito = [...shopCart]
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
        setCart(shopCart.filter(prod => prod.id !== producto.id))
    }
    const clearCart = () => {
        setCart([]);
    }
    const isInCart = (producto) => {
        return shopCart.some(prod => prod.id === producto.id)
    }
    const cantTotalCart = ()=> {
        let cnt = 0 
        shopCart.forEach((item) => {cnt += item.cantidad})      
        return cnt
    };
    const precioTotalCart = ()=> {
        let cnt = 0 
        shopCart.forEach((item) => {cnt += item.cantidad * item.precio})      
        return cnt
    };
    return (
        <>
            <CartContext.Provider value={{  shopCart, addElementCart, removeElementCart, clearCart, isInCart, cantTotalCart, precioTotalCart }}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}

export  {CartContext, CartContextProvider};
