import {useState} from "react";

const Diany = () => {
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1
    })
    const changeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const save = () => {
        console.log(state)
        alert("성공")
    }
    return (
    <div className="Diany">
        <h2>오늘의 일기</h2>
        <div>
            <input 
                name="author"
                value={state.author} 
                onChange={changeState}>
            </input>
        </div>
        <div>
            <textarea 
                name="content"
                value={state.content} 
                onChange={changeState}>
            </textarea>
        </div>
        <div>
            감정 점수 👉🏻 
            <select name="emotion" value={state.emotion} onChange={changeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={save}>저장</button>
        </div>
    </div>
    );
}

export default Diany;