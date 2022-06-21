const Header = ({text, left, right}) => {
    return (
        <header>
            <div className="left">{left}</div>
            <div className="text">{text}</div>
            <div className="rigint">{right}</div>
        </header>
    )
}

export default Header;