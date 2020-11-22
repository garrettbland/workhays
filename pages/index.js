import Layout from '@/components/Layout'
import Header from '@/components/Header'

const Home = () => {
    return (
        <Layout>
            <Header title="Work haysss" />
            <CurrentJobs />
        </Layout>
    )
}

const CurrentJobs = () => {
    return (
        <div>
            <div>Current Jobs</div>
        </div>
    )
}

export default Home
