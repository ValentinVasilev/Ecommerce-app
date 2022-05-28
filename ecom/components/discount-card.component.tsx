import React from "react";
import Image, { StaticImageData } from "next/image";
import style from '../styles/discount-card.module.scss';

type DiscountCardProps = {
  totalSave: string,
  cardImg: StaticImageData,
  brand: string,
  model: string,
  rate?: string,
  actualPrice: string,
  discountPrice: string,
  inStock: number,
}

export const DiscountCard = (props: DiscountCardProps) => {

  let instockColor = '';


  if (props.inStock >= 50) {
    instockColor = 'green'
  } else if (props.inStock < 50 && props.inStock > 10) {
    instockColor = 'orange'
  } else if (props.inStock <= 10) {
    instockColor = 'red'
  }

  return (
    <div className={style.cardWrapper}>
      <p className={style.cardDiscount}>{props.totalSave}</p>
      <div className={style.cardContent}>
        <div>
          <Image src={props.cardImg} alt="image of the card" />
        </div>
        <p className={style.brand}>{props.brand}</p>
        <p className={style.model}>{props.model}</p>
        <p className={style.rate}>{props.rate}</p>
        <div style={{ display: 'flex' }}>
          <p className={style.discount}>${props.discountPrice}</p>
          <p className={style.price}>$ {props.actualPrice}</p>
        </div>
        <p style={{ color: instockColor, fontWeight: 500 }}>{props.inStock} Available in stock</p>
      </div>
    </div>
  )
}
