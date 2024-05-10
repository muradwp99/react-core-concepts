import { useState } from "react"

export default function Counter (){

    const [count, setCount]= useState(0);

    const HandleIncrease =() => {
        const increaseCount = count + 1;
        setCount(increaseCount)
    }

    const HandleDecrease =() => {
        const decreaseCount = count - 1;
        setCount(decreaseCount)
    }



    return (
        <>
            <h1>Counter: {count}</h1>

            <button onClick={HandleIncrease}>+</button>
            <button onClick={HandleDecrease}>-</button>
        </>
    )
}