import Image from 'next/image'
import workHaysLogo from '../../public/work-hays-logo.png'

const Home = () => {
    return (
        <div>
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
