import { use } from "react";

const Friends = ({friendsPromise}) =>{
    const friends = use(friendsPromise)
    console.log(friendsPromise)
    return(
        <div className="card-two">
            <h2>Friends: {friends.length}</h2>
        </div>
    )
}
export default Friends;