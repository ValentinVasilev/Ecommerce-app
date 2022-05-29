import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from '../styles/promotions-card.module.scss';

type PromotionCardProps = {
  img: StaticImageData,
  icon: StaticImageData,
  title: string,
  isReverse: boolean,
}



export const PromotionCard = (props: PromotionCardProps) => {

  const { title, img, icon, isReverse } = props;

  return (
    <div className={styles.cardWrapper} style={{ flexDirection: isReverse ? 'column-reverse' : 'column', backgroundColor: isReverse ? '#f6f5fa' : '#e7e7e7' }}>
      <div className={styles.imgContainer}>
        <Image src={img} alt="sweater image" />
      </div>
      <div className={styles.contentContainer}>
        <div style={{ marginTop: '4vh' }}>
          <Image src={icon} alt="icon" width={50} height={50} />
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.btnWrapper}>
          <button className={styles.btnStyle}>Brows Products</button>
        </div>
      </div>
    </div>
  )
}