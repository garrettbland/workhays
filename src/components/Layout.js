import PropTypes from 'prop-types'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-200">
            {children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
