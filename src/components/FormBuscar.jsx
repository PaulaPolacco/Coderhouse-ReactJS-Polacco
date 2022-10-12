import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormBuscar = ({contBuscar}) => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        let filtro = e.target[0].value
        navigate(`/filtro/${filtro}`)
    }
    return (
        <div>
             <form className="d-flex" id="buscarGaleria" onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2"
                            id="imputBuscar"
                            type="search"
                            placeholder={contBuscar} 
                            aria-label="Search"
                        />
                        
                        <button className="btn btn-outline-success" type="submit">
                            Buscar
                        </button>
                        </form>
        </div>
    );
}

export default FormBuscar;
