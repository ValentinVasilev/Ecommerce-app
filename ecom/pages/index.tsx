import React, { useState } from 'react'
import type { NextPage } from 'next'
import Box from '../assets/icons/box.png'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Find from '../assets/icons/find.png';
import Brand from '../assets/icons/brand.jpg';
import { CategoryCard } from '../components/category-card.component'
import CarouselComponent from '../components/carousel.component'
import DiscountCarouselComponent from '../components/discount-carousel.component'
import { PromotionCard } from '../components/promotions-card.component'
import SweaterImg from '../assets/pictures/sweater.png';
import SweaterIcon from '../assets/icons/sweater-icon.png';
import CosmeticIcon from '../assets/pictures/cosmetic.png';
import BeautyImg from '../assets/icons/beauty2.png';
import BikeIcon from '../assets/pictures/bike.png'
import BikeImg from '../assets/icons/bikePicture2.jpg'
import { Footer } from '../components/footer.component'
import Allproducts from '../assets/data/products';
import { Backdrop } from '@mui/material'
// import Register from '../components/sub-components/register.component'
import Login from '../components/sub-components/login.component'
import Announce from '../components/sub-components/announce.component'
import CategoryBox, { CategoryBoxProps } from '../components/sub-components/category-box.component'
import FavoritesCard, { FavoriteCardProps } from '../components/sub-components/favorites-card.component'
import CustomerFavorites from '../assets/data/customer-favorites'
import CategoryBoxData from '../assets/data/categoryBox';



const Home: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false)

  const [filterType, setFilterType] = useState<number>(1)


  const filterFavorites =
    filterType != 0
      ? CustomerFavorites.filter((item: any) => item.type === filterType)
      : CustomerFavorites.filter((item: any) => item.type === 1)

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <Announce />
        <div className={styles.categoryBoxWrapper}>
          {
            CategoryBoxData.map((item: CategoryBoxProps) => {
              return (
                <CategoryBox
                  key={item.id}
                  text={item.text}
                  image={item.image}
                  link={item.link}
                />
              )
            })
          }
        </div>
        <div className={styles.viewMoreContainer}>
          <Link href="/products" passHref>
            <button className={styles.viewMoreBtn}>View All</button>
          </Link>
        </div>
        <span style={{ backgroundColor: 'black', color: '#f19a4b', fontSize: '35px', fontFamily: 'cursive', textAlign: 'center', padding: '5vh 0vh' }}>Customers Favorites</span>
        <div className={styles.filterContainer}>
          <p className={styles.filterTitle}>Order by:</p>
          <button className={`${styles.filterBtn} ${filterType === 1 ? styles.active : styles.unactive}`} onClick={() => setFilterType(1)}>Bakery</button>
          <button className={`${styles.filterBtn} ${filterType === 2 ? styles.active : styles.unactive}`} onClick={() => setFilterType(2)}>Any</button>
        </div>
        <div style={{ backgroundColor: 'black', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            CustomerFavorites.filter((item: any) => item.type === filterType)
              .map((item: FavoriteCardProps) => {
                return (
                  <FavoritesCard
                    id={item.id}
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    isNew={item.isNew}
                    description={item.description}
                  />
                )
              })
          }
          {/* <FavoritesCard title='Card 1' price={200} />
          <FavoritesCard title='Card 2' price={300} isNew={true} />
          <FavoritesCard title='Card 3' price={400} />
          <FavoritesCard title='Card 4' price={500} /> */}
        </div>
        {/* <div className={styles.discountSection}>
          <div className={styles.discount}>
            <div>
              <Image src={Box} alt="delivery box" width={50} height={50} />
            </div>
            <p className={styles.discountTitle}>Free shipping on orders over $100</p>
          </div>
          <div className={styles.subsWrapper}>
            <div className={styles.subs}>
              <p>Don&apos;t miss out. <Link href='/'><b style={{ cursor: 'pointer' }}>Subscribe now!</b></Link></p>
            </div>
          </div>
        </div> */}
        {/* <div className={styles.header}>
          <div className={styles.headerInner}>
            <div>
              <p style={{ color: 'gold', fontSize: '25px' }}>StoreLogo</p>
            </div>
            <div className={styles.searchBar}>
              <div style={{ backgroundColor: 'black', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>
                <p style={{ color: 'white', margin: '15px' }}>All Products</p>
              </div>
              <div style={{ display: 'flex', backgroundColor: 'white', borderBottomRightRadius: '12px', borderTopRightRadius: '12px' }}>
                <div>
                  <input placeholder='Enter keywords' className={styles.input} />
                </div>
                <div style={{ paddingRight: '25px', alignSelf: 'center' }}>
                  <Image src={Find} alt='search iicon' />
                </div>
              </div>
            </div>
            <div className={styles.account}>
              <div style={{ borderRight: '1px solid gray', fontSize: '20px', color: 'white', fontWeight: '400', paddingRight: '15px', height: '30px', alignSelf: 'center' }}>
                <button onClick={handleToggle}>Account</button>
                <Backdrop
                  sx={{ zIndex: '999', display: 'flex', flexDirection: 'row' }}
                  open={open}
                // onClick={handleClose}
                >
                  <Register />
                  <Login />
                  <div style={{ marginTop: '-50vh' }}>
                    <button onClick={handleClose} style={{ border: '2px solid red', fontSize: '20px', borderRadius: '100px', backgroundColor: 'red', marginTop: '2vh', color: 'white', cursor: 'pointer' }}>X</button>
                  </div>
                </Backdrop>
              </div>
              <div style={{ fontSize: '20px', color: 'white', fontWeight: '400', paddingLeft: '15px', height: '30px', alignSelf: 'center' }}>Right</div>
            </div>
          </div>

        </div> */}
        {/* <div className={styles.promotionWrapper}>
          <div className={styles.promotionMain}>
            <div className={styles.textsWrapper}>
              <div className={styles.texts}>
                <p className={styles.promotionText}>25% off promotional sale</p>
                <p className={styles.promotionTitle}>All your body needs!</p>
                <p className={styles.promotionSemitext}>Beauty has no price! Whit this bundle we offer you the best price available at the market right now ! Do not miss it !</p>
              </div>
              <div>
                <Link href="/products" passHref>
                  <button className={styles.btnStyle}>
                    Brows Products
                  </button>
                </Link>
              </div>
            </div>
            <div style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
              <div className={styles.brandCard}>
                <Image src={Brand} width={1200} height={800} alt="brand picture" />
              </div>
            </div>
          </div>
        </div> */}


        {/* <div className={styles.productsWrapper}>
          <div className={styles.productsCarousel}>
            <CarouselComponent />
          </div>
        </div> */}

        {/* <div className={styles.discountWrapper}>
          <div className={styles.discountCarousel}>
            <div>
              <p className={styles.sectionsTitles}>Recent Discounts</p>
            </div>
            <div>
              <DiscountCarouselComponent />
            </div>
          </div>
        </div> */}

        {/* <div className={styles.activePromotionsWrapper}>
          <div className={styles.activePromotions}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className={styles.sectionsTitles}>Active Promotions</p>
              <Link href='/' passHref>
                <a className={styles.sectionsTitles2}>View All Promotions</a>
              </Link>
            </div>
            <div className={styles.cardContainer}>
              <PromotionCard title='Up to 25% off on all casual sweaters' img={SweaterImg} icon={SweaterIcon} isReverse={false} />
              <PromotionCard title='Up to 20% off on all beauty products' img={BeautyImg} icon={CosmeticIcon} isReverse={true} />
              <PromotionCard title='Exciting bike rides with amazing equipment' img={BikeImg} icon={BikeIcon} isReverse={false} />
            </div>
          </div>
        </div> */}
      </div>
      {/* <Footer /> */}

    </div >

    // <div className={styles.container}>
    //   <div className={styles.headlineContainer}>
    //   </div>
    // </div>
  )
}

export default Home

