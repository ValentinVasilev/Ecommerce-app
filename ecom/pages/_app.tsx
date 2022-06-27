import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout.component'
import { Provider } from 'react-redux'
import { store } from '../utils/app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
