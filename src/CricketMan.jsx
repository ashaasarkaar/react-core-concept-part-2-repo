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
const[sixes, setSixes] = useState(0)
const[fours, setFours] = useState(0)

const handleSingle = () =>{
    const singleRun = runs + 1;
    setRuns(singleRun)
}

const handleDouble = () =>{
    const doubleRun = runs + 2;
    setRuns(doubleRun)
}

const handleSix = () =>{
    const sixRun = runs + 6;
    const sixCount = sixes + 1;
    setSixes(sixCount)
    setRuns(sixRun)
}
const handleFour = () =>{
    const fourRun = runs + 4;
    const fourCount = fours + 1;
    setFours(fourCount)
    setRuns(fourRun)
}
    return(
        <div className="card" style={batsmanStyle}>
            <span className="left-bar"></span>
             <span className="right-bar"></span>

            <h3>Player: TurKey BatsMan</h3>
             {runs >= 50 && runs < 100 && <h2>Welcome For Half Century</h2>}
            {runs >= 100 && <h2>Welcome For Century</h2>}

            <h2>Six Count : {sixes}</h2>

            <h2>Four Count: {fours}</h2>

            <h2>Score Board: {runs}</h2>
           
            <div className="btn-group">
                <button onClick={handleSingle}>Single</button>
                <button onClick={handleDouble}>Double</button>
                <button onClick={handleFour}>Four</button>
                <button onClick={handleSix}>Six</button>
            </div>
        </div>
    )
}
export default CricketMan;