export default function Friend({friend}){
    console.log(friend)
    const {name, phone, email} = friend;
    return(
        <div className="card-two">
            <h2>Name: {name}</h2>
            <h2>Name: {email}</h2>
            <h2>Name: {phone}</h2>
        </div>
    )
}