import React from 'react';

const FormBuscar = ({contBuscar}) => {
    return (
        <div>
             <form className="d-flex" id="buscarGaleria">
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
