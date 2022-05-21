import type { NextPage } from 'next'
import Box from '../assets/icons/box.png'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

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
        <div>Header</div>
      </div>
    </div>
  )
}

export default Home
