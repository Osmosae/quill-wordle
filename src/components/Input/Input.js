import React, { useState } from "react"

function Input() {
    const [guess, setGuess] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (guess.length !== 5) return
        console.log({ guess })
        setGuess("")
    }
    return (
        <div>
            <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="guess-input">Enter a guess</label>
                <input
                    required
                    minLength={5}
                    maxLength={5}
                    value={guess}
                    onChange={(e) => {
                        const nextGuess = e.target.value.toUpperCase()
                        setGuess(nextGuess)
                    }}
                    id="guess-input"
                    type="text"
                />
            </form>
        </div>
    )
}

export default Input
