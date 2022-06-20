import { useSearchParams, useNavigate } from "react-router-dom";

const E = () => {
    const navi = useNavigate();
    const [search, setSearchParams] = useSearchParams();
    const id = search.get('id');
    const mode = search.get('mode');
    return (
        <div>
            <h1>에디터!</h1>
            <button onClick={() => setSearchParams({ who: "euna"})}>바꾸기</button>
            <button onClick={() => navi('/home')}>홈으로 가기</button>
        </div>
    )
}

export default E;