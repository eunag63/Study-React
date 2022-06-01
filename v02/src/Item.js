const Item = ({author, content, createdAt, emotion}) => {
    return (
        <div className="Item">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span>
                <span>작성일자 : {new Date(createdAt).toLocaleString()}</span>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}

export default Item;