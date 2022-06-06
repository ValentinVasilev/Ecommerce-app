import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '../styles/related-card.module.scss'
import Laptop from '../assets/icons/laptop-asus.png';

type RelatedProductsCardProps = {
  image?: StaticImageData,
  title?: string,
  info?: string,
  price?: number,
  isLiked?: boolean
}

const RelatedProductsCard = (props: RelatedProductsCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <Image src={Laptop} width={400} height={300} alt="product image" />
      </div>
      <div className={styles.cardInfoStyle}>
        <p className={styles.title}>Title</p>
        <p className={styles.info}>Info</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <p style={{ fontFamily: 'Montserrat', fontSize: '25px', color: 'green' }}>$</p>
          <p style={{ fontFamily: 'Montserrat', fontSize: '22px', color: 'gray' }}>Price</p>
        </div>
      </div>
      <div>
        additional actions
      </div>
    </div >
  )
}

export default RelatedProductsCard;