import { sample } from "../../helpers/utils"
import { WORDS } from "../../data/data"
import UserInput from "./UserInput"
import RenderGuesses from "./RenderGuesses"
import { useState } from "react"
import WonBanner from "../Banner/WonBanner"
import LostBanner from "../Banner/LostBanner"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
    const [guesses, setGuesses] = useState([])
    const [gameStatus, setGameStatus] = useState("running")

    function handleAddGuesses(enteredGuess) {
        const nextGuesses = [...guesses, enteredGuess]
        setGuesses(nextGuesses)
        if (enteredGuess === answer) setGameStatus("won")
        if (nextGuesses.length >= 6) setGameStatus("lost")
    }
    return (
        <>
            <RenderGuesses guesses={guesses} answer={answer} />
            <UserInput handleAddGuesses={handleAddGuesses} gameStatus={gameStatus} />
            {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
            {gameStatus === "lost" && <LostBanner answer={answer} />}
        </>
    )
}

export default Game
