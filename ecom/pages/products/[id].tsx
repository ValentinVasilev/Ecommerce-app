import React, { useState } from "react";
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
import ShieldIcon from '../../assets/icons/shield2.png';
import AddedToWishlist from '../../assets/icons/added-to-wishlist.png'
import AddToWishlist from '../../assets/icons/add-to-favorites.png'
import CompareIcon from '../../assets/icons/compare.png';

const Product = () => {

  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const AddToWish = () => {

    setIsLoading(!isLoading)

    if (!isLoading) {
      setTimeout(() => {
        setIsAdded(!isAdded);
      }, 2000)

    } else {
      setIsAdded(!isAdded);

    }

  }

  const router = useRouter();

  return (
    <div className={styles.productContainer}>
      <div className={styles.productWrapper}>
        <div className={styles.carouselContainer}>
          <ProductCarouselComponent />
          <div className={styles.socialContainer}>
            <a className={styles.socialLinks}>
              <Image src={FaceBookIcon} alt="facebook icon" width={40} height={40} />
            </a>
            <a className={styles.socialLinks}>
              <Image src={LinkedInIcon} alt="linkedin icon" width={40} height={40} />
            </a>
            <a className={styles.socialLinks}>
              <Image src={TwitterIcon} alt="twitter icon" width={40} height={40} />
            </a>
            <a className={styles.socialLinks}>
              <Image src={SkypeIcon} alt="skype icon" width={40} height={40} />
            </a>
            <a className={styles.socialLinks}>
              <Image src={InstagramIcon} alt="instagram icon" width={40} height={40} />
            </a>
          </div>
        </div>
        <div className={styles.productInfoContainer}>
          <div>
            <p className={styles.productTitle}>Product Title</p>
            <div style={{ display: 'flex', marginTop: '-3vh' }}>
              <div style={{ alignSelf: 'center' }}>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
              </div>
              <p className={styles.reviewStyle}>(3 Reviews) </p>
            </div>
            <p className={styles.priceTagStyle}>$$ Price tag</p>
            <p>Quantity ={">"} Must be dropdown</p>
            <div>
              <button className={styles.addButton}>Add to Cart</button>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <div style={{ display: 'flex' }}>
              <div style={{ alignSelf: 'center', paddingRight: '2vh' }}>
                <Image src={ShieldIcon} alt="shield icon" />
              </div>
              <p className={styles.secureShipping}>Secure shopping, free returns.</p>
            </div>
            <div className={styles.productManagementContainer}>
              <div className={styles.addToWishlist}>
                <button className={styles.addToWishBtn} onClick={() => AddToWish()}>
                  {isAdded ? (
                    <>
                      <div style={{ alignSelf: 'center', paddingRight: '2vh' }}>
                        <Image src={AddedToWishlist} alt="added to wishlist" />
                      </div>
                      <p style={{ fontFamily: 'Montserrat', fontSize: '17px', paddingRight: '2vh' }}>This product is in your wishlist</p></>
                  ) : (
                    <>
                      <div style={{ alignSelf: 'center', paddingRight: '2vh' }}>
                        <Image src={AddToWishlist} alt="add to wishlist" />
                      </div>
                      {
                        isLoading ? (
                          <p style={{ fontFamily: 'Montserrat', fontSize: '17px', paddingRight: '2vh' }}>Loading ...</p>

                        ) : (
                          <p style={{ fontFamily: 'Montserrat', fontSize: '17px', paddingRight: '2vh' }}>Add to wishlist</p>
                        )
                      }
                    </>
                  )}

                </button>
              </div>
              <div className={styles.comparePoduct}>
                <button className={styles.compareBtn}>
                  <div style={{ alignSelf: 'center', paddingRight: '2vh', paddingLeft: '2vh' }}>
                    <Image src={CompareIcon} alt="compare icon" />
                  </div>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '17px', paddingRight: '2vh' }}>Compare Products</p>
                </button>
              </div>
            </div>
          </div>
        </div >
      </div >
      <div><p>123</p></div>
    </div >
  )
}

export default Product;