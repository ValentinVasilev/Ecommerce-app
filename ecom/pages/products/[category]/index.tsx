import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ProductsList from "../../../assets/data/products";
import Link from "next/link";
import styles from '../../../styles/sub-components/card-by-category.module.scss';

const Category = () => {

  const router = useRouter();

  const productCategory = router.query.category;

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#213236',
      padding: '0vh 1vh 0vh 1vh'
    }}>
      {ProductsList
        .filter(category => category.category === productCategory)
        .map(product => {
          return (
            <div key={product.id} className={styles.cardContainer}>
              <div className={styles.cardInfoStyle}>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.info}>{product.description}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '28px', color: 'green', marginRight: '15px' }}>$</p>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '28px', color: 'gray' }}>{product.price}</p>
                </div>
              </div>
              <Link href={
                {
                  pathname: "[category]/[id]",
                  query: {
                    category: productCategory,
                    id: product.id,
                  }
                }
              } as={`${productCategory}/${product.id}`} key={product.id}
                passHref
              >
                <button>View More</button>
              </Link>
            </div>
          )
        })
      }
    </div>
  )

}

export default Category;