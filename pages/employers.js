import Layout from '@/components/Layout'
import Header from '@/components/Header'

const Employers = () => {
    return (
        <Layout>
            <Header title="Employers" />
            <CurrentEmployers />
        </Layout>
    )
}

const CurrentEmployers = () => {
    return (
        <div>
            <div>Current Employers</div>
        </div>
    )
}

export default Employers
