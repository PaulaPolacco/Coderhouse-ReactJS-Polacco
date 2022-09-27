import React from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <li key={prod.id}>
            <div className="card" style={{ width: "18rem" }}>
                <img src={prod.img} className="card-img-top imagenesGaleria" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">
                        Precio: ${prod.precio}
                    </p>
                    <div>
                    <Link className="btn btn-primary" to={`/detalles/${prod.id}`}>
                        Ver Más
                    </Link>
                    <Link className="btn-link" to={`/categoria/${prod.categoria}`}>
                        <p>Categoría: {prod.categoria}</p>
                    </Link>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Item;
