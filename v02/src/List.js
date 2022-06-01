import Item from "./Item";

const List = ({list}) => {
    return (
        <div className="List">
            <h2>리스트</h2>
            <h4>{list.length}개의 일기가 있습니다.</h4>
            <div>
                {list.map((it) => (
                    <Item key={it.id} {...it}></Item>
                ))}
            </div>
        </div>
    )
}

List.defaultProps = {
    list: []
}

export default List;