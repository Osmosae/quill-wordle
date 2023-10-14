import Guess from "./Guess"
import KeyBoard from "../Keyboard/KeyBoard"
import { range } from "../../helpers/utils"
import { checkGuess } from "../../helpers/game-helpers"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants/constants"

import PropTypes from "prop-types"

function RenderGuesses({ guesses, answer }) {
    const letterStatusMap = guesses.map((guess) => checkGuess(guess, answer))

    function getStatusByLetter(onUserGuesses) {
        const statusObj = {}

        onUserGuesses.forEach((guess) => {
            guess.forEach(({ letter, status }) => {
                statusObj[letter] = status
            })
        })

        return statusObj
    }

    const letterColorMap = getStatusByLetter(letterStatusMap)

    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                <Guess key={num} value={letterStatusMap[num]} />
            ))}
            <KeyBoard letterColorMap={letterColorMap} />
        </div>
    )
}

export default RenderGuesses

RenderGuesses.propTypes = {
    guesses: PropTypes.array,
    answer: PropTypes.string,
}
