import { useState } from 'react';

const UseItemCounter = (stock) => {
    const [count, setCount] = useState(0);
    const [cant, setStock] = useState(stock);
    const add = () =>{
        if(count<stock) {
            setCount(count +1);
            setStock(cant -1);
        }
    };
    const less = () => {
        if(count>0) {
            setCount(count -1);
            setStock(cant +1)
        }
    };
    const reset = () => {
        setCount(0);
        setStock(stock);
    };
    return (
        {add, less, reset, count,cant}
    );
};

export default UseItemCounter;

