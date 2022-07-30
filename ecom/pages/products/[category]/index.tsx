import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductsList from "../../../assets/data/products";
import Link from "next/link";
import styles from '../../../styles/sub-components/card-by-category.module.scss';
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, Tooltip, Slider, TextField } from "@mui/material";
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

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{ margin: '2vh', width: '40%' }}>
            <TextField label="Search for product" variant="filled" onChange={(e) => setSearchParams(e.target.value)} fullWidth />
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexGrow: '25%',
          // flex: '4 1 auto',
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
                <ProductCard
                  key={product.id}
                  productId={product.id}
                  title={product.title}
                  brand={product.brand}
                  description={product.description}
                  category={product.category}
                  price={product.price}
                  thumbnail={product.thumbnail}
                  rating={product.rating}
                  count={product.stock}
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
