import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import { Inter } from 'next/font/google'

/**
 * We are using Next JS's built in font optimization which gets bundled
 * in at build time. This means it's self hosted and no external network
 * calls are made to Google at runtime
 *
 * https://nextjs.org/docs/basic-features/font-optimization
 */
const inter = Inter({ subsets: ['latin'] })

const WorkHaysApp = ({ Component, pageProps }: AppProps) => (
    <main className={inter.className}>
        <Component {...pageProps} />
    </main>
)

export default WorkHaysApp
