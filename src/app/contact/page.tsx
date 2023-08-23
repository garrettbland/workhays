const getData = async () => {
    return {
        name: 'garrett',
    }
}

const Contact = async () => {
    const res = await getData()
    return (
        <div>
            Contact Us!!! {res.name} <div>{JSON.stringify(res, null, 4)}</div>
        </div>
    )
}

export default Contact
