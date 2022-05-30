const OddEven = ({count}) => {

    return <h3>{count % 2 === 0 ? "짝수" : "홀수"}</h3>;
}

export default OddEven;