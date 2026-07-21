export default function Post({post}){
    const {body} = post;
    return(
        <div className="card-two">
            <h4>{post.title}</h4>
            <h5>{body}</h5>
        </div>
    )
}