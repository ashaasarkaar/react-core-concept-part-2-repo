import { useState } from "react";
const batsmanStyle = {
    border: '1px solid blue',
    borderRadius: '10px',
    padding: '20px',
    margin: '100px auto'
}
const Batsman = () => {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

    const handleSingle = () => {
        const singleRuns = runs + 1;
        setRuns(singleRuns)
    }

    const handleDouble = () => {
        const doubleRuns = runs + 2;
        setRuns(doubleRuns)
    }

    const handleFour = () => {
        const fourRuns = runs + 4;
        const updateFours = fours + 1;
        setFours(updateFours)
        setRuns(fourRuns)
    }

    const handleSix = () => {
        const sixRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes)
        setRuns(sixRuns)
    }
    return (
        <div style={batsmanStyle} className="card">
            <span className="left-bar"></span>
            <span className="right-bar"></span>

            <h2>Player: Bangla Batsman</h2>

            {runs >= 50 && runs < 100 && <h2>Welcome For Half Century</h2>}
            {runs >= 100 && <h2>Welcome For Half Century</h2>}

            <h2>Six : {sixes}</h2>
            <h2>Four : {fours}</h2>
            <h3>Score: {runs} </h3>
           <div className="btn-group">
             <button onClick={handleSingle}>Singles</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleDouble}>Doubles</button>
           </div>
        </div>
    )
}
export default Batsman;