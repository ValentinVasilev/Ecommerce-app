import React, { useState } from "react";
import styles from '../styles/product-card.component.module.scss';
import Image, { StaticImageData } from 'next/image';
import { Button, Rating } from '@mui/material'
import Link from 'next/link';
import { useAppDispatch } from "../utils/app/hooks";
import { addToCart } from "../utils/app/features/account/accountSlice";


type ProductCardProps = {
  title?: string,
  description?: string,
  price?: number,
  rating?: number,
  brand?: string,
  thumbnail: StaticImageData | string
  category?: string,
  productId?: any,
  count?: any,
  isRelatedPoducts?: boolean,
}


const ProductCard = (props: ProductCardProps) => {

  const { title, description, price, rating, brand, thumbnail, category, productId, count, isRelatedPoducts } = props;

  const [productRating, setProductRating] = useState<number | undefined>(rating)

  const dispatch = useAppDispatch();

  const cardProps = {
    thumbnail: thumbnail,
    title: title,
    count: count,
    refId: productId,
    price: price,
    category: category,
  }

  const addProductToCart = (cardInfo: any) => {
    dispatch(addToCart(cardInfo))
  }



  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        {
          isRelatedPoducts
            ? (<Link
              href={
                {
                  pathname: "/products/[productCategory]/[id]",
                  query: {
                    productCategory: category,
                    id: productId,
                  }
                }
              } as={`/products/${category}/${productId}`} key={productId}
              passHref>
              <button className={styles.viewMore}>View More</button>
            </Link>)
            : (<Link href={
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
            </Link>)
        }
        <div>
          <Image src={thumbnail} width={300} height={200} alt="product image" />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.description}>{description!.length >= 60 ? description?.slice(0, 60) + ' ...' : description}</p>
        <p className={styles.price}>$ {price}</p>
        <div style={{ paddingBottom: '25px', display: 'flex', alignItems: 'center' }}>
          <Rating value={productRating} readOnly precision={0.5} />
          <p>({productRating})</p>
        </div>
        <Button
          variant="contained"
          color="warning"
          className={styles.addButton}
          onClick={() => addProductToCart(cardProps)}
        >Add to cart</Button>
      </div>
    </div >

  )
}

export default ProductCard;