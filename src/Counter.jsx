import { useState } from "react"

const Counter = () =>{
    const styleCount = {
        border: '2px solid red',
        borderRadius :'20px',
        marginTop : '20px'
    }
    const[count,setCount] = useState(0);

    const handelClick =()=>{
        //console.log('i am adding num')
        const value = count + 1;
        setCount(value)
    }

    return(
        <div style={styleCount}>
            <h2>Count: {count} </h2>
            <button onClick={handelClick} style={{backgroundColor:'red',padding:'10px',borderRadius:'10px',color:'black'}}>Add</button>
        </div>
    )
}
export default Counter