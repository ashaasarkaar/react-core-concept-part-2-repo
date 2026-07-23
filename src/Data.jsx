
const Data = ({data}) =>{
   
    console.log(data)
    return(
        <div className="card-two">
            <h2>Name: {data.name}</h2>
            <h2>Company Name: {data.company.name}</h2>
            <h3>City: {data.address.city}</h3>
        </div>
    )
}
export default Data;