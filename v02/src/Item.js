import { useState } from "react";

const Item = ({author, content, createdAt, emotion, id, onDelete}) => {
    const deletes = () => {
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
            onDelete(id);
        }
    }
    const [isChange, setIsChagne] = useState(false);
    const toggle = () => setIsChagne(!isChange);
    // const [locals, setLocals] = useState(content);
    // const edits = () => {
    //     setIsChagne(false);
    //     setLocals(content);
    // }
    return (
        <div className="Item">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span>
                <span>작성일자 : {new Date(createdAt).toLocaleString()}</span>
            </div>
            <div className="content">
                {isChange ? (<><textarea></textarea></>) : (<>{content}</>)}
            </div>
            <button onClick= {deletes}>삭제하기</button>
            <button onClick= {toggle}>수정하기</button>
        </div>
    )
}

export default Item;