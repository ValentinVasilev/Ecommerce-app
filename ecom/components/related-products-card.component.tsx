import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '../styles/related-card.module.scss'
import ShopingCart from '../assets/icons/shoping-cart.png';
import AddToFavorite from '../assets/icons/add-to-favorites.png';
import { Button } from '@mui/material';


type RelatedProductsCardProps = {
  image: StaticImageData | string,
  // image?: string | undefined,
  title?: string,
  info?: string,
  price?: number,
  isLiked?: boolean
}

const RelatedProductsCard = (props: RelatedProductsCardProps) => {


  const { title, price, info, image } = props;

  return (
    <div className={styles.cardContainer}>
      <div style={{ textAlign: 'center' }}>
        <Image src={image} width={400} height={300} alt="product image" />
        {/* <img src={image} /> */}
      </div>
      <div className={styles.cardInfoStyle}>
        <p className={styles.title}>{title}</p>
        <p className={styles.info}>{info}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '91%' }}>
          <p style={{ fontFamily: 'Montserrat', fontSize: '28px', color: 'green', marginRight: '15px' }}>$</p>
          <p style={{ fontFamily: 'Montserrat', fontSize: '28px', color: 'gray' }}>{price}</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2vh' }}>
        <div>
          <Button variant="outlined" color="success">
            <Image src={AddToFavorite} alt="add to favorite" />
          </Button>
        </div>
        <div>
          <Button variant="contained" color="success"
            sx={{
              minWidth: '200px'
            }}
          >
            <Image src={ShopingCart} alt="shoping cart" />
          </Button>
        </div>
      </div>
    </div >
  )
}

export default RelatedProductsCard;