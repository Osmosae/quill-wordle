import PropTypes from "prop-types"

function Banner({ emotion, children }) {
    return <div className={`${emotion} banner`}>{children}</div>
}

export default Banner

Banner.propTypes = {
    emotion: PropTypes.string,
    children: PropTypes.any,
}
