import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <div>
            <div className="max-w-4xl mx-auto">{title}</div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
