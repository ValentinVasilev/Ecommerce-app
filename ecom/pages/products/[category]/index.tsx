import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductsList from "../../../assets/data/products";
import Link from "next/link";
import styles from '../../../styles/sub-components/card-by-category.module.scss';
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, Tooltip, Slider } from "@mui/material";
import DownArrow from '../../../assets/icons/downArrow.png';
import Image from "next/image";
import ProductCard from "../../../components/product-card.component";

const Category = () => {



  const router = useRouter();

  const productCategory = router.query.category;

  const [priceTag, setPriceTag] = useState(9999);
  const [checked, setChecked] = useState(false)
  const [brand, setBrand] = useState([]);
  const [brandTag, setBrandTag] = useState('');
  const [searchParams, setSearchParams] = useState('');

  const marks = [
    {
      value: 0,
      label: '0'
    },
    {
      value: 1000,
      label: '1000',
    },
    {
      value: 2000,
      label: '2000'
    },
    {
      value: 3000,
      label: '3000'
    },
    {
      value: 4000,
      label: '4000'
    },
  ];



  const SetBrandList = () => {
    ProductsList
      .filter(category => category.category === productCategory)
      .map(product => {
        if (brand.includes(product.brand)) {
          return;
        }
        brand.push(product?.brand);
      })
  }

  SetBrandList();

  const OrderByPrice = (value: any) => {
    setBrandTag(value)
    // setPriceTag(value)
    // setChecked(!checked)

    // if (checked) {
    //   setPriceTag(9999)
    // }
    console.log(value)

  }

  return (
    <div style={{ display: ' flex' }}>
      <div style={{ minWidth: '200px' }}>
        <p style={{ textAlign: 'center', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500', textDecoration: 'underline' }}>Filters</p>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<Image src={DownArrow} alt="expand icon" />}
            >
              <p>Price</p>
            </AccordionSummary>
            <AccordionDetails
              sx={{ margin: '-1vh 0vh -2vh 0vh' }}
            >
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" max={4000} marks={marks} step={100} onChange={(e) => setPriceTag(e.target?.value)} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<Image src={DownArrow} alt="expand icon" />}
            >
              <p>Brand</p>
            </AccordionSummary>
            <AccordionDetails
              sx={{ margin: '-1vh 0vh -2vh 0vh', alignItems: 'flex-end', display: 'flex', flexDirection: 'column', fontSize: '14px' }}
            >
              {brand.sort().map(brand => {
                return (
                  <div key={brand} style={{ display: 'flex', margin: '-1vh 0vh 0vh 0vh' }}>
                    <p>{brand}</p>
                    <Checkbox value={brand} onClick={(e) => OrderByPrice(e.target.value)} />
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
        backgroundColor: 'white',
        padding: '0vh 1vh 0vh 1vh',
        flexDirection: 'column'
      }}>

        <div style={{ margin: '2vh', border: '1px solid red' }}>
          <input placeholder="Search for product" onChange={(e) => setSearchParams(e.target.value)} />
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0vh 0vh 5vh 0vh'
        }}>
          {ProductsList
            .filter(category => category.category === productCategory)
            .filter(price => price.price <= priceTag)
            // .filter(brand => brand.brand === brandTag)
            .filter(product => product.title.toLowerCase().includes(searchParams.toLowerCase()))
            .map(product => {
              return (
                // <div key={product.id} className={styles.cardContainer}>
                //   <div className={styles.cardInfoStyle}>
                //     <p className={styles.title}>{product.title}</p>
                //     <p className={styles.info}>{product.description}</p>
                //     <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                //       <p style={{ fontFamily: 'Montserrat', fontSize: '28px', color: 'green', marginRight: '15px' }}>$</p>
                //       <p style={{ fontFamily: 'Montserrat', fontSize: '28px', color: 'gray' }}>{product.price}</p>
                //     </div>
                //   </div>
                //   <Link href={
                //     {
                //       pathname: "[category]/[id]",
                //       query: {
                //         category: productCategory,
                //         id: product.id,
                //       }
                //     }
                //   } as={`${productCategory}/${product.id}`} key={product.id}
                //     passHref
                //   >
                //     <button>View More</button>
                //   </Link>
                // </div>
                <ProductCard
                  key={product.id}
                  title={product.title}
                  brand={product.brand}
                  description={product.description}
                  price={product.price}
                  thumbnail={product.thumbnail}
                  rating={product.rating}
                />
              )
            })
          }
        </div>

      </div>
    </div>
  )

}

export default Category;
