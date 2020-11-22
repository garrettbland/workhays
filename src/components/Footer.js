import { version } from '../../package.json'

const Footer = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <div>Footer</div>
                <div>Version: {version}</div>
            </div>
        </div>
    )
}

export default Footer
