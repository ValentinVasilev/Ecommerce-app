import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '../styles/related-card.module.scss'
import Laptop from '../assets/icons/laptop-asus.png';

type RelatedProductsCardProps = {
  image?: StaticImageData,
  // image?: string | undefined,
  title?: string,
  info?: string,
  price?: number,
  isLiked?: boolean
}

const RelatedProductsCard = (props: RelatedProductsCardProps) => {


  const { title, price, info, image } = props;

  console.log('Related PRODUCT IMG =>', image)
  return (
    <div className={styles.cardContainer}>
      <div>
        <Image src={image} width={400} height={300} alt="product image" />
        {/* <img src={image} /> */}
      </div>
      <div className={styles.cardInfoStyle}>
        <p className={styles.title}>{title}</p>
        <p className={styles.info}>{info}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <p style={{ fontFamily: 'Montserrat', fontSize: '25px', color: 'green' }}>$</p>
          <p style={{ fontFamily: 'Montserrat', fontSize: '22px', color: 'gray' }}>{price}</p>
        </div>
      </div>
      <div>
        additional actions
      </div>
    </div >
  )
}

export default RelatedProductsCard;