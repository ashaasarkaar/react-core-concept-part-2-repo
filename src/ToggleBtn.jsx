import { useState } from "react";

const ToggleBtn = () =>{
    const[text, setText] = useState(false)

    const handleText = () =>{
        setText(!text)
    }
    return(
        <div className="card-two">
           {text && <h1>“Hello, React Leaner!”.</h1>}
            <button onClick={handleText}>
                {text ? "Hide" : "Show"}
            </button>
        
        </div>
       
        
    )
}
export default ToggleBtn;