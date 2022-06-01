const Item = ({author, content, createdAt, emotion, id, onDelete}) => {
    return (
        <div className="Item">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span>
                <span>작성일자 : {new Date(createdAt).toLocaleString()}</span>
            </div>
            <div className="content">
                {content}
            </div>
            <button onClick= {()=> {
                if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
                    onDelete(id);
                }
            }}>
                삭제하기
            </button>
        </div>
    )
}

export default Item;