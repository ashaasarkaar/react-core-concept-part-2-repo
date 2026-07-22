const Comment = ({comment}) =>{
    const{email, body} = comment;
    return(
        <div className="card-two">
            <h2>Name: {comment.name}</h2>
            <h2>Email: {email}</h2>
            <h4>{body}</h4>
        </div>
    )
}
export default Comment;