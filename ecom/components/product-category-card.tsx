import React from "react";
import styles from '../styles/product-category-card.module.scss';
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

type CardProps = {
  category: string,
  categoryImage: StaticImageData
}

const ProductCategoryCard = (props: CardProps) => {

  const { category, categoryImage } = props;

  return (
    <div className={styles.cardContainer}>
      <div>
        <Image src={categoryImage} alt="category image" width={300} height={200} />
      </div>
      <div style={{ textAlign: 'center', fontFamily: 'Montserrat', fontSize: '25px', textTransform: 'capitalize', fontWeight: '500' }}>
        <p className={styles.productTitle}>{category}</p>
      </div>
      <div>
        <div style={{ textAlign: 'center', margin: '1vh' }}>
          <Link href={
            {
              pathname: "products/category",
              query: {
                id: category,
              }
            }
          } as={`products/${category}`} key={category}
            passHref
          >
            <button className={styles.button}>View More</button>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default ProductCategoryCard;