import { use } from "react";
import Post from "./Post";

const Posts = ({postsPromise}) =>{
    const posts = use(postsPromise)
    console.log(posts)
    return(
        <div className="card-two">
            <h2>All Posts Are Here...</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
            </div>
    )
}
export default Posts;