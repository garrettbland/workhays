import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Link from 'next/link'

const Home = () => {
    return (
        <Layout>
            <Header title="Work haysss">
                <p>
                    Browse current job openings in Hays, KS and surrounding communities. Are you an
                    employer? Post your jobs for free,
                    <Link href="/register">
                        <a className="underline">click here to sign up!</a>
                    </Link>
                </p>
            </Header>
            <CurrentJobs />
        </Layout>
    )
}

const CurrentJobs = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div>Current Jobs</div>
        </div>
    )
}

export default Home
