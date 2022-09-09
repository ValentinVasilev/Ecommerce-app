import React, { useState, useEffect } from "react";
import styles from '../styles/header.component.module.scss';
import Link from "next/link";
import jwt from 'jsonwebtoken';
import Search from "./sub-components/search.component";
import CurrencyDropdown from "./sub-components/currency-dropdown.component";
import { useRouter } from "next/router";
import Account from "./sub-components/account.component";
import { useAppDispatch, useAppSelector } from "../utils/app/hooks";
import { selectAccount } from "../utils/app/features/account/accountSlice";
import LanguageSwitcher from "./sub-components/language-switcher";

const LinksArray = [
  {
    id: 0,
    title: 'All Categories',
    link: '/products'
  },
  {
    id: 1,
    title: 'Smartphones',
    link: '/products/smartphones'
  },
  {
    id: 2,
    title: 'Laptops',
    link: '/products/laptops'
  }
]

const Header = () => {

  const router = useRouter();

  // const [user, setUser] = useState()
  const [announcer, setAnnouncer] = useState<string>('')
  const [isLogged, setIsLogged] = useState<boolean>(true);
  // let storage = localStorage.getItem("user-credentials");
  // let user = jwt.decode(storage as string);

  const user = useAppSelector(selectAccount);

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
      {/* {
        router.pathname === '/' && (
          <div className={styles.announcementBar}>
            {announcer.length > 1 && (<p>{announcer}</p>)}
          </div>
        )
      } */}
      <div className={styles.announcementBar}>

        {LinksArray.map(link => {
          return (
            <Link key={link.id} href={link.link} passHref>
              <p className={styles.announceLinks}>{link.title}</p>
            </Link>
          )
        })}

      </div>
      <div className={styles.headerWrapper}>
        <div style={{ width: '100%', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', }}>
          <div className={styles.searchSection}>
            <Link href="/" passHref>
              <div style={{ display: 'flex', alignItems: 'end', cursor: 'pointer', fontWeight: 'bolder' }}>
                <p style={{ fontSize: '35px', alignSelf: 'flex-end', fontFamily: 'monospace' }}>E</p>
                <p style={{ fontSize: '50px', color: 'red', fontFamily: 'Montserrat' }}>com</p>
                <p style={{ fontSize: '35px', fontFamily: 'monospace' }}>M</p>
              </div>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

              {user.length > 0
                ? (<Account username={user[0]?.user.email} user={user[0]?.user} />)
                : (
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', minWidth: '300px' }}>

                    <Link href='/account/login' passHref>
                      <button className={styles.loginBtn}>Log In</button>
                    </Link>
                    <Link href='/account/signup' passHref>
                      <button className={styles.signBtn}>Sign up</button>
                    </Link>
                    <LanguageSwitcher />
                  </div>
                )}
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