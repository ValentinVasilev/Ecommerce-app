import React from "react";
import { useRouter } from "next/router";
import ProductCarouselComponent from "../../components/product-carousel.component";
import styles from '../../styles/product.module.scss';
import { Rating } from "@mui/material";
import Image from "next/image";
import FaceBookIcon from '../../assets/icons/facebook.png';
import LinkedInIcon from '../../assets/icons/linkedin.png';
import TwitterIcon from '../../assets/icons/twitter.png';
import SkypeIcon from '../../assets/icons/skype.png';
import InstagramIcon from '../../assets/icons/instagram.png';

const Product = () => {

  const router = useRouter();

  return (
    <div className={styles.productContainer}>
      <div className={styles.productWrapper}>
        <div className={styles.carouselContainer}>
          <ProductCarouselComponent />
          <div className={styles.socialContainer}>
            <div>
              <Image src={FaceBookIcon} alt="facebook icon" width={40} height={40} />
            </div>
            <div>
              <Image src={LinkedInIcon} alt="linkedin icon" width={40} height={40} />
            </div>
            <div>
              <Image src={TwitterIcon} alt="twitter icon" width={40} height={40} />
            </div>
            <div>
              <Image src={SkypeIcon} alt="skype icon" width={40} height={40} />
            </div>
            <div>
              <Image src={InstagramIcon} alt="instagram icon" width={40} height={40} />
            </div>
          </div>
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