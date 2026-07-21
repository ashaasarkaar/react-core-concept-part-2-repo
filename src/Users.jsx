import { use } from "react";

const Users = ({ fetchUsers }) =>{
    
    const userData = use(fetchUsers)

    console.log(fetchUsers)
    return(
        <div className="card-two">
            <h2>Users: {userData.length}</h2>
        </div>
    )
}
export default Users;
