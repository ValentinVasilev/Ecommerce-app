import React from "react";
import styles from '../styles/product-card.component.module.scss';
import Image, { StaticImageData } from 'next/image';

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

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{rating}</p>
        <p>{brand}</p>
        <Image src={thumbnail} width={300} height={200} alt="product image" />
      </div>
    </div>

  )
}

export default ProductCard;