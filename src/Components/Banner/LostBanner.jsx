import Banner from "./Banner"

import PropTypes from "prop-types"

function LostBanner({ answer }) {
    return (
        <Banner emotion="sad">
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
        </Banner>
    )
}

export default LostBanner

LostBanner.propTypes = {
    answer: PropTypes.string,
}
