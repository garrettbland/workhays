import mdx from '@next/mdx'

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})

/**
 * Adds rewrite as a proxy for all api routes. That way we can access the API endpoints
 * via "https://workhays.com/api/blah/blah".
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:route*',
                destination: 'http://localhost:3333/:route*',
            },
        ]
    },
    reactStrictMode: true,
    pageExtensions: ['tsx', 'jsx', 'md', 'mdx'],
}

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

/**
 * Adds rewrite as a proxy for all api routes. That way we can access the API endpoints
 * via "https://workhays.com/api/blah/blah".
 */
// export default withMDX({
//     async rewrites() {
//         return [
//             {
//                 source: '/api/:route*',
//                 destination: 'http://localhost:3333/:route*',
//             },
//         ]
//     },
//     reactStrictMode: true,
//     pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
// })
