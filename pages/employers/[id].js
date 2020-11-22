import Layout from '@/components/Layout'

const Employer = ({ data }) => {
    return (
        <Layout>
            <div>This is a dynamic page {data.employer_title}</div>
            <div>{data.employer_id}</div>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()
    console.log(context.params)
    const data = {
        employer_title: 'Walmart',
        employer_id: context.params.id,
    }

    // Pass data to the page via props
    return { props: { data } }
}

export default Employer
