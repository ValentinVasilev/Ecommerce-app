import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductCarouselComponent from "../../../../components/product-carousel.component";
import styles from '../../../../styles/product.module.scss';
import { Rating } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import FaceBookIcon from '../../../../assets/icons/facebook.png';
import LinkedInIcon from '../../../../assets/icons/linkedin.png';
import TwitterIcon from '../../../../assets/icons/twitter.png';
import SkypeIcon from '../../../../assets/icons/skype.png';
import InstagramIcon from '../../../../assets/icons/instagram.png';
import ShieldIcon from '../../../../assets/icons/shield2.png';
import AddedToWishlist from '../../../../assets/icons/added-to-wishlist.png'
import AddToWishlist from '../../../../assets/icons/add-to-favorites.png'
import CompareIcon from '../../../../assets/icons/compare.png';
import AllProducts from '../../../../assets/data/products';
import { useAppDispatch, useAppSelector } from "../../../../utils/app/hooks";
import { selectAccount, addToCart } from '../../../../utils/app/features/account/accountSlice';
import ProductCard from '../../../../components/product-card.component'


type ProductType = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}


const Product = () => {
  const router = useRouter();

  let id = Number(router.query.id);

  const [getProductById, setGetProductById] = useState<ProductType>();
  const product = getProductById;

  const [productRating, setProductRating] = useState<number | undefined>(product?.rating);
  const [relatedProducts, setRelatedProducts] = useState<string | undefined>();

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectAccount)

  console.log("USER", user)
  useEffect(() => {
    setGetProductById(AllProducts?.find(productTitle => productTitle.id === id));
    setRelatedProducts(
      AllProducts
        .filter(items => items.category === product?.category)
        .filter(prod => prod?.title != product?.title)
        .slice(0, 4));
    // setProductRating(product?.rating)
  }, [id, product?.category, product?.title])


  // console.log('single product =>', getProductById);
  // console.log('rating', Number(product?.rating.toPrecision(2)))
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState([]);
  const [numberId, setNumberId] = useState<number>(0);

  let rating = product?.rating;

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
    // compareProducts.push({ id: 123, value: 'test product2' });
    // setItems((pervState: any) => ({ ...pervState, 'new' }))
    setNumberId(() => numberId + 1);
    setItems((prevState: any) => ([...prevState, `${product?.title} ${numberId}`]))
    // items?.push('test!')
  }

  useEffect(() => {
    console.log('Items Changed! ==>', items);

  }, [items])


  const addProductToCart = () => {
    console.log(getProductById);
    dispatch(addToCart(getProductById))
    console.log(user)
  }

  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productWrapper}>
          <div className={styles.carouselContainer}>
            <ProductCarouselComponent link={product?.images} />
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
              <p className={styles.productTitle}>{product?.title}</p>
              <p>{product?.brand}</p>
              <div style={{ display: 'flex', marginTop: '-3vh' }}>
                <div style={{ alignSelf: 'center' }}>
                  <Rating name="half-rating-read" value={productRating} precision={0.5} readOnly />

                  {/* <p>{Number(product?.rating.toPrecision(2))}</p> */}
                </div>
                <p className={styles.reviewStyle}>(3 Reviews) </p>
              </div>
              <p className={styles.priceTagStyle}>$$ {product?.price}</p>
              <p>Quantity ={">"} {product?.stock}</p>
              <div>
                <button className={styles.addButton} onClick={() => addProductToCart()}>Add to Cart</button>
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
                    {
                      items.includes(product?.title as never) ? (
                        <p style={{ fontFamily: 'Montserrat', fontSize: '17px', paddingRight: '2vh' }}>In compare list</p>
                      ) : (
                        <p style={{ fontFamily: 'Montserrat', fontSize: '17px', paddingRight: '2vh' }}>Compare Products</p>
                      )
                    }

                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>DESCRIPTION</p>
              <p>
                {product?.description}
              </p></div>
            {items.length <= 0 ? (<p>Nothing to compare!</p>) : (

              <div>
                <p>Compare Products:</p>
                <div>{items.length}</div>
                {/* {compareProducts.map((item) => {
                <div>{item}</div>
              })} */}
                {items?.map((product: any) => {
                  return <p key={product}>{product}</p>
                })}
              </div>
            )}
          </div >
        </div >
      </div >
      <div className={styles.relatedCardsContainer}>
        <div className={styles.cardsWrapper}>
          {
            relatedProducts?.map((item: any) => {
              return (
                <ProductCard
                  key={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  brand={item.brand}
                  rating={item.rating}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Product;