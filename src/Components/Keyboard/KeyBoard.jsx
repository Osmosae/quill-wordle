import PropTypes from "prop-types"

function Row({ level, rowArr }) {
    return (
        <div className={`${level}-row`}>
            {rowArr.map((letter) => (
                <span className="small-cell" key={letter}>
                    {letter}
                </span>
            ))}
        </div>
    )
}

function KeyBoard({ letterColorMap }) {
    const topRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    const midRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    const botRow = ["z", "x", "c", "v", "b", "n", "m"]
    return (
        <div className="keyboard">
            <Row level="first" rowArr={topRow} />
            <Row level="second" rowArr={midRow} />
            <Row level="third" rowArr={botRow} />
        </div>
    )
}

export default KeyBoard

KeyBoard.propTypes = {
    letterColorMap: PropTypes.object,
}
Row.propTypes = {
    level: PropTypes.string,
    rowArr: PropTypes.array,
}
