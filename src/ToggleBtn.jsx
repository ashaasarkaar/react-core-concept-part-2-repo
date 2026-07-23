import { useState } from "react";

/**
 * 
 * @returns 2. Task 2 : useState and conditional Rendering
    
    **Create a “show/hide Text” app:**
    1. use useState to manage the visibility of a text message.
    2. A button should toggle between “Show” and “Hide” text.
    3. When the text is visible , it should say “Hello, React Leaner!”.
    4. When hidden, nothing should be displayed.
 */

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