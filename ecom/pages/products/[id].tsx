import React, { useEffect, useState } from "react";
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
import { prepareServerlessUrl } from "next/dist/server/base-server";

const Product = () => {

  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [compareProducts, setCompareProducts] = useState<[]>([]);
  let compareProducts = [''];

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

  const addToCompare = () => {
    // setCompareProducts(['1'])
    compareProducts.push('test product');
  }

  useEffect(() => {
    compareProducts
  }, [compareProducts])

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
                <button className={styles.compareBtn} onClick={() => addToCompare()}>
                  <div style={{ alignSelf: 'center', paddingRight: '2vh', paddingLeft: '2vh' }}>
                    <Image src={CompareIcon} alt="compare icon" />
                  </div>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '17px', paddingRight: '2vh' }}>Compare Products</p>
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>DESCRIPTION</p>
            <p>
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it?
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p></div>
          {compareProducts.length <= 0 ? (<p>Nothing to compare!</p>) : (
            <div>
              <p>Compare Products:</p>
              <div>{compareProducts.length}</div>
              {compareProducts.map((item) => {
                <div>{item}</div>
              })}
            </div>
          )}
        </div >
      </div >
    </div >
  )
}

export default Product;