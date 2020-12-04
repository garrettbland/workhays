import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const links = [
    {
        title: 'Jobs',
        href: '/',
    },
    {
        title: 'Employers',
        href: '/employers',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
    {
        title: 'Login',
        href: '/login',
    },
    {
        title: 'Register',
        href: '/register',
    },
]

const Navbar = () => {
    return (
        <div className="py-4">
            <DesktopNavbar />
            <MobileNavbar />
        </div>
    )
}

const DesktopNavbar = () => {
    const router = useRouter()
    return (
        <div className="hidden md:flex justify-between items-center py-4">
            <LogoTitle />
            <div className="hidden md:grid grid-flow-col md:gap-3">
                {links.map(({ title, href }, index) => (
                    <Link key={index} href={href}>
                        <a
                            className={`py-2 px-3 text-sm font-medium hover:bg-white hover:shadow hover:text-blue-500 transition ease-in-out duration-75 rounded ${
                                router.pathname === href
                                    ? 'bg-white text-blue-500 shadow'
                                    : 'text-white'
                            }`}
                        >
                            {title}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const MobileNavbar = () => {
    const [isMenuShowing, setMenu] = useState(false)

    return (
        <>
            <div className="flex md:hidden justify-between items-center relative">
                <LogoTitle />
                <button
                    onClick={() => setMenu(!isMenuShowing)}
                    className="fixed top-0 right-0 z-50 m-4 w-10 h-10 text-blue-500 rounded-lg bg-white shadow flex items-center justify-center overflow-hidden focus:outline-none"
                >
                    <svg
                        className="w-full h-full p-2 shadow-inner"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line
                            x1="18"
                            y1="6"
                            x2="6"
                            y2="18"
                            className={`transition duration-150 ${
                                isMenuShowing ? 'opacity-100' : 'opacity-0'
                            }`}
                        ></line>
                        <line
                            x1="6"
                            y1="6"
                            x2="18"
                            y2="18"
                            className={`transition duration-150 ${
                                isMenuShowing ? 'opacity-100' : 'opacity-0'
                            }`}
                        ></line>
                        <line
                            x1="3"
                            y1="12"
                            x2="21"
                            y2="12"
                            className={`transition duration-150 ${
                                isMenuShowing ? 'opacity-0' : 'opacity-100'
                            }`}
                        ></line>
                        <line
                            x1="3"
                            y1="6"
                            x2="21"
                            y2="6"
                            className={`transition duration-150 ${
                                isMenuShowing ? 'opacity-0' : 'opacity-100'
                            }`}
                        ></line>
                        <line
                            x1="3"
                            y1="18"
                            x2="21"
                            y2="18"
                            className={`transition duration-150 ${
                                isMenuShowing ? 'opacity-0' : 'opacity-100'
                            }`}
                        ></line>
                    </svg>
                </button>
            </div>
            <div
                style={{ backdropFilter: 'blur(20px)' }}
                className={`fixed md:hidden top-0 left-0 w-screen h-screen transition duration-150 bg-black bg-opacity-40 ${
                    isMenuShowing ? 'opacity-100 z-30' : 'opacity-0 hidden'
                }`}
            ></div>
            <div
                className={`fixed md:hidden top-0 left-0 z-40 w-2/3 bg-white h-screen transform transition duration-200 ease-in-out shadow-lg ${
                    isMenuShowing ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-4">
                    <div className="text-xl font-black">Menu</div>
                </div>
            </div>
        </>
    )
}

const LogoTitle = () => {
    return (
        <Link href="/">
            <a className="flex flex-row items-center">
                <div className="w-6 h-6 text-indigo-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -24 480 480">
                        <path
                            fill="currentColor"
                            d="M456 72H352V40c-.027-22.082-17.918-39.973-40-40H168c-22.082.027-39.973 17.918-40 40v32H24C10.746 72 0 82.746 0 96v178.078a24.105 24.105 0 0016 22.586V408c0 13.254 10.746 24 24 24h400c13.254 0 24-10.746 24-24V296.672a24.113 24.113 0 0016-22.594V96c0-13.254-10.746-24-24-24zM144 40c0-13.254 10.746-24 24-24h144c13.254 0 24 10.746 24 24v32h-16V40a8 8 0 00-8-8H168a8 8 0 00-8 8v32h-16zm160 32H176V48h128zm144 336a8 8 0 01-8 8H40a8 8 0 01-8-8V299.414l176 24.274V344c0 13.254 10.746 24 24 24h16c13.254 0 24-10.746 24-24v-20.313l176-24.273zm-192-64a8 8 0 01-8 8h-16a8 8 0 01-8-8v-48a8 8 0 018-8h16a8 8 0 018 8zm208-69.922a8 8 0 01-6.879 7.93l-2.219.305L272 307.534V296c0-13.254-10.746-24-24-24h-16c-13.254 0-24 10.746-24 24v11.535L22.887 282.008a8.001 8.001 0 01-6.887-7.93V96a8 8 0 018-8h432a8 8 0 018 8zm0 0"
                        />
                    </svg>
                </div>
                <div className="text-white">
                    <span className="ml-3 font-bold">Work</span>
                    <span>Hays</span>
                </div>
            </a>
        </Link>
    )
}

export default Navbar
