import { useState } from "react";


const Count = () =>{
    const countStyle = {
        border: '2px solid yellow',
        borderRadius: '10px',
        padding: '10px'
    }
    
    const[count, setCount] = useState(0);

    const handleAdd = () =>{
        // console.log('i am serious')
        const newValue = count + 1;
        setCount(newValue)
    }
    return(
        <div style={countStyle}>
            <h2>Count: {count}</h2>
            <button onClick={handleAdd} style={{padding:'10px', backgroundColor:'red'}}>Add</button>
        </div>
    )
}
export default Count;