import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

function UserInput({ handleAddGuesses, gameStatus }) {
    const [enteredGuess, setEnteredGuess] = useState("")

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        handleAddGuesses(enteredGuess)
        setEnteredGuess("")
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            {/* <label htmlFor="guess-input">Enter guess:</label> */}
            <input required minLength={5} maxLength={5} pattern="[a-zA-Z]{5}" id="guess-input" type="text" value={enteredGuess} placeholder="Enter Guess" onChange={(e) => setEnteredGuess(e.target.value.toUpperCase())} disabled={gameStatus !== "running"} ref={inputRef} />
        </form>
    )
}

export default UserInput

UserInput.propTypes = {
    handleAddGuesses: PropTypes.func,
    gameStatus: PropTypes.string,
}
