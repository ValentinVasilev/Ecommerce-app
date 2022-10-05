import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import styles from '../../styles/sub-components/category-box.module.scss';

export type CategoryBoxProps = {
  id?: number,
  text: string,
  image: StaticImageData,
  link: string,
}

const CategoryBox = (props: CategoryBoxProps) => {

  const { text, image, link } = props;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="image of a product category" height={600} width={1000} />
      </div>

      <div className={styles.textContainer}>
        <hr className={styles.hr} />
        <p className={styles.text}>{text}</p>
        <hr className={styles.hr} />
        <Link href={`/products/${link}`} passHref>
          <button className={styles.btn}>View More</button>
        </Link>
      </div>

    </div>
  )
}

export default CategoryBox;