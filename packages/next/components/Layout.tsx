import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main className={'max-w-4xl mx-auto px-5 py-14 relative z-10'}>{children}</main>
            <Footer />
        </div>
    )
}

/**
 * Component that wraps single max width class
 */
export const MaxContentWidth = ({ children }: { children: ReactNode }) => (
    <div className="max-w-xl">{children}</div>
)
