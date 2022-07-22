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
            <div key={item} >
              <ItemCard
                thumbnail={item.thumbnail}
                title={item.title}
                count={1}
                refId={item.id}
                price={item.price}
                category={item.category}
                account={account}
              />
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
  account: any
}



const ItemCard = (props: ItemCardProps) => {

  const { thumbnail, title, refId, count, price, category, account } = props;

  const RemoveItem = (id: any) => {
    let userCart = account[0].user.cart

    let indexOfItem = userCart.findIndex((i: any) => i.id === id);

    let newCartLength = [...userCart];

    newCartLength.splice(indexOfItem, 1);
  }


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
        {/* <Button variant="outlined" className={styles.deleteButton}>View More</Button> */}
        <Button onClick={() => RemoveItem(refId)} variant="outlined" color="error" className={styles.deleteButton}>X</Button>
      </div>
    </div >
  )
}