import React from "react";
import { useRouter } from "next/router";
import ProductCarouselComponent from "../../components/product-carousel.component";
import styles from '../../styles/product.module.scss';


const Product = () => {

  const router = useRouter();

  return (
    <div className={styles.productContainer}>
      <div className={styles.productWrapper}>
        <div className={styles.carouselContainer}>
          <ProductCarouselComponent />
        </div>
        <div>2</div>
      </div>
    </div>
  )
}

export default Product;