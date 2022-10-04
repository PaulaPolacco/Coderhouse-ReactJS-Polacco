import React from 'react';
import { useState } from 'react';
import { UseCartContext } from './context/CartContext';
import { addOrder } from './firebase/firebase';

const Checkout = () => {
    const { shopCart, precioTotalCart, clearCart } = UseCartContext();
    const [orderId, setOrderId] = useState();
    const [buyer, setBuyer] = useState({
        Name: '', Email: '', Phone: ''
    });
    const { Name, Email, Phone } = buyer;
    const generateOrder = async (data) => {
        try {
            const order = await addOrder(data);
            setOrderId(order.id);
            // antes de eliminar el carrito debo actalizar el stock de los productos
            clearCart();
        } catch (error) {
            console.log(error);
        }
    }
    const handleInputChange = (e) => {
        setBuyer(({ ...buyer, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const day = new Date
        const total = precioTotalCart()
        const items = shopCart.map(e => { return { id: e.id, title: e.nombre, price: e.precio, amount: e.cantidad } })
        const data = { buyer, items, day, total }
        generateOrder(data);
    }
    return (

        (!orderId) ?
            <div className="listaproductoscarrito">
                <h1> Finalizar Compra</h1> <hr />
                <h4> Completar datos del comprador</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">
                            Nombre
                        </label>
                        <input
                            name="Name"
                            placeholder="Name"
                            value={Name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">
                            Email
                        </label>
                        <input
                            type="mail"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">
                            Teléfono
                        </label>
                        <input
                            type="phone"
                            name="Phone"
                            placeholder="Phone"
                            value={Phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Finalizar Compra"
                        className="btn btn-success"
                    />

                </form>
            </div>
            :
            <div className="listaproductoscarrito">
                <h4>Orden generada con éxito. Identificación: {orderId}</h4>
            </div>
    );
}

export default Checkout;
