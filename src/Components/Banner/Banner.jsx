import PropTypes from "prop-types"

function Banner({ emotion, children, restart }) {
    return (
        <div className={`${emotion} banner`}>
            {children}
            <button className={emotion} onClick={() => restart()}>
                Play Again
            </button>
        </div>
    )
}

export default Banner

Banner.propTypes = {
    emotion: PropTypes.string,
    children: PropTypes.any,
    restart: PropTypes.func,
}
