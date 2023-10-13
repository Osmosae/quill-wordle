import Banner from "./Banner"

import PropTypes from "prop-types"

function WonBanner({ numOfGuesses, restart }) {
    return (
        <Banner emotion="happy" restart={restart}>
            <p>
                <strong>Congratulations!</strong> Got it in
                <strong> {numOfGuesses} guesses</strong>.
            </p>
        </Banner>
    )
}

export default WonBanner

WonBanner.propTypes = {
    numOfGuesses: PropTypes.number,
}
