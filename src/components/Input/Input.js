import React, { useState } from "react"
// import UserGuesses from "../UserGuesses/UserGuesses"

function Input({ handleSubmitGuess }) {
    const [tentativeGuess, setTentativeGuess] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        // if (guess.length !== 5) return
        handleSubmitGuess(tentativeGuess)
        setTentativeGuess("")
    }
    return (
        <div>
            <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="guess-input">Enter a guess</label>
                <input
                    required
                    maxLength={5}
                    pattern="[a-zA-Z]{5}"
                    title="Please Enter 5 Letters"
                    value={tentativeGuess}
                    onChange={(e) => {
                        const nextGuess = e.target.value.toUpperCase()
                        setTentativeGuess(nextGuess)
                    }}
                    id="guess-input"
                    type="text"
                />
            </form>
        </div>
    )
}

export default Input
