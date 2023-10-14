import { range } from "../../helpers/utils"

import PropTypes from "prop-types"

function Cell({ letter, status }) {
    return <span className={status ? `${status} cell` : "cell"}>{letter}</span>
}

function Guess({ value }) {
    return (
        <p className="guess">
            {range(5).map((num) => (
                <Cell letter={value ? value[num].letter : undefined} status={value ? value[num].status : undefined} key={num} />
            ))}
        </p>
    )
}

export default Guess

Guess.propTypes = {
    value: PropTypes.array,
    answer: PropTypes.string,
}
Cell.propTypes = {
    letter: PropTypes.string,
    status: PropTypes.string,
}
