function KeyBoard() {
    const topRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    const midRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    const botRow = ["z", "x", "c", "v", "b", "n", "m"]
    return (
        <div className="keyboard">
            <div className="first-row">
                {topRow.map((letter) => (
                    <span className="small-cell" key={letter}>
                        {letter}
                    </span>
                ))}
            </div>
            <div className="second-row">
                {midRow.map((letter) => (
                    <span className="small-cell" key={letter}>
                        {letter}
                    </span>
                ))}
            </div>
            <div className="third-row">
                {botRow.map((letter) => (
                    <span className="small-cell" key={letter}>
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default KeyBoard
