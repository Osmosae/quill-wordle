import Banner from "./Banner"

import PropTypes from "prop-types"

function LostBanner({ answer, restart }) {
    return (
        <Banner emotion="sad" restart={restart}>
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
        </Banner>
    )
}

export default LostBanner

LostBanner.propTypes = {
    answer: PropTypes.string,
    restart: PropTypes.func,
}
