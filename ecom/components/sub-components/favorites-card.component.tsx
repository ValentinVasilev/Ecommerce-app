import styles from '../../styles/favorites-card.module.scss';
import Image from 'next/image'

type FavoriteCardProps = {
  isNew?: boolean,
  img?: string,
  price?: number,
  title?: string,

}

const FavoritesCard = (props: FavoriteCardProps) => {

  const { price, title, isNew } = props;

  return (
    <div className={styles.container}>
      {
        isNew && <div className={styles.isNewContainer}>NEW</div>
      }
      <div>
        <p>{price}</p>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default FavoritesCard;