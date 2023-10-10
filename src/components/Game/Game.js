import React, { useState } from "react"
import Input from "../Input/Input"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import UserGuesses from "../UserGuesses/UserGuesses"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
    const [guesses, setGuesses] = useState([])
    function handleSubmitGuess(tentativeGuess) {
        const nextGuess = {
            value: tentativeGuess,
            id: `${tentativeGuess}-${Math.floor(Math.random() * 99999)}`,
        }
        setGuesses([...guesses, nextGuess])
    }
    return (
        <>
            <UserGuesses guesses={guesses} />
            <Input handleSubmitGuess={handleSubmitGuess} />
        </>
    )
}

export default Game
