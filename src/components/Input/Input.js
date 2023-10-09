import React from "react"

function Input({ setGuess }) {
    function handleSubmit(e) {
        e.preventDefault()
        setGuess(e.target[0].value)
    }
    return (
        <div>
            <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="guess-input">Enter a guess</label>
                <input id="guess-input" type="text" maxLength={5} minLength={5} />
            </form>
        </div>
    )
}

export default Input
