import { useState } from "react";

/***
 * 1. State and Event Handling -> Task-1
    
    **Build a Simple Counter App with the following features:**
    
    1. A button that increases the count by 1 when clicked.
    2. A button that decreases the count by 1 when clicked.
    3. A button that resets the count to zero.
    4. Display the count dynamically on the screen.
 */

const CounterApp = () =>{
    const[increase, setIncrease] = useState(0)
    const handlePlusOne = () =>{
        const plusOne = increase + 1;
        setIncrease(plusOne)
    }
    const[decrease, setDecrease] = useState(0)
      const handleMinusOne = () =>{
        const minusOne = increase - 1;
        const decreaseOne = decrease - 1;
        setDecrease(decreaseOne)
        setIncrease(minusOne)
    }

     const[reset, setReset] = useState(0)
    const handleReset = () =>{
       const Reset = 0;
        setDecrease(Reset)
        setIncrease(Reset)
    }

    return(
        <div className="card-two">
            <h1>Total-Count : {increase} </h1>
           <div className="btn-group">
             <button onClick={handlePlusOne}>Increase 1+</button>
             <button onClick={handleReset}>Reset</button>
            <button onClick={handleMinusOne}>Decrease 1-</button>
           </div>
        </div>
    )
}
export default CounterApp;