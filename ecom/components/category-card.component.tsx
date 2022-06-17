import Image, { StaticImageData } from "next/image";
import React from "react";
import style from '../styles/category-card.module.scss';
import ShoeImg from '../assets/icons/shoe.png'
import Link from "next/link";


type CategoryCardProps = {
  bgImg: StaticImageData,
  title: string,
  subTitle: string,
  linkTo: string,
}

export const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div className={style.categoryCard}>
      <div className={style.contentWrapper}>
        <p className={style.title}>{props.title}</p>
        <p className={style.subTitle}>{props.subTitle}</p>
        <div className={style.btnWrapper}>
          <Link href={`/products/${props.linkTo}`} passHref>
            <button className={style.btnStyle}>Shop Now</button>
          </Link>
        </div>
      </div>
      <div >
        <Image src={props.bgImg} alt="product img" width={150} height={150} />
      </div>
    </div>
  )
}