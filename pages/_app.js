import { useEffect } from 'react'
import '@/styles/tailwind.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        console.info('check local storage for theme...')
    }, [])
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App
