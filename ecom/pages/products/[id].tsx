import React from "react";
import { useRouter } from "next/router";
import ProductCarouselComponent from "../../components/product-carousel.component";
import styles from '../../styles/product.module.scss';
import { Rating } from "@mui/material";


const Product = () => {

  const router = useRouter();

  return (
    <div className={styles.productContainer}>
      <div className={styles.productWrapper}>
        <div className={styles.carouselContainer}>
          <ProductCarouselComponent />
        </div>
        <div className={styles.productInfoContainer}>
          <p className={styles.productTitle}>Product Title</p>
          <div style={{ display: 'flex', marginTop: '-3vh' }}>
            <div style={{ alignSelf: 'center' }}>
              <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            </div>
            <p style={{ alignSelf: 'center', fontFamily: 'Montserrat', color: 'gray' }}>(3 Reviews) </p>
          </div>
          <p style={{ color: 'green', fontFamily: 'Montserrat', fontSize: '25px', marginTop: '-3px', fontWeight: 'bold' }}>$$ Price tag</p>
          <p>Quantity ={">"} Must be dropdown</p>
          <div>
            <button className={styles.addButton}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;