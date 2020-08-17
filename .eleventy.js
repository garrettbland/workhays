const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
    /**
     * Custom tag to use render to match updated liquid api
     */
    eleventyConfig.addLiquidTag('render', function (liquidEngine) {
        return {
            parse: function (tagToken, remainingTokens) {
                // retrieves file name & stores in 'str' key
                // Example usage {% render 'head.liquid' %}
                this.str = tagToken.args
            },
            render: function (scope, hash) {
                // Takes in filename argument and removes file extension & quotes
                var fileName = this.str
                    .replace('.liquid', '')
                    .slice(1, -1)

                // render file using liquidEngine that ships with netlify
                var body = liquidEngine.renderFile(fileName, {})

                // Once rendered, resolve the promise to continue with build
                return Promise.resolve(body)
            },
        }
    })

    /**
     * Pass public folder to top level of dist
     */
    eleventyConfig.addPassthroughCopy({ public: '/' })

    /**
     * Minify HTML
     */
    eleventyConfig.addTransform('htmlmin', function (
        content,
        outputPath
    ) {
        if (outputPath.endsWith('.html')) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
            return minified
        }
    })

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src/pages',
            includes: '../functions/_includes',
            layouts: '../functions/_includes',
            data: '../_data',
            output: 'dist',
        },
    }
}
