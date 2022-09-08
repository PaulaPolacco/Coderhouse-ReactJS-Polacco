import { useState } from 'react';

const UseItemCounter = (initial, stock) => {
    
    const [count, setCount] = useState(initial);
    const [cant, setStock] = useState(stock);
    const add = () =>{
        if(count<stock) {
            setCount(count +1);
            setStock(cant -1);
        }
    };
    const less = () => {
        if(count>initial) {
            setCount(count -1);
            setStock(cant +1)
        }
    };
    const reset = () => {
        setCount(initial);
        setStock(stock);
    };
    return (
        {add, less, reset, count,cant}
    );
};

export default UseItemCounter;

