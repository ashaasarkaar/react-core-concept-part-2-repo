import { useEffect, useState } from "react";
import Data from "./Data";

const DataFetchWithUE = () =>{
    const[datas, setDatas] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState('')
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            if(!res.ok){
                 throw new Error("Failed To Fetch Data")
            }
            return res.json() 
        })
        .then(userData => {
            setDatas(userData)
            setLoading(false)
        })
         .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [])

      if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }
    return(
        <div>
            <h1>User Data: {datas.length}</h1>
            {
                datas.map(data =><Data key={data.id} data={data}></Data>)
              
            }
            {/* <h2>Company Name: {data.company.name}</h2> */}
        </div>
    )
}
export default DataFetchWithUE;