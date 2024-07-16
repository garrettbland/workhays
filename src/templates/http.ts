import { Template } from '@architect/views/template'

export const handler = async (req) => {
    const exampleHtml = `<h1>Hello!</h1>`
    const result = Template(exampleHtml, {
        pageTitle: 'New HTTP',
    })
    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: result,
    }
}
