import React, { useState } from "react"
import Input from "../Input/Input"

import { sample } from "../../utils"
import { WORDS } from "../../data"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
    const [guess, setGuess] = useState("")
    return (
        <>
            {guess}
            <Input setGuess={setGuess} />
        </>
    )
}

export default Game
