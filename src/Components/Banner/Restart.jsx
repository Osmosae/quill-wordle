import PropTypes from "prop-types"

function Restart({ restart }) {
    return <button onClick={() => restart()}>Restart</button>
}

export default Restart

Restart.propTypes = {
    restart: PropTypes.func,
}
