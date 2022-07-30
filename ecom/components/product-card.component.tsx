import React, { useState } from "react";
import styles from '../styles/product-card.component.module.scss';
import Image, { StaticImageData } from 'next/image';
import { Button, Rating } from '@mui/material'
import Link from 'next/link';

type ProductCardProps = {
  title?: string,
  description?: string,
  price?: number,
  rating?: number,
  brand?: string,
  thumbnail: StaticImageData | string
  category: string,
  productId: any,
}


const ProductCard = (props: ProductCardProps) => {

  const { title, description, price, rating, brand, thumbnail, category, productId } = props;

  const [productRating, setProductRating] = useState<number | undefined>(rating)


  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <Link href={
          {
            pathname: "[category]/[id]",
            query: {
              category: category,
              id: productId,
            }
          }
        } as={`${category}/${productId}`}
          passHref
        >
          <button className={styles.viewMore}>View More</button>
        </Link>
        <div>
          <Image src={thumbnail} width={300} height={200} alt="product image" />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.description}>{description!.length >= 70 ? description?.slice(0, 70) + ' ...' : description}</p>
        <p className={styles.price}>$ {price}</p>
        {/* <p>{rating}</p> */}
        <div style={{ paddingBottom: '25px' }}>
          <Rating value={productRating} readOnly />
        </div>
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