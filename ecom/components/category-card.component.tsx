import React from "react";
import style from '../styles/category-card.module.scss';

type CategoryCardProps = {
  bgImg?: string,
  title: string,
  subTitle: string,
  linkTo?: string,
}

export const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div className={style.categoryCard}>
      <p>{props.title}</p>
      <p>{props.subTitle}</p>
    </div>
  )
}