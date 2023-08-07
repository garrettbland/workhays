import indexFile from './index.html'
import { Template } from '@architect/views/template'

export const handler = async (req) => {
    const result = Template(indexFile, {
        pageTitle: '404 Not Found | Work Hays',
    })
    return {
        statusCode: 404,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: result,
    }
}
