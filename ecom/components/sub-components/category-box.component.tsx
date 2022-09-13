import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import styles from '../../styles/sub-components/category-box.module.scss';

type CategoryBoxProps = {
  text: string,
  image: StaticImageData,
  link?: string,
}

const CategoryBox = (props: CategoryBoxProps) => {

  const { text, image } = props;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="image of a product category" height={600} width={1000} />
      </div>
      <div className={styles.textContainer}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CategoryBox