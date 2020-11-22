import Link from 'next/link'

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
        <div className="py-4 px-4 md:px-4 lg:px-0">
            <DesktopNavbar />
            <MobileNavbar />
        </div>
    )
}

const DesktopNavbar = () => {
    return (
        <div className="hidden md:flex max-w-4xl mx-auto justify-between items-center">
            <LogoTitle />
            <div className="hidden md:grid grid-flow-col md:gap-4">
                {links.map(({ title, href }) => (
                    <Link href={href}>
                        <a>{title}</a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const MobileNavbar = () => {
    return (
        <div className="flex md:hidden justify-between items-center">
            <LogoTitle />
            <div className="flex flex-row items-center">
                <span className="w-5 h-5 text-red-500">
                    <svg
                        viewBox="0 0 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                    >
                        <g stroke="none" stroke-width="1" fill="inherit" fill-rule="evenodd">
                            <g id="icon-shape">
                                <path
                                    d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z"
                                    id="Combined-Shape"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </span>
            </div>
        </div>
    )
}

const LogoTitle = () => {
    return (
        <Link href="/">
            <a className="flex flex-row items-center">
                <img
                    className="h-6 w-auto"
                    src="./images/work-hays-logo.svg"
                    alt="Work Hays Logo"
                />
                <div>
                    <span className="ml-3 font-bold">Work</span>
                    <span>Hays</span>
                </div>
            </a>
        </Link>
    )
}

export default Navbar
