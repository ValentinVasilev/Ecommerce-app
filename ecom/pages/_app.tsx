import '../styles/globals.scss'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/layout.component'
import { Provider } from 'react-redux'
import { store } from '../utils/app/store';
import jwt from 'jsonwebtoken'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import Home from './index';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [user, setUser] = useState<any>();

  let getCookie = cookie.get('user');

  let decodeUser = jwt.decode(getCookie);

  let role = user?.isAdmin;
  let allowed = true;

  useEffect(() => {
    setUser(decodeUser)
  }, [])


  if (router.pathname.includes('/admin') && role !== true) {
    allowed = false;
  }

  const ComponentToRender = allowed ? Component : Nopermisions;

  return (
    <Provider store={store}>
      <Layout>
        <ComponentToRender {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp

const Nopermisions = () => {

  const router = useRouter()

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 3000)
  // }, [])


  return (
    <div style={{ height: '500px', backgroundColor: 'red', color: 'black', fontSize: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>Access Denied!</div>
  )
}