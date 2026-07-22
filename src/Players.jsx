import { useEffect, useState } from "react"

export default function Players(){
    // old way before code for fatching Data From Server Site START
    const[players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    // old way before code for fatching Data From Server Site END
    return(
        <div className="card-two">
            <h1>Players: {players.length}</h1>
        </div>
    )
}