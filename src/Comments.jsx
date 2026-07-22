import { use } from "react"
import Comment from "./Comment"

export default function Comments({commentsPromise}){
    const comments = use(commentsPromise)
    // console.log(comments)
    return(
        <div className="card-two">
            <h2>All Comments Are Here...</h2>
            <h3>Comments : {comments.length}</h3>
            {
                comments.map(comment =><Comment comment={comment}></Comment>)
            }
        </div>
    )
}