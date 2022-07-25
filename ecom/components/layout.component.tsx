import React from "react";
import Head from "next/head";
import Header from '../components/header.component';
import { Footer } from "./footer.component";
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
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout;