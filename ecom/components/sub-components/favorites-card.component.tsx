import styles from '../../styles/favorites-card.module.scss';
import Image, { StaticImageData } from 'next/image'

type FavoriteCardProps = {
  isNew?: boolean,
  img: StaticImageData,
  price?: number,
  title?: string,

}

const FavoritesCard = (props: FavoriteCardProps) => {

  const { img, price, title, isNew } = props;

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
          <p className={styles.information}>Some information about the product</p>
          <span className={styles.bubble}></span>
          <button className={styles.informationBtn}>i</button>
        </div>
        <p style={{ fontFamily: 'fantasy', margin: '2vh 7vh', fontSize: '22px' }}>{title}</p>
      </div>
    </div>
  )
}

export default FavoritesCard;