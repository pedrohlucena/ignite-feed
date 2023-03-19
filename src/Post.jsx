export function Post(props) {
    console.log(props)

    return (
        <div className="post">
            <strong>{props.author}</strong><br/>
            {props.content}
        </div>
    )
}