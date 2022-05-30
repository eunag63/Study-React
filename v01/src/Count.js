import React, {useState} from "react";
import OddEven from "./OddEven";

const Conter = ({value}) => {
    const [count, setCount] = useState(value);
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
        <OddEven count={count}></OddEven>
     </div>
 )   
}

Conter.defaultProps = {
    value: 12,
}

export default Conter;