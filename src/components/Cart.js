import React from 'react';

const Cart = (itemCart) => {
    return (
        <>
         <li key={itemCart.prod.id}>
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={itemCart.prod.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{itemCart.prod.nombre}</h5>
                            <p className="card-text">
                                Cantidad: {itemCart.prod.cantidad}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                            <button type="button" className="btn btn-outline-danger" onClick={()=> itemCart.removeElementCart(itemCart.prod)}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li> 
        </>

    );
}

export default Cart;
