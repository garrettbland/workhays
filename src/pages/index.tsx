import Image from 'next/image'
import workHaysLogo from '../../public/work-hays-logo.png'
import { useEnvironment } from '../hooks/useEnvironment'

const Home = () => {
    const { showDevBanner } = useEnvironment() ?? {}
    return (
        <div>
            {showDevBanner && <div className="bg-red-500 w-full p-2">DEVELOPMENT YO</div>}
            <h1>Ayoo</h1>
            <Image
                src={workHaysLogo}
                alt="Picture of the author"
                width={200}
                height={200}
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
        </div>
    )
}

export default Home
