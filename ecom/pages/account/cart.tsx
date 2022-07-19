import { useState } from "react";
import { useAppSelector } from "../../utils/app/hooks";
import { selectAccount } from "../../utils/app/features/account/accountSlice";
import styles from '../../styles/account/cart.module.scss';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

const Cart = () => {

  const [account, setAccount] = useState(useAppSelector(selectAccount));

  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemsContainer}>
        {account[0]?.user.cart.map((item: any) => {
          return (
            <div key={item}>
              <ItemCard thumbnail={item.thumbnail} title={item.title} count={1} refId={item.id} price={item.price} category={item.category} />
            </div>
          )
        })}


      </div>
    </div >
  )
}

export default Cart;


type ItemCardProps = {
  thumbnail: StaticImageData,
  // thumbnail: string,
  title: string,
  refId: string,
  count: number,
  price: number,
  category: string,
}


const ItemCard = (props: ItemCardProps) => {

  const { thumbnail, title, refId, count, price, category } = props;
  return (
    <div className={styles.itemCardWrapper}>
      <div className={styles.cardContainer}>
        <div style={{ width: '25%' }}>
          <Image
            src={thumbnail}
            alt="image thumbnail"
            width={100} height={100}
            style={{ border: '1px solid transparent', borderRadius: '80px' }}
          />
        </div>
        <Link href={`/products/${category}/${refId}`} passHref>
          <div style={{ width: '25%' }}>
            <p>{title}</p>
            <p>ref: {refId}</p>
          </div>
        </Link>
        <p style={{ width: '25%' }}>{count}</p>
        <p style={{ width: '25%' }}>{price}</p>
      </div>
      <div style={{ alignSelf: 'center', margin: '0vh', height: '100%' }}>
        <Button variant="outlined" className={styles.deleteButton}>View More</Button>
        <Button variant="outlined" color="error" className={styles.deleteButton}>Remove</Button>
      </div>
    </div >
  )
}