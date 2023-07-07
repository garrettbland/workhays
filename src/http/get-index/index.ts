export const handler = async () => {
    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: `
          <html>
            <head>
              <title>Work Hays</title>
            </head>
            <body>
              <h1>Work Hays</h1>
              <p>
                Hellooooooo
              </p> 
            </body>
          </html>
        `,
    }
}
