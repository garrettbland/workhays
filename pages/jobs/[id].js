import Layout from '@/components/Layout'

const Job = ({ data }) => {
    return (
        <Layout>
            <div>This is a dynamic page {data.job_title}</div>
            <div>{data.job_id}</div>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()
    console.log(context.params)
    const data = {
        job_title: 'Retail Sales Associate',
        job_id: context.params.id,
    }

    // Pass data to the page via props
    return { props: { data } }
}

export default Job
