import React, { useState, useEffect } from "react";
import styles from '../styles/header.component.module.scss';
import Link from "next/link";
import jwt from 'jsonwebtoken';
import Search from "./sub-components/search.component";
import CurrencyDropdown from "./sub-components/currency-dropdown.component";
import { useRouter } from "next/router";
import Account from "./sub-components/account.component";

const Header = () => {

  const router = useRouter();

  const [user, setUser] = useState()
  const [announcer, setAnnouncer] = useState<string>('')
  const [isLogged, setIsLogged] = useState<boolean>(true);
  // let storage = localStorage.getItem("user-credentials");
  // let user = jwt.decode(storage as string);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('You are on the browser')
      // 👉️ can use localStorage here
      // setUser(JSON.parse(localStorage?.getItem('login')))
    }
    setAnnouncer('Just a text to announce!')
    console.log(user)
  }, [])

  return (
    <div className={styles.headerContainer}>
      {
        router.pathname === '/' && (
          <div className={styles.announcementBar}>
            {announcer.length > 1 && (<p>{announcer}</p>)}
          </div>
        )
      }

      <div className={styles.headerWrapper}>
        <div style={{ width: '100%', backgroundColor: 'rgb(77, 36, 226)', display: 'flex', justifyContent: 'center' }}>
          <div className={styles.searchSection}>
            <Link href="/" passHref>
              <div style={{ display: 'flex', alignItems: 'end', cursor: 'pointer' }}>
                <p style={{ fontSize: '35px', alignSelf: 'flex-end', fontFamily: 'monospace' }}>E</p>
                <p style={{ fontSize: '50px', color: 'red', fontFamily: 'Montserrat' }}>com</p>
                <p style={{ fontSize: '35px', fontFamily: 'monospace' }}>M</p>
              </div>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', width: '10%', justifyContent: 'space-between', minWidth: '200px' }}>
              <div>
                <Link href='/account/log-in' passHref>
                  <button className={styles.loginBtn}>Log In</button>
                </Link>
              </div>
              <Link href='/account/sign-up' passHref>
                <button className={styles.signBtn}>Sign up</button>
              </Link>
            </div>

            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
              <Search />
            </div>
            <div style={{ alignSelf: 'center' }}><CurrencyDropdown /></div>
            <div style={{ alignSelf: 'center' }}>{isLogged ? <Account /> : <p>No user</p>}   </div>
            <div>Cart Component</div> */}
          </div>
        </div>
      </div>
      {/* <div className={styles.headerWrapper}>
        <div className={styles.infoSection}>
          <div>Brands</div>
          <div>Cloths</div>
          <div>Electronics</div>
          <div>Shoes</div>
        </div>
      </div> */}
    </div >
  )
}

export default Header;