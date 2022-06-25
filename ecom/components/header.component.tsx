import React, { useState, useEffect } from "react";
import styles from '../styles/header.component.module.scss';
import Link from "next/link";
import jwt from 'jsonwebtoken';

const Header = () => {

  const [user, setUser] = useState()


  // let storage = localStorage.getItem("user-credentials");
  // let user = jwt.decode(storage as string);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('You are on the browser')
      // 👉️ can use localStorage here
      setUser(JSON.parse(localStorage?.getItem('login')))
    }

    console.log(user)
  }, [])
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.leftSide}>
          <Link href='/' passHref>
            <p className={styles.storeTitle}>Store Name</p>
          </Link>
          <Link href='/products' passHref>
            <p className={styles.titles}>Products</p>
          </Link>

          <p className={styles.titles}>About us</p>
          <p className={styles.titles}>Portfolio</p>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.storePhone}>555-555-555</p>
          <p style={{ alignSelf: 'center' }}>
            {user ? (user?.email) : (null)}
          </p>
          <div style={{ alignSelf: 'center' }}>
            <input placeholder="Search product" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;