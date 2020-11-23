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
            <div className="hidden md:grid grid-flow-col md:gap-2">
                {links.map(({ title, href }) => (
                    <Link href={href}>
                        <a className="px-3 py-2 rounded-lg hover:bg-gray-600">{title}</a>
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
            <div className="w-8 h-8 text-gray-500 rounded-lg bg-gray-100 flex items-center justify-center">
                <svg
                    className="w-full h-full p-1"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
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
