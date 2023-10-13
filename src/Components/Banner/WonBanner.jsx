import Banner from "./Banner"

import PropTypes from "prop-types"

function WonBanner({ numOfGuesses }) {
    return (
        <Banner emotion="happy">
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
