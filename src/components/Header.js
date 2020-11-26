import PropTypes from 'prop-types'

const Header = ({ title, description = null, children = null }) => {
    return (
        <div className="bg-blue-500 -mt-20 relative">
            <div className="max-w-4xl mx-auto pt-32 pb-24 px-4 lg:px-0">
                <h1 className="text-4xl font-extrabold tracking-wide leading-tight text-white">
                    {title}
                </h1>
                {description && !children && <p className="text-lg text-white">{description}</p>}
                {children && <>{children}</>}
            </div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node,
}

export default Header
