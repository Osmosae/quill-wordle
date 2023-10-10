import React from "react"

function Guess({ value, id }) {
    const fill = value.split("")
    return (
        <p className="guess" key={id}>
            {fill.map((letter) => (
                <span class="cell">{letter}</span>
            ))}
        </p>
    )
}

export default Guess
