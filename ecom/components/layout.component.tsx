import React from "react";
import Head from "next/head";
import Header from '../components/header.component';
import { useRouter } from 'next/router';

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ecom app</title>
      </Head>
      {router.pathname === '/' ? null : <Header />}
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout;