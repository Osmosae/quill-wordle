import { checkGuess } from "../../helpers/game-helpers"
import { range } from "../../helpers/utils"

import PropTypes from "prop-types"

function Cell({ letter, status }) {
    return <span className={status ? `${status} cell` : "cell"}>{letter}</span>
}

function Guess({ value, answer }) {
    const result = checkGuess(value, answer)
    return (
        <p className="guess">
            {range(5).map((num) => (
                <Cell letter={result ? result[num].letter : undefined} status={result ? result[num].status : undefined} key={num} />
            ))}
        </p>
    )
}

export default Guess

Guess.propTypes = {
    value: PropTypes.string,
    answer: PropTypes.string,
}
Cell.propTypes = {
    letter: PropTypes.string,
    status: PropTypes.string,
}
