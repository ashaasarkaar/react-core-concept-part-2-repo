import { useEffect, useState } from "react";

const Workers = () =>{
    const[worker, setWorker] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setWorker(data))
    }, [])
    return(
        <div className="card-two">
            <h1>Workers: {worker.length}</h1>
        </div>
    )
}
export default Workers;