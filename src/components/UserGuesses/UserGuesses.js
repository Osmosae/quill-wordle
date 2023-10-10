import React from "react"
import Guess from "../Guess/Guess"

function UserGuesses({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.map(({ value, id }) => (
                <Guess value={value} id={id} key={id} />
            ))}
        </div>
    )
}

export default UserGuesses
