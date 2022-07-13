import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductsList from "../../../assets/data/products";
import Link from "next/link";
import styles from '../../../styles/sub-components/card-by-category.module.scss';
import { Accordion, AccordionSummary, AccordionDetails, Checkbox } from "@mui/material";
import DownArrow from '../../../assets/icons/down-arrow.png';
import Image from "next/image";

const Category = () => {



  const router = useRouter();

  const productCategory = router.query.category;

  const [priceTag, setPriceTag] = useState(9999);
  const [checked, setChecked] = useState(false)

  const priceTags = [
    {
      id: 1,
      price: 1100,
    },
    {
      id: 2,
      price: 1500,
    },
    {
      id: 13,
      price: 1700,
    }
  ]

  const OrderByPrice = (value: any) => {
    setPriceTag(value)
    setChecked(!checked)

    if (checked) {
      setPriceTag(9999)
    }

  }

  return (
    <div style={{ display: ' flex' }}>
      <div style={{ minWidth: '10%' }}>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<Image src={DownArrow} />}
            >
              <p>Price</p>
            </AccordionSummary>
            <AccordionDetails
              sx={{ margin: '-1vh 0vh -2vh 0vh' }}
            >
              {priceTags.map(price => {
                return (
                  <div key={price.id} style={{ display: 'flex', margin: '-1vh 0vh 0vh 0vh' }}>
                    <p>${price.price}</p>
                    <Checkbox value={price.price} onClick={(e) => OrderByPrice(e.target.value)} />
                  </div>
                )
              })}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

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
          .filter(price => price.price <= priceTag)
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
    </div>
  )

}

export default Category;
