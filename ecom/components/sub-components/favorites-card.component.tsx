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
        <Image src={img} alt="product image" width={300} height={250} />
        <p>${price}</p>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default FavoritesCard;