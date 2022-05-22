import type { NextPage } from 'next'
import Box from '../assets/icons/box.png'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Find from '../assets/icons/find.png';
import Brand from '../assets/icons/brand.jpg';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.discountSection}>
          <div className={styles.discount}>
            <div>
              <Image src={Box} alt="delivery box" width={50} height={50} />
            </div>
            <p className={styles.discountTitle}>Free shipping on orders over $100</p>
          </div>
          <div className={styles.subsWrapper}>
            <div className={styles.subs}>
              <p>Don&apos;t miss out. <Link href='/'><b style={{ cursor: 'pointer' }}>Subscribe now!</b></Link></p>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <div>
              <p style={{ color: 'gold', fontSize: '25px' }}>StoreLogo</p>
            </div>
            <div className={styles.searchBar}>
              <div style={{ backgroundColor: 'black', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>
                <p style={{ color: 'white', margin: '15px' }}>All Products</p>
              </div>
              <div style={{ display: 'flex', backgroundColor: 'white', borderBottomRightRadius: '12px', borderTopRightRadius: '12px' }}>
                <div>
                  <input placeholder='Enter keywords' className={styles.input} />
                </div>
                <div style={{ paddingRight: '25px', alignSelf: 'center' }}>
                  <Image src={Find} alt='search iicon' />
                </div>
              </div>
            </div>
            <div className={styles.account}>
              <div style={{ borderRight: '1px solid gray', fontSize: '20px', color: 'white', fontWeight: '400', paddingRight: '15px', height: '30px', alignSelf: 'center' }}>Account</div>
              <div style={{ fontSize: '20px', color: 'white', fontWeight: '400', paddingLeft: '15px', height: '30px', alignSelf: 'center' }}>Right</div>
            </div>
          </div>

        </div>
        <div className={styles.promotionWrapper}>
          <div className={styles.promotionMain}>
            <div className={styles.textsWrapper}>
              <div className={styles.texts}>
                <p className={styles.promotionText}>25% off promotional sale</p>
                <p className={styles.promotionTitle}>All your body needs!</p>
                <p className={styles.promotionSemitext}>Beauty has no price! Whit this bundle we offer you the best price available at the market right now ! Do not miss it !</p>
              </div>
              <div>
                <button className={styles.btnStyle}>
                  Brows Products
                </button>
              </div>
            </div>
            <div style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
              <div className={styles.brandCard}>
                <Image src={Brand} width={1200} height={800} alt="brand picture" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
