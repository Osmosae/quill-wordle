import Guess from "./Guess"
import { range } from "../../helpers/utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants/constants"

import PropTypes from "prop-types"

function RenderGuesses({ guesses, answer }) {
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                <Guess key={num} value={guesses[num]} answer={answer} />
            ))}
        </div>
    )
}

export default RenderGuesses

RenderGuesses.propTypes = {
    guesses: PropTypes.array,
    answer: PropTypes.string,
}
