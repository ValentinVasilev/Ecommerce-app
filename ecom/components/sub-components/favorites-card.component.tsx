import styles from '../../styles/favorites-card.module.scss';
import Image, { StaticImageData } from 'next/image'

export type FavoriteCardProps = {
  isNew?: boolean,
  img: StaticImageData,
  price?: number,
  title?: string,
  description?: string,

}

const FavoritesCard = (props: FavoriteCardProps) => {

  const { img, price, title, isNew, description } = props;

  return (
    <div className={styles.container}>
      {
        isNew && <div className={styles.isNewContainer}>NEW</div>
      }
      <div>
        <div style={{ margin: '8vh' }}>
          <Image src={img} alt="product image" width={300} height={250} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          <p style={{ fontFamily: 'cursive', margin: '0vh 7vh', fontSize: '22px' }}>${price}</p>
          <div className={styles.informationBtn}>
            <p className={styles.information}>{description}</p>
            <span className={styles.bubble}></span>
            <span>i</span>
          </div>
        </div>
        <p style={{ fontFamily: 'fantasy', margin: '2vh 7vh', fontSize: '22px' }}>{title}</p>
      </div>
    </div>
  )
}

export default FavoritesCard;