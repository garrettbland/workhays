import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Row from '@/components/Row'

const Contact = () => {
    return (
        <>
            <Section className="bg-blue-500 bg-opacity-40">
                <div
                    className="w-full h-full absolute top-0 left-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1529479627062-5f1f0b88912a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2150&q=80')`,
                    }}
                ></div>
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b  from-indigo-600 to-transparent"></div>
                <Row className="relative px-4 lg:px-0">
                    <Navbar />
                    <div className="pt-12 pb-36">
                        <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
                        <p className="text-white text-xl font-light">
                            Please fill out the following form to contact us. We will try to respond
                            as soon as we can.{' '}
                        </p>
                    </div>
                </Row>
                <div class="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg
                        className="h-16 w-full text-gray-100"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </Section>
            <Section>
                <Row>
                    <div>Contact Us</div>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Footer />
                </Row>
            </Section>
        </>
    )
}

export default Contact
