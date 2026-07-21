import { use } from "react";
import Friend from "./Friend";

const Friends = ({friendsPromise}) =>{
    const friends = use(friendsPromise)
    // console.log(friendsPromise)
    return(
        <div className="card-two">
            <h2>Friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}
export default Friends;