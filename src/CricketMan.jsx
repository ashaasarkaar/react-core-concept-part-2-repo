import { useState } from "react";

const CricketMan = () =>
    
{
    const batsmanStyle = {
    border: '1px solid blue',
    borderRadius: '10px',
    padding: '20px',
    margin: '100px auto'
}

const[runs, setRuns] = useState(0)
const handleSingle = () =>{

}
    return(
        <div className="card" style={batsmanStyle}>
            <h3>Player: TurKey BatsMan</h3>
            <h2>Score Board: {runs}</h2>
            <div className="btn-group">
                <button >Single</button>
                <button>Double</button>
                <button>Four</button>
                <button>Six</button>
            </div>
        </div>
    )
}
export default CricketMan;