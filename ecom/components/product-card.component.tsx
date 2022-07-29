import React, { useState } from "react";
import styles from '../styles/product-card.component.module.scss';
import Image, { StaticImageData } from 'next/image';
import { Button, Rating } from '@mui/material'

type ProductCardProps = {
  title?: string,
  description?: string,
  price?: number,
  rating?: number,
  brand?: string,
  thumbnail: StaticImageData | string
}


const ProductCard = (props: ProductCardProps) => {

  const { title, description, price, rating, brand, thumbnail } = props;

  const [productRating, setProductRating] = useState<number | undefined>(rating)


  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div>
          <Image src={thumbnail} width={300} height={200} alt="product image" />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.description}>{description?.length >= 70 ? description?.slice(0, 70) + ' ...' : description}</p>
        <p className={styles.price}>$ {price}</p>
        {/* <p>{rating}</p> */}
        <div style={{ paddingBottom: '25px' }}>
          <Rating value={productRating} readOnly />
        </div>
        {/* <button className={styles.addButton}>Add to cart</button> */}
        <Button
          variant="contained"
          color="warning"
          className={styles.addButton}
        >Add to cart</Button>
      </div>
    </div>

  )
}

export default ProductCard;