import PropTypes from 'prop-types'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="max-w-4xl mx-auto">{children}</div>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
