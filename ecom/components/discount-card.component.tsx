import React from "react";
import Image, { StaticImageData } from "next/image";
import DiscountImg from '../assets/icons/discount.png';
import Rating from '@mui/material/Rating';
import style from '../styles/discount-card.module.scss';

type DiscountCardProps = {
  cardImg: StaticImageData | string,
  brand: string,
  model: string,
  rate?: number,
  actualPrice: number,
  discountPrice: number,
  inStock: number,
}

export const DiscountCard = (props: DiscountCardProps) => {

  let instockColor: string = '';

  if (props.inStock >= 50) {
    instockColor = 'green'
  } else if (props.inStock < 50 && props.inStock > 10) {
    instockColor = 'orange'
  } else if (props.inStock <= 10) {
    instockColor = 'red'
  }

  return (
    <div className={style.cardWrapper}>
      <div className={style.discountWrapper}>
        <Image src={DiscountImg} width={25} height={25} alt="discount image" />
        {/* <p>Save ${props.actualPrice - props.discountPrice}</p> */}
        <p>Save 10%</p>

      </div>
      <div className={style.cardContent}>
        <div>
          <Image src={props.cardImg} alt="image of the card" width={430} height={250} layout='responsive' />
        </div>
        <p className={style.brand}>{props.brand}</p>
        <p className={style.model}>{props.model}</p>
        <div className={style.rate}>
          <Rating name="half-rating-read" defaultValue={props.rate} precision={0.5} readOnly />
          <p className={style.rateNumber}>{props.rate}</p>
        </div>

        <div style={{ display: 'flex', marginBottom: '-2vh' }}>
          <p className={style.discount}>${(props.discountPrice * 0.9).toFixed(0)}</p>
          <p className={style.price}>$ {props.actualPrice}</p>
        </div>
        {props.inStock < 2 ? (
          <p style={{ color: instockColor, fontWeight: 500 }}>Last product in stock</p>

        ) : (
          <p style={{ color: instockColor, fontWeight: 500 }}>{props.inStock} Available in stock</p>
        )}
      </div>
    </div >
  )
}
