import PropTypes from 'prop-types'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-200">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
