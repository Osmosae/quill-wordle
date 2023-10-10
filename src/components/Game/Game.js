import React, { useState } from "react"
import Input from "../Input/Input"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import UserGuesses from "../UserGuesses/UserGuesses"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import WonBanner from "../WonBanner/WonBanner"
import LostBanner from "../LostBanner/LostBanner"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
    const [gameStatus, setGameStatus] = useState("running")
    const [guesses, setGuesses] = useState([])
    function handleSubmitGuess(tentativeGuess) {
        const nextGuess = [...guesses, tentativeGuess]
        setGuesses(nextGuess)
        if (tentativeGuess.toUpperCase() === answer.toUpperCase()) {
            setGameStatus("won")
        } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus("lost")
        }
    }
    return (
        <>
            <UserGuesses answer={answer} guesses={guesses} />
            <Input handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
            {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
            {gameStatus === "lost" && <LostBanner answer={answer} />}
        </>
    )
}

export default Game
