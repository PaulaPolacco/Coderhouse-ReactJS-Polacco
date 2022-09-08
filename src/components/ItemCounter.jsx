import './ItemCounter.css'
import React from 'react';
import UseItemCounter from '../hooks/UseItemCounter';


const ItemCounter = ({initial, stock, onAdd}) => {
    console.log(parseInt(stock))
    const {add, less, reset, count, cant}= UseItemCounter(initial, parseInt(stock));
    
    return (
        <div>
            <div className="counter-box">
                <h1>Comprar</h1>
                <p>Stock: {cant}</p>
                <p>Cantidad: {count}</p>
                <div>
                    <button className="btn btn-secondary" onClick={less}> - </button>
                    <button className="btn btn-secondary" onClick={reset}> Reset </button>
                    <button className="btn btn-secondary" onClick={add}> + </button>
                </div>
                <div>
                    <button className="btn btn-secondary" onClick={() => onAdd(count)} >Confirmar</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCounter;
