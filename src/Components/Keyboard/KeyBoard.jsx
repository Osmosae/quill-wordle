import PropTypes from "prop-types"

function Row({ level, rowArr, letterColorMap }) {
    return (
        <div className={`${level}-row`}>
            {rowArr.map((letter) => (
                <span className={`small-cell ${letterColorMap[letter] || ""}`} key={letter}>
                    {letter}
                </span>
            ))}
        </div>
    )
}

function KeyBoard({ letterColorMap }) {
    const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const botRow = ["Z", "X", "C", "V", "B", "N", "M"]
    return (
        <div className="keyboard">
            <Row level="first" rowArr={topRow} letterColorMap={letterColorMap} />
            <Row level="second" rowArr={midRow} letterColorMap={letterColorMap} />
            <Row level="third" rowArr={botRow} letterColorMap={letterColorMap} />
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
    letterColorMap: PropTypes.object,
}
