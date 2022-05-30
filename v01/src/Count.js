import React, {useState} from "react";

const Conter = () => {
    const [count, setCount] = useState(0);
    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }
 return (
     <div>
        <h2>{count}</h2>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
     </div>
 )   
}

export default Conter;