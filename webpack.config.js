const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const fs = require('fs')

const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: ['./views/**/*.ejs'],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

// get version from version file
let rawdata = fs.readFileSync('./version.json')
let versionFile = JSON.parse(rawdata)
let version = versionFile.version

var config = {
    context: __dirname + '/src', // `__dirname` is root of project and `/src` is source
    entry: {
        app: './main.js',
    },
    output: {
        path: __dirname + '/public/dist', // `/dist` is the destination
        filename: `bundle.${version}.js`, // bundle created by webpack it will contain all our app logic. we will link to this .js file from our html page.
    },
    optimization: {
        minimize: process.env.NODE_ENV === 'production' ? true : false,
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.js$/, // rule for .js files
                exclude: /node_modules/,
                loader: 'babel-loader', // apply this loader for js files
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer'),
                                ...(process.env.NODE_ENV === 'production'
                                    ? [purgecss]
                                    : []),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: `app.${version}.css`,
        }),
    ],
}

module.exports = config
