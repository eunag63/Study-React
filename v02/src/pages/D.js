import { useParams } from "react-router";

const D = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>다이어리!</h1>
        </div>
    )
}

export default D;