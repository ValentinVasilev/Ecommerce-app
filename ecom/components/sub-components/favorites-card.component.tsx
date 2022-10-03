import styles from '../../styles/favorites-card.module.scss';
import Image from 'next/image'

type FavoriteCardProps = {
  isNew?: boolean,
  img?: string,
  price?: number,
  title?: string,

}

const FavoritesCard = (props:FavoriteCardProps) => {
  return (
    <div className={styles.container}>
      <div>NEW</div>
      <div>123</div>
    </div>
  )
}

export default FavoritesCard;