import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import { Layout } from '@/components/Layout'
import { Lexend_Deca as LexendDeca } from 'next/font/google'

const lexend = LexendDeca({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
})

const WorkHaysApp = ({ Component, pageProps }: AppProps) => (
    <div className={lexend.className}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
)

export default WorkHaysApp
